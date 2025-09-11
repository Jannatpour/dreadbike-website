const fs = require('fs');
const path = require('path');

// Create a minimal 1x1 transparent PNG as a fallback
// This is a base64 encoded 1x1 transparent PNG
const transparentPngBase64 =
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';

// Convert base64 to buffer
const pngBuffer = Buffer.from(transparentPngBase64, 'base64');

// Write the PNG file
const pngPath = path.join(
  __dirname,
  '..',
  'public',
  'images',
  'texture-overlay.png'
);
fs.writeFileSync(pngPath, pngBuffer);

console.log('Created texture-overlay.png (1x1 transparent PNG)');
console.log(
  'This is a minimal fallback. You may want to replace it with a proper texture image.'
);
