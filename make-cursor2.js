const sharp = require('sharp');

sharp('public/images/logo.png')
  .extract({ left: 0, top: 0, width: 95, height: 100 })
  .resize(30, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile('public/images/cursor-drop.png')
  .then(() => console.log('OK'))
  .catch(e => console.error(e));
