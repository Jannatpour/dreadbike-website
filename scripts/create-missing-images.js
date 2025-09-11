const fs = require('fs');
const path = require('path');

// Base64 encoded 1x1 transparent PNG
const transparentPngBase64 =
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';

// Simple SVG logo template
const logoSvg = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#1c1c1c"/>
  <text x="100" y="100" text-anchor="middle" dominant-baseline="middle" fill="#ffff00" font-family="Arial, sans-serif" font-size="24" font-weight="bold">DREADBIKE</text>
</svg>`;

// Create missing images
const imagesToCreate = [
  {
    name: 'og-image.png',
    content: Buffer.from(transparentPngBase64, 'base64'),
    type: 'png',
  },
  {
    name: 'dreadbike-logo-clean.svg',
    content: logoSvg,
    type: 'svg',
  },
  {
    name: 'dreadbike-logo-gritty.svg',
    content: logoSvg,
    type: 'svg',
  },
];

const imagesDir = path.join(__dirname, '..', 'public', 'images');

// Ensure images directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

imagesToCreate.forEach(image => {
  const imagePath = path.join(imagesDir, image.name);

  if (!fs.existsSync(imagePath)) {
    if (image.type === 'png') {
      fs.writeFileSync(imagePath, image.content);
    } else {
      fs.writeFileSync(imagePath, image.content, 'utf8');
    }
    console.log(`Created ${image.name}`);
  } else {
    console.log(`${image.name} already exists, skipping`);
  }
});

console.log('Missing images creation completed!');
