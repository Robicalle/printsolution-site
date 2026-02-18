import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const SECRET = process.env.SANITY_REVALIDATE_SECRET;

// Map Sanity document types to paths to revalidate
function getPathsForType(type: string, slug?: string): string[] {
  const paths: string[] = [];
  const locales = ["it", "en"];

  switch (type) {
    case "product":
      for (const l of locales) {
        paths.push(`/${l}/prodotti`);
        if (slug) paths.push(`/${l}/prodotti/${slug}`);
      }
      break;
    case "post":
      for (const l of locales) {
        paths.push(`/${l}/blog`);
        if (slug) paths.push(`/${l}/blog/${slug}`);
      }
      break;
    case "solution":
      for (const l of locales) {
        paths.push(`/${l}/soluzioni`);
        if (slug) paths.push(`/${l}/soluzioni/${slug}`);
      }
      break;
    case "shopProduct":
      for (const l of locales) {
        paths.push(`/${l}/shop`);
      }
      break;
    case "faq":
      // FAQ might appear on multiple pages
      for (const l of locales) {
        paths.push(`/${l}`);
      }
      break;
    case "siteSettings":
      // Revalidate everything
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
