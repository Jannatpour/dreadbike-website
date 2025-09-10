const fs = require('fs');
const path = require('path');

// Create a simple SVG favicon
const createSVGFavicon = size => {
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${size / 8}" fill="#1c1c1c"/>
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
};

// Create different sized SVG favicons
const sizes = [16, 32, 96, 180];
const publicDir = path.join(__dirname, '..', 'public');

sizes.forEach(size => {
  const svgContent = createSVGFavicon(size);
  const filename =
    size === 180
      ? 'apple-touch-icon-180x180.svg'
      : `favicon-${size}x${size}.svg`;
  fs.writeFileSync(path.join(publicDir, filename), svgContent);
  console.log(`Created ${filename}`);
});

console.log('All favicon SVG files created successfully!');
console.log(
  'To convert to PNG, you can use an online converter or imagemagick.'
);
