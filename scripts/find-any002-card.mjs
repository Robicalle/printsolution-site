import fetch from 'node-fetch';

const projectId = 'dnhjoqwl';
const dataset = 'production';
const token = 'skGw5g4o5waHkuKIcISUkqAFJu7CqRLkmxgflBCMYnyJy4R5crQFxTye8oDSqPxoazq6v66qychQNUilVrLgYUwhGTqK4CiVdY28tUSaRfbGxabgciyimZNyuR2gyFQnNUBJjR4H9UpYYh4J35JljRXHqId3DldhYsoldMErwG9riVShsANZ';

// Query COMPLETA per trovare TUTTI i documenti (qualsiasi tipo)
const query = `*[defined(sezioniPagina)]{
  _id,
  _type,
  name,
  title,
  slug,
  sezioniPagina[_type == "productCardList"]{
    _key,
    sectionHeading,
    products[]{
      name,
      specs,
      specs_en
    }
  }
}`;

const url = `https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}?query=${encodeURIComponent(query)}`;

try {
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('❌ Error:', error);
    process.exit(1);
  }

  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));

  // Cerca ANY-002
  for (const doc of data.result) {
    if (doc.sezioniPagina && doc.sezioniPagina.length > 0) {
      for (const section of doc.sezioniPagina) {
        if (section.products && section.products.length > 0) {
          for (const product of section.products) {
            if (product.name && product.name.includes('ANY-002')) {
              console.log('\n🎯 TROVATO ANY-002 in:');
              console.log(`   Documento: ${doc._type} - ${doc.name || doc.title || doc._id}`);
              console.log(`   ID: ${doc._id}`);
              console.log(`   Section key: ${section._key}`);
              console.log(`   Specs IT:`, product.specs);
              console.log(`   Specs EN:`, product.specs_en);
            }
          }
        }
      }
    }
  }
} catch (error) {
  console.error('❌ Errore:', error.message);
  process.exit(1);
}
