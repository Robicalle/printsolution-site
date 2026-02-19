const TOKEN = 'sks3YrmS3dSv4Eg0CPrCec0c0xy8Fh3tjNcJ8uqmGjx6CqiDTTrMYZrv7oZbHsiVuMdSrTJgaSDWaT0lkWzT6w5lyapsIKyxdzfdjvMut07HkWyjKLUoqz1b6e5nSRL31BFgABAMPNLZnl5REeBpKuOnt7OsK05tOB5KAG6hUCUAY1NcweSK';
const PROJECT = 'dnhjoqwl';
const DATASET = 'production';

async function query(groq) {
  const url = `https://${PROJECT}.api.sanity.io/v2024-01-01/data/query/${DATASET}?query=${encodeURIComponent(groq)}`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${TOKEN}` } });
  const data = await res.json();
  return data.result;
}

// Get all products
const products = await query('*[_type=="product"]{_id,name,"slug":slug.current}');
console.log("=== PRODUCTS ===");
console.log(JSON.stringify(products, null, 2));

// Get all solutions
const solutions = await query('*[_type=="solution"]{_id,title,"slug":slug.current}');
console.log("\n=== SOLUTIONS ===");
console.log(JSON.stringify(solutions, null, 2));

// Get all pages
const pages = await query('*[_type=="page"]{_id,title,"slug":slug.current,pageType}');
console.log("\n=== PAGES ===");
console.log(JSON.stringify(pages, null, 2));
