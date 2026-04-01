import fetch from 'node-fetch';

const projectId = 'dnhjoqwl';
const dataset = 'production';
const token = 'skGw5g4o5waHkuKIcISUkqAFJu7CqRLkmxgflBCMYnyJy4R5crQFxTye8oDSqPxoazq6v66qychQNUilVrLgYUwhGTqK4CiVdY28tUSaRfbGxabgciyimZNyuR2gyFQnNUBJjR4H9UpYYh4J35JljRXHqId3DldhYsoldMErwG9riVShsANZ';

const docId = 'solution-etichette';
const sectionKey = '441bb7b97f3a';

// Patch per rimuovere gli specs con "Fustellatrice" e "die-cutter"
const mutations = [
  {
    patch: {
      id: docId,
      unset: [
        // Rimuovi dalla posizione 3 (indice array 0-based)
        `sezioniPagina[_key == "${sectionKey}"].products[name == "Anytron ANY-002"].specs[3]`,
        `sezioniPagina[_key == "${sectionKey}"].products[name == "Anytron ANY-002"].specs_en[3]`,
      ]
    }
  }
];

const url = `https://${projectId}.api.sanity.io/v2024-01-01/data/mutate/${dataset}`;

try {
  console.log('🔧 Rimozione "Fustellatrice a coltello integrata" da ANY-002...\n');
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ mutations }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('❌ Errore:', error);
    process.exit(1);
  }

  const result = await response.json();
  console.log('✅ Patch applicata con successo!');
  console.log(JSON.stringify(result, null, 2));

  console.log('\n🎉 FATTO! La voce "Fustellatrice a coltello integrata" è stata rimossa.');
  console.log('📝 Ricorda di verificare su Sanity Studio e fare rebuild del sito se necessario.');
} catch (error) {
  console.error('❌ Errore:', error.message);
  process.exit(1);
}
