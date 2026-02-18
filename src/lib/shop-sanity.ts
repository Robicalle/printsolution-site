import { getAllShopProducts } from "@/sanity/lib/fetchers";
import { urlForImage } from "@/sanity/lib/image";
import { categories as staticCategories, getCategoryBySlug as staticGetCategory, type Category, type Product } from "./shop-data";

export type { Category, Product };

// Try to build categories from Sanity shopProducts grouped by printerModel
// Falls back to static data if Sanity data is insufficient
export async function getShopCategories(): Promise<Category[]> {
  try {
    const sanityProducts = await getAllShopProducts();
    if (!sanityProducts || sanityProducts.length === 0) {
      return staticCategories;
    }

    // Group by printerModel
    const grouped = new Map<string, any[]>();
    for (const p of sanityProducts) {
      const model = p.printerModel || "altro";
      if (!grouped.has(model)) grouped.set(model, []);
      grouped.get(model)!.push(p);
    }

    // If no printerModel is set on any product, fall back to static
    if (grouped.size === 1 && grouped.has("altro")) {
      return staticCategories;
    }

    const categories: Category[] = [];
    for (const [model, products] of grouped) {
      const slug = `consumabili-${model.toLowerCase().replace(/\s+/g, "-")}`;
      // Try to find matching static category for image/description fallback
      const staticCat = staticCategories.find(c => c.slug === slug);

      categories.push({
        slug,
        name: model,
        description: staticCat?.description || `Consumabili per ${model}`,
        image: staticCat?.image || "/images/shop/placeholder.png",
        products: products.map((p: any) => ({
          id: p._id,
          name: p.name || "",
          sku: p.sku || "",
          price: p.price || 0,
          image: p.image ? urlForImage(p.image).width(400).url() : "/images/shop/placeholder.png",
          description: p.description,
          inStock: p.inStock !== false,
        })),
      });
    }

    return categories.length > 0 ? categories : staticCategories;
  } catch (e) {
    console.error("Failed to fetch shop from Sanity, using static data:", e);
    return staticCategories;
  }
}

export async function getShopCategoryBySlug(slug: string): Promise<Category | undefined> {
  const cats = await getShopCategories();
  return cats.find(c => c.slug === slug);
}
