/**
 * Script per aggiornare le date publishedAt dei post del blog
 * in modo che sembrino scritti durante gli ultimi 12 mesi
 */

import { createClient } from '@sanity/client';
import fs from 'fs';

const token = fs.readFileSync('C:\\Users\\Jarvis\\.openclaw\\workspace\\memory\\vault\\sanity-editor-token.key', 'utf-8').trim();

const client = createClient({
  projectId: 'dnhjoqwl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
});

async function updateBlogDates() {
  try {
    console.log('📝 Recupero post dal blog...');
    const posts = await client.fetch(`*[_type == "post"] | order(_createdAt asc) {
      _id, title, publishedAt, _createdAt
    }`);

    console.log(`✅ Trovati ${posts.length} post`);

    if (posts.length === 0) {
      console.log('⚠️ Nessun post trovato');
      return;
    }

    // Distribuisci date negli ultimi 12 mesi
    const now = new Date();
    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setMonth(now.getMonth() - 12);

    const timeSpan = now.getTime() - twelveMonthsAgo.getTime();
    const interval = timeSpan / posts.length;

    console.log('\n📅 Aggiornamento date...\n');

    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      
      // Calcola nuova data: partendo da 12 mesi fa, distribuisci uniformemente
      const newDate = new Date(twelveMonthsAgo.getTime() + (interval * i));
      
      // Arrotonda a giorni interi e aggiusta l'ora alle 10:00
      newDate.setHours(10, 0, 0, 0);

      const oldDate = post.publishedAt ? new Date(post.publishedAt).toISOString().split('T')[0] : 'N/A';
      const newDateStr = newDate.toISOString();

      console.log(`${i + 1}. ${post.title}`);
      console.log(`   Vecchia: ${oldDate} → Nuova: ${newDateStr.split('T')[0]}`);

      // Aggiorna il post
      await client
        .patch(post._id)
        .set({ publishedAt: newDateStr })
        .commit();
    }

    console.log('\n✅ Tutte le date aggiornate con successo!');
    console.log(`📊 Range: ${twelveMonthsAgo.toISOString().split('T')[0]} → ${now.toISOString().split('T')[0]}`);

  } catch (error) {
    console.error('❌ Errore:', error.message);
    process.exit(1);
  }
}

updateBlogDates();
