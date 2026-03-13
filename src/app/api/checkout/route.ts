import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-01-28.clover",
});

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Carrello vuoto" }, { status: 400 });
    }

    const origin = req.headers.get("origin") || "https://www.printsolutionsrl.it";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      locale: "it",
      line_items: items.map((item: { name: string; price: number; quantity: number; sku?: string }) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name,
            ...(item.sku ? { metadata: { sku: item.sku } } : {}),
          },
          // Prezzi IVA INCLUSA (22% su prezzo base)
          unit_amount: Math.round(item.price * 1.22 * 100), // IVA 22% + converti in cents
        },
        quantity: item.quantity,
      })),
      // Auto-calculate tax
      automatic_tax: { enabled: false },
      // Shipping options
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 1500, // €15.00 spedizione express
              currency: "eur",
            },
            display_name: "Spedizione Express",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 2 },
              maximum: { unit: "business_day", value: 4 },
            },
          },
        },
      ],
      // Shipping
      shipping_address_collection: {
        allowed_countries: ["IT", "DE", "FR", "ES", "AT", "CH", "NL", "BE", "GB", "PT"],
      },
      // Customer info
      billing_address_collection: "required",
      customer_creation: "always",
      // URLs
      success_url: `${origin}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/shop/checkout`,
      // Metadata
      metadata: {
        source: "printsolution-eshop",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    console.error("Stripe checkout error:", err);
    const message = err instanceof Error ? err.message : "Errore durante il checkout";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
