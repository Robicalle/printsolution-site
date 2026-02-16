// Shop data — from old site scraping (2026-02-16), all prices EUR IVA esclusa

export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  image: string;
  description?: string;
  inStock?: boolean;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    slug: "consumabili-greenbox",
    name: "GreenBox",
    description: "Inchiostri pigmentati a base acqua per stampanti GreenBox",
    image: "/images/shop/greenbox-nobg.png",
    products: [
      { id: "gb-yellow", name: "Tanica inchiostro YELLOW per GreenBox (225ml)", sku: "GB-YEL", price: 180.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "gb-cyan", name: "Tanica inchiostro CYANO per GreenBox (237ml)", sku: "GB-CYA", price: 180.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "gb-magenta", name: "Tanica inchiostro MAGENTA per GreenBox (233ml)", sku: "GB-MAG", price: 180.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "gb-black", name: "Tanica inchiostro BLACK per GreenBox (498ml)", sku: "GB-BLK", price: 290.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-any-002",
    name: "ANY-002",
    description: "Toner, tamburi e ricambi per stampante laser LED Anytron ANY-002",
    image: "/images/shop/categories/any-002.png",
    products: [
      { id: "any-toner-m", name: "Any-002 Cartuccia Toner MAGENTA 11.500 pag.", sku: "ANY-TN-M", price: 195.00, image: "/images/shop/i700-magenta.jpg", inStock: true },
      { id: "any-toner-c", name: "Any-002 Cartuccia Toner CIANO 11.500 pag.", sku: "ANY-TN-C", price: 195.00, image: "/images/shop/i700-ciano.jpg", inStock: true },
      { id: "any-toner-y", name: "Any-002 Cartuccia Toner GIALLO 11.500 pag.", sku: "ANY-TN-Y", price: 195.00, image: "/images/shop/i700-giallo.jpg", inStock: true },
      { id: "any-toner-k", name: "Any-002 Cartuccia Toner NERO 11.000 pag.", sku: "ANY-TN-K", price: 139.00, image: "/images/shop/i700-nero.jpg", inStock: true },
      { id: "any-toner-w", name: "Any-002 Cartuccia Toner BIANCO", sku: "ANY-TN-W", price: 498.00, image: "/images/shop/i700-bianco.jpg", inStock: true },
      { id: "any-drum-y", name: "Any-002 Tamburo GIALLO 28.000 pag.", sku: "ANY-DR-Y", price: 139.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "any-drum-k", name: "Any-002 Tamburo NERO 28.000 pag.", sku: "ANY-DR-K", price: 116.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "any-drum-m", name: "Any-002 Tamburo MAGENTA 28.000 pag.", sku: "ANY-DR-M", price: 139.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "any-drum-c", name: "Any-002 Tamburo CIANO 28.000 pag.", sku: "ANY-DR-C", price: 139.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "any-drum-w", name: "Any-002 Tamburo BIANCO", sku: "ANY-DR-W", price: 445.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "any-fuser-6", name: "Any-002 Fusore 6 pollici", sku: "ANY-FUS-6", price: 600.00, image: "/images/shop/i700-fusore-101.jpg", inStock: true },
      { id: "any-fuser-8", name: "Any-002 Fusore 8 pollici", sku: "ANY-FUS-8", price: 315.00, image: "/images/shop/i700-fusore-201.jpg", inStock: true },
      { id: "any-belt", name: "Any-002 Belt (ITU)", sku: "ANY-BELT", price: 290.00, image: "/images/shop/i700-itu.jpg", inStock: true },
    ],
  },
  {
    slug: "consumabili-lt5c",
    name: "Afinia LT5C",
    description: "Toner e ricambi per stampante Afinia LT5C",
    image: "/images/shop/categories/afinia-lt5c.png",
    products: [
      { id: "lt5c-k", name: "Toner NERO per Afinia LT5C", sku: "LT5C-TN-K", price: 190.00, image: "/images/shop/lt5c-black.jpg", inStock: true },
      { id: "lt5c-y", name: "Toner GIALLO per Afinia LT5C", sku: "LT5C-TN-Y", price: 190.00, image: "/images/shop/lt5c-yellow.jpg", inStock: true },
      { id: "lt5c-m", name: "Toner MAGENTA per Afinia LT5C", sku: "LT5C-TN-M", price: 190.00, image: "/images/shop/lt5c-magenta.jpg", inStock: true },
      { id: "lt5c-c", name: "Toner CIANO per Afinia LT5C", sku: "LT5C-TN-C", price: 190.00, image: "/images/shop/lt5c-cyan.jpg", inStock: true },
      { id: "lt5c-w", name: "Toner WHITE per Afinia LT5C", sku: "LT5C-TN-W", price: 278.00, image: "/images/shop/lt5c-white.jpg", inStock: true },
      { id: "lt5c-waste", name: "Waste Toner Box per Afinia LT5C", sku: "LT5C-WASTE", price: 50.00, image: "/images/shop/lt5c-waste.jpg", inStock: true },
      { id: "lt5c-fuser", name: "Fusore di ricambio per Afinia LT5C", sku: "LT5C-FUSER", price: 477.00, image: "/images/shop/lt5c-fuser.jpg", inStock: true },
      { id: "lt5c-belt", name: "ITU Transfer Belt per Afinia LT5C", sku: "LT5C-BELT", price: 265.00, image: "/images/shop/lt5c-belt.jpg", inStock: true },
    ],
  },
  {
    slug: "consumabili-l901",
    name: "Afinia L901",
    description: "Cartucce e testine per stampante Afinia L901",
    image: "/images/shop/categories/afinia-l901.png",
    products: [
      { id: "l901s-y", name: "26709 - L901 Yellow", sku: "26709", price: 210.00, image: "/images/shop/l901-yellow.jpg", inStock: true },
      { id: "l901s-m", name: "26716 - L901 Magenta", sku: "26716", price: 210.00, image: "/images/shop/l901-magenta.jpg", inStock: true },
      { id: "l901s-c", name: "26723 - L901 Cyano", sku: "26723", price: 210.00, image: "/images/shop/l901-cyan.jpg", inStock: true },
      { id: "l901s-k", name: "26730 - L901 Black", sku: "26730", price: 210.00, image: "/images/shop/l901-black.jpg", inStock: true },
      { id: "l901-head", name: "Testina di Stampa per L901", sku: "L901-HEAD", price: 630.00, image: "/images/shop/l901-testina.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-l901-plus",
    name: "Afinia L901 Plus",
    description: "Cartucce e testine per stampante Afinia L901 Plus",
    image: "/images/shop/l901p-cyan.jpg",
    products: [
      { id: "l901p-y", name: "30440 - L901Plus Yellow", sku: "30440", price: 215.00, image: "/images/shop/l901p-yellow.jpg", inStock: true },
      { id: "l901p-m", name: "30447 - L901Plus Magenta", sku: "30447", price: 215.00, image: "/images/shop/l901p-magenta.jpg", inStock: true },
      { id: "l901p-c", name: "30454 - L901Plus Cyano", sku: "30454", price: 215.00, image: "/images/shop/l901p-cyan.jpg", inStock: true },
      { id: "l901p-k", name: "30461 - L901Plus Black", sku: "30461", price: 215.00, image: "/images/shop/l901p-black.jpg", inStock: true },
      { id: "l901p-head", name: "Testina di Stampa per L901 Plus", sku: "L901P-HEAD", price: 630.00, image: "/images/shop/l901-testina.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-l801",
    name: "Afinia L801",
    description: "Cartucce e testine per stampante Afinia L801",
    image: "/images/shop/l801-category.png",
    products: [
      { id: "l801-y", name: "22460 - L801 Yellow", sku: "22460", price: 215.00, image: "/images/shop/l801-yellow.jpg", inStock: true },
      { id: "l801-m", name: "22474 - L801 Magenta", sku: "22474", price: 215.00, image: "/images/shop/l801-magenta.jpg", inStock: true },
      { id: "l801-c", name: "22467 - L801 Cyano", sku: "22467", price: 215.00, image: "/images/shop/l801-cyan.jpg", inStock: true },
      { id: "l801-k", name: "22453 - L801 Black", sku: "22453", price: 215.00, image: "/images/shop/l801-black.jpg", inStock: true },
      { id: "l801-head", name: "22537 - Testina di stampa L801", sku: "22537", price: 630.00, image: "/images/shop/l801-testina.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-l801-plus",
    name: "Afinia L801 Plus",
    description: "Cartucce per stampante Afinia L801 Plus",
    image: "/images/shop/l801p-cyan.jpg",
    products: [
      { id: "l801p-y", name: "30419 - L801Plus Yellow", sku: "30419", price: 220.00, image: "/images/shop/l801p-yellow.jpg", inStock: true },
      { id: "l801p-m", name: "30433 - L801Plus Magenta", sku: "30433", price: 220.00, image: "/images/shop/l801p-magenta.jpg", inStock: true },
      { id: "l801p-c", name: "30426 - L801Plus Cyano", sku: "30426", price: 220.00, image: "/images/shop/l801p-cyan.jpg", inStock: true },
      { id: "l801p-k", name: "30412 - L801Plus Black", sku: "30412", price: 220.00, image: "/images/shop/l801p-black.jpg", inStock: true },
    ],
  },
  {
    slug: "consumabili-cx1000",
    name: "Primera CX1000 / CX1200",
    description: "Toner e ricambi per stampanti Primera CX1000 e CX1200",
    image: "/images/shop/cx1000-category.png",
    products: [
      { id: "cx-k", name: "057401 - Nero per CX1000/1200", sku: "057401", price: 235.00, image: "/images/shop/cx1000-nero.jpg", inStock: true },
      { id: "cx-c", name: "057402 - Ciano per CX1000/1200", sku: "057402", price: 449.00, image: "/images/shop/cx1000-ciano.jpg", inStock: true },
      { id: "cx-m", name: "057403 - Magenta per CX1000/1200", sku: "057403", price: 449.00, image: "/images/shop/cx1000-magenta.jpg", inStock: true },
      { id: "cx-y", name: "057404 - Giallo per CX1000/1200", sku: "057404", price: 449.00, image: "/images/shop/cx1000-giallo.jpg", inStock: true },
      { id: "cx-itu", name: "074214 - ITU per CX1000/1200", sku: "074214", price: 695.00, image: "/images/shop/cx1000-itu.jpg", inStock: true },
    ],
  },
  {
    slug: "consumabili-lx2000",
    name: "Primera LX2000",
    description: "Cartucce e kit testina per stampante Primera LX2000",
    image: "/images/shop/lx2000-category.png",
    products: [
      { id: "lx2k-y", name: "PRI-53463 Cartuccia LX-2000e Giallo", sku: "53463", price: 33.00, image: "/images/shop/lx2000-giallo.jpg", inStock: true },
      { id: "lx2k-c", name: "PRI-53461 Cartuccia LX-2000e Ciano", sku: "53461", price: 33.00, image: "/images/shop/lx2000-ciano.jpg", inStock: true },
      { id: "lx2k-m", name: "PRI-53462 Cartuccia LX-2000e Magenta", sku: "53462", price: 33.00, image: "/images/shop/lx2000-magenta.jpg", inStock: true },
      { id: "lx2k-k", name: "PRI-53464 Cartuccia LX-2000e Nero", sku: "53464", price: 62.00, image: "/images/shop/lx2000-nero.jpg", inStock: true },
      { id: "lx2k-kit", name: "LX-2000e Kit Sostituzione testina (include kit inchiostri CMYK)", sku: "LX2K-KIT", price: 269.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-lx900",
    name: "Primera LX900",
    description: "Cartucce e testine per stampante Primera LX900",
    image: "/images/shop/lx900-category.png",
    products: [
      { id: "lx9-c", name: "053422 - Cartuccia LX-900e Ciano", sku: "053422", price: 30.00, image: "/images/shop/lx900-ciano.jpg", inStock: true },
      { id: "lx9-m", name: "053423 - Cartuccia LX-900e Magenta", sku: "053423", price: 30.00, image: "/images/shop/lx900-magenta.jpg", inStock: true },
      { id: "lx9-y", name: "053424 - Cartuccia LX-900e Giallo", sku: "053424", price: 30.00, image: "/images/shop/lx900-giallo.jpg", inStock: true },
      { id: "lx9-k", name: "053425 - Cartuccia LX-900e Nero", sku: "053425", price: 40.00, image: "/images/shop/lx900-nero.jpg", inStock: true },
      { id: "lx9-head", name: "053471 - Testina LX900e", sku: "053471", price: 90.00, image: "/images/shop/lx900-testina.jpg", inStock: true },
    ],
  },
  {
    slug: "consumabili-seriese",
    name: "Primera serie DP-SE",
    description: "Consumabili per Primera serie DP-SE",
    image: "/images/shop/dpse-category.png",
    products: [
      { id: "dpse-color", name: "PRI53332 - CMY HC per DP-SE", sku: "PRI53332", price: 49.00, image: "/images/shop/dpse-cmy.jpg", inStock: true },
    ],
  },
  {
    slug: "consumabili-serie-dp41xx",
    name: "Primera serie DP41xx",
    description: "Cartucce e testine per Primera serie DP41xx",
    image: "/images/shop/dp41xx-category.png",
    products: [
      { id: "dp41-head", name: "053471 - Testina DP41xxe", sku: "053471", price: 90.00, image: "/images/shop/dp41xx-testina.jpg", inStock: true },
      { id: "dp41-c", name: "053601 - Cartuccia DP41xxe Ciano", sku: "053601", price: 31.00, image: "/images/shop/dp41xx-ciano.jpg", inStock: true },
      { id: "dp41-m", name: "053602 - Cartuccia DP41xxe Magenta", sku: "053602", price: 31.00, image: "/images/shop/dp41xx-magenta.jpg", inStock: true },
      { id: "dp41-y", name: "053603 - Cartuccia DP41xxe Giallo", sku: "053603", price: 31.00, image: "/images/shop/dp41xx-giallo.jpg", inStock: true },
      { id: "dp41-k", name: "053604 - Cartuccia DP41xxe Nero", sku: "053604", price: 41.00, image: "/images/shop/dp41xx-nero.jpg", inStock: true },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
