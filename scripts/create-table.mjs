import pg from 'pg';
const { Client } = pg;
const c = new Client({
  host: 'db.lqaoldlpsehqojkbkfkh.supabase.co',
  port: 5432,
  user: 'postgres',
  password: '94lYg1n45cCaEIPs',
  database: 'postgres',
  ssl: { rejectUnauthorized: false },
  connectionTimeoutMillis: 10000,
});
try {
  await c.connect();
  console.log('Connected!');
  await c.query(`
    CREATE TABLE IF NOT EXISTS kb_chunks (
      id SERIAL PRIMARY KEY,
      source TEXT NOT NULL,
      title TEXT,
      content TEXT NOT NULL,
      tsv tsvector GENERATED ALWAYS AS (to_tsvector('italian', content)) STORED
    )
  `);
  await c.query(`CREATE INDEX IF NOT EXISTS kb_chunks_tsv_idx ON kb_chunks USING GIN(tsv)`);
  console.log('Table created!');
} catch(e) { console.error(e.message); }
await c.end();
