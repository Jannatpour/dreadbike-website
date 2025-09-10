const fs = require('fs');
const path = require('path');

// Create a simple PNG file (very basic implementation)
function createSimplePNG(size) {
  // This is a very basic PNG implementation
  // For production, you'd want to use a proper image library

  // PNG signature
  const signature = Buffer.from([
    0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
  ]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(size, 0); // Width
  ihdrData.writeUInt32BE(size, 4); // Height
  ihdrData.writeUInt8(8, 8); // Bit depth
  ihdrData.writeUInt8(6, 9); // Color type (RGBA)
  ihdrData.writeUInt8(0, 10); // Compression
  ihdrData.writeUInt8(0, 11); // Filter
  ihdrData.writeUInt8(0, 12); // Interlace

  const ihdrCrc = crc32(Buffer.concat([Buffer.from('IHDR'), ihdrData]));
  const ihdrChunk = Buffer.concat([
    Buffer.from([0x00, 0x00, 0x00, 0x0d]), // Length
    Buffer.from('IHDR'),
    ihdrData,
    Buffer.from([
      ihdrCrc >> 24,
      (ihdrCrc >> 16) & 0xff,
      (ihdrCrc >> 8) & 0xff,
      ihdrCrc & 0xff,
    ]),
  ]);

  // Simple IDAT chunk with minimal data
  const idatData = Buffer.from([
    0x78, 0x9c, 0x63, 0x00, 0x01, 0x00, 0x00, 0x05, 0x00, 0x01,
  ]);
  const idatCrc = crc32(Buffer.concat([Buffer.from('IDAT'), idatData]));
  const idatChunk = Buffer.concat([
    Buffer.from([0x00, 0x00, 0x00, idatData.length]),
    Buffer.from('IDAT'),
    idatData,
    Buffer.from([
      idatCrc >> 24,
      (idatCrc >> 16) & 0xff,
      (idatCrc >> 8) & 0xff,
      idatCrc & 0xff,
    ]),
  ]);

  // IEND chunk
  const iendCrc = crc32(Buffer.from('IEND'));
  const iendChunk = Buffer.concat([
    Buffer.from([0x00, 0x00, 0x00, 0x00]),
    Buffer.from('IEND'),
    Buffer.from([
      iendCrc >> 24,
      (iendCrc >> 16) & 0xff,
      (idatCrc >> 8) & 0xff,
      iendCrc & 0xff,
    ]),
  ]);

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Simple CRC32 implementation
function crc32(data) {
  const table = [];
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c;
  }

  let crc = 0xffffffff;
  for (let i = 0; i < data.length; i++) {
    crc = table[(crc ^ data[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

// Create basic favicon files
const publicDir = path.join(__dirname, '..', 'public');
const sizes = [16, 32, 96, 180];

// Create a simple text-based favicon approach instead
function createTextFavicon(size, filename) {
  // Create a simple SVG and save it
  const svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="#1c1c1c"/>
  <circle cx="${size / 2}" cy="${size / 2}" r="${
    size / 2 - 2
  }" stroke="#ffff00" stroke-width="2" fill="none"/>
  <path d="M${size / 2 - size / 4} ${size / 2} L${size / 2} ${
    size / 2 - size / 4
  } L${size / 2 + size / 4} ${size / 2} L${size / 2} ${
    size / 2 + size / 4
  } Z" fill="#ffff00"/>
  <circle cx="${size / 2}" cy="${size / 2}" r="${size / 8}" fill="#1c1c1c"/>
</svg>`;

  fs.writeFileSync(path.join(publicDir, filename.replace('.png', '.svg')), svg);
  console.log(`Created ${filename.replace('.png', '.svg')}`);
}

// Create SVG versions of all favicon sizes
createTextFavicon(16, 'favicon-16x16.png');
createTextFavicon(32, 'favicon-32x32.png');
createTextFavicon(96, 'favicon-96x96.png');
createTextFavicon(180, 'apple-touch-icon-180x180.png');
createTextFavicon(57, 'apple-touch-icon-57x57.png');
createTextFavicon(60, 'apple-touch-icon-60x60.png');
createTextFavicon(72, 'apple-touch-icon-72x72.png');
createTextFavicon(76, 'apple-touch-icon-76x76.png');
createTextFavicon(114, 'apple-touch-icon-114x114.png');
createTextFavicon(120, 'apple-touch-icon-120x120.png');
createTextFavicon(144, 'apple-touch-icon-144x144.png');
createTextFavicon(152, 'apple-touch-icon-152x152.png');

console.log('All favicon SVG files created successfully!');
console.log(
  'Note: These are SVG files. For PNG versions, use the favicon-generator.html file.'
);
