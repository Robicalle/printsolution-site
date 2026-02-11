const sharp = require('sharp');

const svg = `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
  <circle cx="16" cy="16" r="15" fill="#06b6d4"/>
  <text x="16" y="22" text-anchor="middle" font-size="15" font-weight="bold" fill="white" font-family="Arial">PS</text>
</svg>`;

sharp(Buffer.from(svg)).png().toFile('public/images/cursor-ps.png').then(() => console.log('OK'));
