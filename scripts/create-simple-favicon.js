const fs = require('fs');
const path = require('path');

// Create a simple ICO file header and data
function createSimpleICO() {
  // This creates a very basic 16x16 favicon.ico
  // ICO format: Header (6 bytes) + Directory Entry (16 bytes) + Image Data

  const header = Buffer.from([
    0x00,
    0x00, // Reserved (must be 0)
    0x01,
    0x00, // Image type (1 = ICO)
    0x01,
    0x00, // Number of images (1)
  ]);

  const directoryEntry = Buffer.from([
    0x10, // Width (16 pixels)
    0x10, // Height (16 pixels)
    0x00, // Color palette (0 = no palette)
    0x00, // Reserved (must be 0)
    0x01,
    0x00, // Color planes (1)
    0x20,
    0x00, // Bits per pixel (32)
    0x00,
    0x04,
    0x00,
    0x00, // Image data size (1024 bytes)
    0x16,
    0x00,
    0x00,
    0x00, // Offset to image data (22 bytes)
  ]);

  // Create 16x16 RGBA image data (very simple pattern)
  const imageData = Buffer.alloc(1024); // 16x16x4 bytes (RGBA)

  // Fill with a simple pattern - dark background with yellow center
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const offset = (y * 16 + x) * 4;

      // Distance from center
      const dx = x - 8;
      const dy = y - 8;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 3) {
        // Yellow center
        imageData[offset] = 0x00; // Blue
        imageData[offset + 1] = 0xff; // Green
        imageData[offset + 2] = 0xff; // Red
        imageData[offset + 3] = 0xff; // Alpha
      } else if (distance < 7) {
        // Dark background
        imageData[offset] = 0x1c; // Blue
        imageData[offset + 1] = 0x1c; // Green
        imageData[offset + 2] = 0x1c; // Red
        imageData[offset + 3] = 0xff; // Alpha
      } else {
        // Transparent
        imageData[offset] = 0x00; // Blue
        imageData[offset + 1] = 0x00; // Green
        imageData[offset + 2] = 0x00; // Red
        imageData[offset + 3] = 0x00; // Alpha
      }
    }
  }

  return Buffer.concat([header, directoryEntry, imageData]);
}

// Create the favicon.ico file
const publicDir = path.join(__dirname, '..', 'public');
const faviconPath = path.join(publicDir, 'favicon.ico');

try {
  const icoData = createSimpleICO();
  fs.writeFileSync(faviconPath, icoData);
  console.log('Created favicon.ico successfully!');
} catch (error) {
  console.error('Error creating favicon.ico:', error);
}
