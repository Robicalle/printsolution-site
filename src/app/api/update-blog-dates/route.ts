/**
 * API Route per aggiornare le date publishedAt dei post del blog
 * Protetto da secret, accessibile solo internamente
 */

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

// Client creato a runtime per evitare errori build
function getSanityClient() {
  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
    useCdn: false,
    token: process.env.SANITY_API_READ_TOKEN!, // Provo con read token
  });
}

export async function POST(request: NextRequest) {
  try {
    // Verifica secret
    const { secret } = await request.json();
    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const client = getSanityClient();

    console.log('📝 Recupero post dal blog...');
    const posts = await client.fetch(`*[_type == "post"] | order(_createdAt asc) {
      _id, title, publishedAt, _createdAt
    }`);

    if (posts.length === 0) {
      return NextResponse.json({ 
        success: true, 
        message: 'Nessun post trovato',
        updated: 0 
      });
    }

    // Distribuisci date negli ultimi 12 mesi
    const now = new Date();
    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setMonth(now.getMonth() - 12);

    const timeSpan = now.getTime() - twelveMonthsAgo.getTime();
    const interval = timeSpan / posts.length;

    const updates = [];

    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      
      // Calcola nuova data: partendo da 12 mesi fa, distribuisci uniformemente
      const newDate = new Date(twelveMonthsAgo.getTime() + (interval * i));
      
      // Arrotonda a giorni interi e aggiusta l'ora alle 10:00
      newDate.setHours(10, 0, 0, 0);

      const oldDate = post.publishedAt ? new Date(post.publishedAt).toISOString().split('T')[0] : 'N/A';
      const newDateStr = newDate.toISOString();

      updates.push({
        id: post._id,
        title: post.title,
        oldDate,
        newDate: newDateStr.split('T')[0]
      });

      // Aggiorna il post
      await client
        .patch(post._id)
        .set({ publishedAt: newDateStr })
        .commit();
    }

    return NextResponse.json({
      success: true,
      message: `Aggiornati ${posts.length} post`,
      range: `${twelveMonthsAgo.toISOString().split('T')[0]} → ${now.toISOString().split('T')[0]}`,
      updates
    });

  } catch (error: any) {
    console.error('❌ Errore:', error);
    return NextResponse.json({ 
      error: error.message,
      details: error.toString()
    }, { status: 500 });
  }
}
