const sharp = require('sharp');

async function run() {
  const thumbs = [];
  for (let i = 1; i <= 4; i++) {
    const buf = await sharp('thumb-edm-' + i + '.jpg').resize(400, 225, { fit: 'cover' }).toBuffer();
    thumbs.push(buf);
  }

  const composites = [];
  for (let i = 0; i < 4; i++) {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = col * 420 + 10;
    const y = row * 245 + 10;
    composites.push({ input: thumbs[i], left: x, top: y });
    const num = i + 1;
    const svg = `<svg width="60" height="60"><circle cx="30" cy="30" r="28" fill="red"/><text x="30" y="42" font-size="36" font-weight="bold" fill="white" text-anchor="middle">${num}</text></svg>`;
    composites.push({ input: Buffer.from(svg), left: x + 10, top: y + 10 });
  }

  await sharp({ create: { width: 840, height: 500, channels: 3, background: { r: 30, g: 30, b: 30 } } })
    .composite(composites)
    .jpeg({ quality: 85 })
    .toFile('edm-videos-numbered.jpg');
  console.log('OK');
}
run().catch(e => console.error(e));
