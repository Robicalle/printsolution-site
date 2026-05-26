import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const SECRET = process.env.SANITY_REVALIDATE_SECRET;

// Map Sanity document types to paths to revalidate
// Note: Italian locale uses no URL prefix, English uses /en/
function getPathsForType(type: string, slug?: string): string[] {
  const paths: string[] = [];

  switch (type) {
    case "product":
      paths.push("/prodotti");
      if (slug) paths.push(`/prodotti/${slug}`);
      paths.push("/en/prodotti");
      if (slug) paths.push(`/en/prodotti/${slug}`);
      break;
    case "post":
      paths.push("/blog");
      if (slug) paths.push(`/blog/${slug}`);
      paths.push("/en/blog");
      if (slug) paths.push(`/en/blog/${slug}`);
      break;
    case "solution":
      paths.push("/soluzioni");
      if (slug) paths.push(`/soluzioni/${slug}`);
      paths.push("/en/soluzioni");
      if (slug) paths.push(`/en/soluzioni/${slug}`);
      break;
    case "shopProduct":
      paths.push("/shop");
      paths.push("/en/shop");
      break;
    case "faq":
      paths.push("/");
      paths.push("/en");
      break;
    case "siteSettings":
      paths.push("/");
      break;
    default:
      paths.push("/");
  }

  return paths;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const secret = request.nextUrl.searchParams.get("secret");

    if (secret !== SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    const { _type, slug } = body;
    const slugValue = slug?.current || slug;
    const paths = getPathsForType(_type, slugValue);

    for (const path of paths) {
      revalidatePath(path);
    }

    return NextResponse.json({
      revalidated: true,
      paths,
      now: Date.now(),
    });
  } catch (err: any) {
    return NextResponse.json(
      { message: "Error revalidating", error: err.message },
      { status: 500 }
    );
  }
}
