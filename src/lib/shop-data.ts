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
    description: "Inchiostri pigmentati a base acqua per stampanti GreenBox EVO",
    image: "/images/shop/greenbox.jpg",
    products: [
      { id: "gb-yellow", name: "Tanica inchiostro YELLOW per GreenBox (225ml)", sku: "GB-YEL", price: 180.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "gb-cyan", name: "Tanica inchiostro CYANO per GreenBox (237ml)", sku: "GB-CYA", price: 180.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "gb-magenta", name: "Tanica inchiostro MAGENTA per GreenBox (233ml)", sku: "GB-MAG", price: 180.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "gb-black", name: "Tanica inchiostro BLACK per GreenBox (498ml)", sku: "GB-BLK", price: 290.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-printbox42",
    name: "PrintBox42",
    description: "Cartucce e testine per stampante PrintBox42",
    image: "/images/shop/printbox42.jpg",
    products: [
      { id: "pb42-k", name: "PB42B Cartuccia inchiostro PrintBox42 NERO", sku: "PB42B", price: 325.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "pb42-m", name: "PB42M Cartuccia inchiostro PrintBox42 MAGENTA", sku: "PB42M", price: 325.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "pb42-y", name: "PB42Y Cartuccia inchiostro PrintBox42 YELLOW", sku: "PB42Y", price: 325.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "pb42-c", name: "PB42C Cartuccia inchiostro PrintBox42 CYAN", sku: "PB42C", price: 325.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "pb42-head", name: "Testina di Stampa per PrintBox42", sku: "PB42-HEAD", price: 630.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-ns-pro-evo",
    name: "NS-PRO EVO",
    description: "Taniche inchiostro e testine per NS-PRO EVO",
    image: "/images/shop/ns-pro-evo.jpg",
    products: [
      { id: "nspro-k", name: "NSPRO EVO - Tanica Inchiostro NERO 2 Litri", sku: "NSPRO-K", price: 819.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "nspro-y", name: "NSPRO EVO - Tanica Inchiostro GIALLO 2 Litri", sku: "NSPRO-Y", price: 819.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "nspro-m", name: "NSPRO EVO - Tanica Inchiostro MAGENTA 2 Litri", sku: "NSPRO-M", price: 819.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "nspro-c", name: "NSPRO EVO - Tanica Inchiostro CIANO 2 Litri", sku: "NSPRO-C", price: 819.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "nspro-head", name: "NSPRO EVO - Testina di Stampa", sku: "NSPRO-HEAD", price: 798.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-ns-multi-lg",
    name: "NS-MULTI LG",
    description: "Taniche inchiostro e testine per NS-MULTI LG",
    image: "/images/shop/ns-multi-lg.jpg",
    products: [
      { id: "multilg-k", name: "MULTI-LG - Tanica Inchiostro NERO 2 Litri", sku: "MLG-K", price: 789.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "multilg-y", name: "MULTI-LG - Tanica Inchiostro GIALLO 2 Litri", sku: "MLG-Y", price: 789.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "multilg-m", name: "MULTI-LG - Tanica Inchiostro MAGENTA 2 Litri", sku: "MLG-M", price: 789.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "multilg-c", name: "MULTI-LG - Tanica Inchiostro CIANO 2 Litri", sku: "MLG-C", price: 789.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "multilg-head", name: "MULTI-LG - Testina di Stampa", sku: "MLG-HEAD", price: 490.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-ns-atom",
    name: "NS-ATOM",
    description: "Taniche inchiostro e testine per NS-ATOM",
    image: "/images/shop/ns-atom.jpg",
    products: [
      { id: "atom-k", name: "NS ATOM - Tanica Inchiostro NERO 250ML", sku: "ATOM-K", price: 244.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "atom-y", name: "NS ATOM - Tanica Inchiostro GIALLO 250ML", sku: "ATOM-Y", price: 244.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "atom-m", name: "NS ATOM - Tanica Inchiostro MAGENTA 250ML", sku: "ATOM-M", price: 244.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "atom-c", name: "NS ATOM - Tanica Inchiostro CIANO 250ML", sku: "ATOM-C", price: 244.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "atom-head", name: "NS ATOM - Testina di Stampa", sku: "ATOM-HEAD", price: 798.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-any-002",
    name: "ANY-002",
    description: "Toner, tamburi e ricambi per stampante laser LED Anytron ANY-002",
    image: "/images/shop/any-002.jpg",
    products: [
      { id: "any-toner-m", name: "Any-002 Cartuccia Toner MAGENTA 11.500 pag.", sku: "ANY-TN-M", price: 195.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "any-toner-c", name: "Any-002 Cartuccia Toner CIANO 11.500 pag.", sku: "ANY-TN-C", price: 195.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "any-toner-y", name: "Any-002 Cartuccia Toner GIALLO 11.500 pag.", sku: "ANY-TN-Y", price: 195.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "any-toner-k", name: "Any-002 Cartuccia Toner NERO 11.000 pag.", sku: "ANY-TN-K", price: 139.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "any-toner-w", name: "Any-002 Cartuccia Toner BIANCO", sku: "ANY-TN-W", price: 498.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "any-drum-y", name: "Any-002 Tamburo GIALLO 28.000 pag.", sku: "ANY-DR-Y", price: 139.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "any-drum-k", name: "Any-002 Tamburo NERO 28.000 pag.", sku: "ANY-DR-K", price: 116.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "any-drum-m", name: "Any-002 Tamburo MAGENTA 28.000 pag.", sku: "ANY-DR-M", price: 139.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "any-drum-c", name: "Any-002 Tamburo CIANO 28.000 pag.", sku: "ANY-DR-C", price: 139.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "any-drum-w", name: "Any-002 Tamburo BIANCO", sku: "ANY-DR-W", price: 445.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "any-fuser-6", name: "Any-002 Fusore 6 pollici", sku: "ANY-FUS-6", price: 600.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "any-fuser-8", name: "Any-002 Fusore 8 pollici", sku: "ANY-FUS-8", price: 315.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "any-belt", name: "Any-002 Belt (ITU)", sku: "ANY-BELT", price: 290.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-lt5c",
    name: "Afinia LT5C",
    description: "Toner e ricambi per stampante Afinia LT5C",
    image: "/images/shop/lt5c.jpg",
    products: [
      { id: "lt5c-k", name: "Toner NERO per Afinia LT5C", sku: "LT5C-TN-K", price: 190.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "lt5c-y", name: "Toner GIALLO per Afinia LT5C", sku: "LT5C-TN-Y", price: 190.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "lt5c-m", name: "Toner MAGENTA per Afinia LT5C", sku: "LT5C-TN-M", price: 190.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "lt5c-c", name: "Toner CIANO per Afinia LT5C", sku: "LT5C-TN-C", price: 190.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "lt5c-w", name: "Toner WHITE per Afinia LT5C", sku: "LT5C-TN-W", price: 278.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "lt5c-waste", name: "Waste Toner Box per Afinia LT5C", sku: "LT5C-WASTE", price: 50.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "lt5c-fuser", name: "Fusore di ricambio per Afinia LT5C", sku: "LT5C-FUSER", price: 477.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "lt5c-belt", name: "ITU Transfer Belt per Afinia LT5C", sku: "LT5C-BELT", price: 265.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-l901",
    name: "Afinia L901 Plus",
    description: "Cartucce e testine per stampante Afinia L901 Plus",
    image: "/images/shop/l901.jpg",
    products: [
      { id: "l901-y", name: "30440-Y Cartuccia Inchiostro Giallo per L901Plus", sku: "30440-Y", price: 215.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "l901-m", name: "30447-M Cartuccia Inchiostro Magenta per L901Plus", sku: "30447-M", price: 215.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "l901-k", name: "30461-K Cartuccia Inchiostro NERO per L901Plus", sku: "30461-K", price: 215.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "l901-c", name: "30454-C Cartuccia Inchiostro Cyan per L901Plus", sku: "30454-C", price: 215.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "l901-head", name: "Testina di Stampa per L901 Plus", sku: "L901-HEAD", price: 630.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-l801",
    name: "Afinia L801 / L801+",
    description: "Cartucce e testine per stampanti Afinia L801 e L801 Plus",
    image: "/images/shop/l801.jpg",
    products: [
      { id: "l801-y", name: "22460 - L801 Yellow", sku: "22460", price: 215.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "l801p-y", name: "30419 - L801Plus Yellow", sku: "30419", price: 220.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "l801-m", name: "22474 - L801 Magenta", sku: "22474", price: 215.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "l801p-m", name: "30433 - L801Plus Magenta", sku: "30433", price: 220.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "l801-c", name: "22467 - L801 Cyano", sku: "22467", price: 215.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "l801p-c", name: "30426 - L801Plus Cyano", sku: "30426", price: 220.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "l801-k", name: "22453 - L801 Black", sku: "22453", price: 215.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "l801p-k", name: "30412 - L801Plus Black", sku: "30412", price: 220.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "l801-head", name: "22537 - Testina di stampa L801", sku: "22537", price: 630.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-l701",
    name: "Afinia L701",
    description: "Cartucce e testine per stampante Afinia L701",
    image: "/images/shop/l701.jpg",
    products: [
      { id: "l701-k", name: "Cartuccia Nero L-701 150ml", sku: "L701-K", price: 200.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "l701-y", name: "Cartuccia Giallo L-701 150ml", sku: "L701-Y", price: 200.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "l701-m", name: "Cartuccia Magenta L-701 150ml", sku: "L701-M", price: 200.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "l701-c", name: "Cartuccia Ciano L-701 150ml", sku: "L701-C", price: 200.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "l701-head", name: "Testina di Stampa Afinia L-701", sku: "L701-HEAD", price: 630.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-vp700",
    name: "VP700",
    description: "Cartucce inchiostro per stampante VP700 (singole e pack 5pz)",
    image: "/images/shop/vp700.jpg",
    products: [
      { id: "vp7-c-5", name: "VP-700-AS02A - Ciano Pack 5pz VP700", sku: "VP-700-AS02A", price: 910.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "vp7-c-1", name: "VP-700-AS02A/1 - Ciano VP700", sku: "VP-700-AS02A/1", price: 183.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "vp7-k-5", name: "VP-700-AS05A - Nero Pack 5pz VP700", sku: "VP-700-AS05A", price: 910.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "vp7-k-1", name: "VP-700-AS05A/1 - Nero VP700", sku: "VP-700-AS05A/1", price: 183.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "vp7-m-5", name: "VP-700-AS08A - Magenta Pack 5pz VP700", sku: "VP-700-AS08A", price: 910.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "vp7-m-1", name: "VP-700-AS08A/1 - Magenta VP700", sku: "VP-700-AS08A/1", price: 183.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "vp7-y-5", name: "VP-700-AS11A - Giallo Pack 5pz VP700", sku: "VP-700-AS11A", price: 910.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "vp7-y-1", name: "VP-700-AS11A/1 - Giallo VP700", sku: "VP-700-AS11A/1", price: 183.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-i700",
    name: "iColor 700",
    description: "Toner, tamburi, fusori e ricambi per stampante iColor 700",
    image: "/images/shop/i700.jpg",
    products: [
      { id: "i700-tn-c", name: "ICT700C - Ciano per i700", sku: "ICT700C", price: 290.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "i700-tn-m", name: "ICT700M - Magenta per i700", sku: "ICT700M", price: 290.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "i700-tn-y", name: "ICT700G - Giallo per i700", sku: "ICT700G", price: 290.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "i700-tn-k", name: "ICT700K - Nero per i700", sku: "ICT700K", price: 190.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "i700-tn-w", name: "ICT700W - Bianco per i700", sku: "ICT700W", price: 690.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "i700-dr-c", name: "ICD700C - Tamburo Ciano 30.000 pag.", sku: "ICD700C", price: 189.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "i700-dr-k", name: "ICD700K - Tamburo Nero 30.000 pag.", sku: "ICD700K", price: 164.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "i700-dr-m", name: "ICD700M - Tamburo Magenta 30.000 pag.", sku: "ICD700M", price: 189.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "i700-dr-y", name: "ICD700Y - Tamburo Giallo 30.000 pag.", sku: "ICD700Y", price: 189.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "i700-fus-201", name: "ICF70023V - Fusore 201mm per i700", sku: "ICF70023V", price: 460.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "i700-fus-101", name: "ICF70023V4 - Fusore 101mm per i700", sku: "ICF70023V4", price: 401.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "i700-fus-152", name: "ICF70023V6 - Fusore 152mm per i700", sku: "ICF70023V6", price: 401.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "i700-belt", name: "ICTB700 - ITU per i700", sku: "ICTB700", price: 306.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-300x",
    name: "Afinia 300x",
    description: "Cartucce per stampante Afinia 300x",
    image: "/images/shop/300x.jpg",
    products: [
      { id: "300x-k", name: "BRPC-300X-HW - Nero per 300x", sku: "BRPC-300X-HW", price: 215.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "300x-c", name: "CRPC-300X-HW - Ciano per 300x", sku: "CRPC-300X-HW", price: 215.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "300x-m", name: "MRPC-300X-HW - Magenta per 300x", sku: "MRPC-300X-HW", price: 215.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "300x-y", name: "YRPC-300X-HW - Giallo per 300x", sku: "YRPC-300X-HW", price: 215.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-cx1000",
    name: "Primera CX1000 / CX1200",
    description: "Toner e ricambi per stampanti Primera CX1000 e CX1200",
    image: "/images/shop/cx1000.jpg",
    products: [
      { id: "cx-k", name: "057401 - Nero per CX1000/1200", sku: "057401", price: 235.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "cx-c", name: "057402 - Ciano per CX1000/1200", sku: "057402", price: 449.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "cx-m", name: "057403 - Magenta per CX1000/1200", sku: "057403", price: 449.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "cx-y", name: "057404 - Giallo per CX1000/1200", sku: "057404", price: 449.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "cx-itu", name: "074214 - ITU per CX1000/1200", sku: "074214", price: 695.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-lx2000",
    name: "Primera LX2000",
    description: "Cartucce e kit testina per stampante Primera LX2000",
    image: "/images/shop/lx2000.jpg",
    products: [
      { id: "lx2k-y", name: "PRI-53463 Cartuccia LX-2000e Giallo", sku: "53463", price: 33.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "lx2k-c", name: "PRI-53461 Cartuccia LX-2000e Ciano", sku: "53461", price: 33.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "lx2k-m", name: "PRI-53462 Cartuccia LX-2000e Magenta", sku: "53462", price: 33.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "lx2k-k", name: "PRI-53464 Cartuccia LX-2000e Nero", sku: "53464", price: 62.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "lx2k-kit", name: "LX-2000e Kit Sostituzione testina (include kit inchiostri CMYK)", sku: "LX2K-KIT", price: 269.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-lx900",
    name: "Primera LX900",
    description: "Cartucce e testine per stampante Primera LX900",
    image: "/images/shop/lx900.jpg",
    products: [
      { id: "lx9-c", name: "053422 - Cartuccia LX-900e Ciano", sku: "053422", price: 30.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "lx9-m", name: "053423 - Cartuccia LX-900e Magenta", sku: "053423", price: 30.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "lx9-y", name: "053424 - Cartuccia LX-900e Giallo", sku: "053424", price: 30.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "lx9-k", name: "053425 - Cartuccia LX-900e Nero", sku: "053425", price: 40.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "lx9-head", name: "053471 - Testina LX900e", sku: "053471", price: 90.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-seriese",
    name: "Primera serie DP-SE",
    description: "Consumabili per Primera serie DP-SE",
    image: "/images/shop/dp-se.jpg",
    products: [
      { id: "dpse-color", name: "PRI53332 - CMY HC per DP-SE", sku: "PRI53332", price: 49.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
  {
    slug: "consumabili-serie-dp41xx",
    name: "Primera serie DP41xx",
    description: "Cartucce e testine per Primera serie DP41xx",
    image: "/images/shop/dp41xx.jpg",
    products: [
      { id: "dp41-head", name: "053471 - Testina DP41xxe", sku: "053471", price: 90.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "dp41-c", name: "053601 - Cartuccia DP41xxe Ciano", sku: "053601", price: 31.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "dp41-m", name: "053602 - Cartuccia DP41xxe Magenta", sku: "053602", price: 31.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "dp41-y", name: "053603 - Cartuccia DP41xxe Giallo", sku: "053603", price: 31.00, image: "/images/shop/placeholder.png", inStock: true },
      { id: "dp41-k", name: "053604 - Cartuccia DP41xxe Nero", sku: "053604", price: 41.00, image: "/images/shop/placeholder.png", inStock: true },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
