const fs = require('fs');
const path = require('path');

// Create a better texture overlay SVG pattern
const texturePattern = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grunge" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <!-- Subtle noise pattern -->
      <circle cx="5" cy="5" r="0.5" fill="rgba(255,255,255,0.03)" opacity="0.8"/>
      <circle cx="15" cy="12" r="0.3" fill="rgba(255,255,255,0.02)" opacity="0.6"/>
      <circle cx="25" cy="8" r="0.4" fill="rgba(255,255,255,0.025)" opacity="0.7"/>
      <circle cx="35" cy="15" r="0.2" fill="rgba(255,255,255,0.015)" opacity="0.5"/>
      <circle cx="8" cy="25" r="0.6" fill="rgba(255,255,255,0.035)" opacity="0.9"/>
      <circle cx="18" cy="32" r="0.25" fill="rgba(255,255,255,0.02)" opacity="0.6"/>
      <circle cx="28" cy="28" r="0.45" fill="rgba(255,255,255,0.03)" opacity="0.8"/>
      <circle cx="38" cy="35" r="0.3" fill="rgba(255,255,255,0.025)" opacity="0.7"/>

      <!-- Add some subtle lines for gritty effect -->
      <line x1="0" y1="10" x2="40" y2="12" stroke="rgba(255,255,255,0.01)" stroke-width="0.5" opacity="0.3"/>
      <line x1="0" y1="25" x2="40" y2="23" stroke="rgba(255,255,255,0.015)" stroke-width="0.3" opacity="0.4"/>
      <line x1="0" y1="35" x2="40" y2="37" stroke="rgba(255,255,255,0.008)" stroke-width="0.4" opacity="0.2"/>
    </pattern>
  </defs>
  <rect width="200" height="200" fill="url(#grunge)" opacity="0.6"/>
</svg>`;

// Write the better texture SVG
const textureSvgPath = path.join(
  __dirname,
  '..',
  'public',
  'images',
  'texture-overlay-better.svg'
);
fs.writeFileSync(textureSvgPath, texturePattern);

console.log('Created better texture overlay SVG');
console.log(
  'You can use this by updating CSS references from texture-overlay.png to texture-overlay-better.svg'
);

// Also create a simple noise pattern PNG using base64
const noisePngBase64 =
  'iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABYSURBVBiVY/z//z8DJQAggBhJVQwQQIykKgYIIEZSFQMEECOpigECiJFUxQABxEiqYoAAYiRVMUAAMZKqGCCAGElVDBBAjKQqBgggRlIVAwQQI6mKAQKIkVTFAAFEqmIAH8QJCWjvGVsAAAAASUVORK5CYII=';

// Replace the existing texture-overlay.png with a better one
const texturePngPath = path.join(
  __dirname,
  '..',
  'public',
  'images',
  'texture-overlay.png'
);
const pngBuffer = Buffer.from(noisePngBase64, 'base64');
fs.writeFileSync(texturePngPath, pngBuffer);

console.log('Updated texture-overlay.png with a better noise pattern');
