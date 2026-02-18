import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const slug = request.nextUrl.searchParams.get("slug") || "/";
  const type = request.nextUrl.searchParams.get("type") || "";

  if (secret !== process.env.SANITY_API_READ_TOKEN) {
    return new Response("Invalid token", { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();

  // Build redirect path based on document type
  let path = slug;
  if (type === "product") path = `/prodotti/${slug}`;
  else if (type === "post") path = `/blog/${slug}`;
  else if (type === "solution") path = `/soluzioni/${slug}`;
  else if (type === "shopProduct") path = `/shop/${slug}`;

  redirect(`/it${path}`);
}
