const fs = require('fs');
const path = require('path');

// Required images for shop functionality
const requiredImages = [
  'gallery-bike-1.jpg',
  'gallery-bike-2.jpg',
  'gallery-bike-3.jpg',
  'gallery-bike-4.jpg',
  'gallery-bike-5.jpg',
  'gallery-bike-6.jpg',
];

// Additional images we downloaded
const additionalImages = [
  'professional-gear-1.jpg',
  'custom-parts-1.jpg',
  'racing-apparel-1.jpg',
];

const imagesDir = path.join(__dirname, '..', 'public', 'images');

console.log('🔍 Verifying shop images...\n');

// Check required images
console.log('📋 Required shop images:');
let missingRequired = 0;
requiredImages.forEach(image => {
  const imagePath = path.join(imagesDir, image);
  const exists = fs.existsSync(imagePath);
  const status = exists ? '✅' : '❌';
  console.log(`${status} ${image}`);
  if (!exists) missingRequired++;
});

console.log('\n📋 Additional shop images:');
let missingAdditional = 0;
additionalImages.forEach(image => {
  const imagePath = path.join(imagesDir, image);
  const exists = fs.existsSync(imagePath);
  const status = exists ? '✅' : '❌';
  console.log(`${status} ${image}`);
  if (!exists) missingAdditional++;
});

console.log('\n📊 Summary:');
console.log(
  `Required images: ${requiredImages.length - missingRequired}/${
    requiredImages.length
  } present`
);
console.log(
  `Additional images: ${additionalImages.length - missingAdditional}/${
    additionalImages.length
  } present`
);

if (missingRequired === 0 && missingAdditional === 0) {
  console.log('\n🎉 All shop images are present and ready!');
  console.log(
    'Your shop pages should now display all product images correctly.'
  );
} else {
  console.log(
    '\n⚠️  Some images are missing. Run the download script to fix this:'
  );
  console.log('node scripts/download-missing-shop-images.js');
}

// Check file sizes
console.log('\n📏 Image file sizes:');
[...requiredImages, ...additionalImages].forEach(image => {
  const imagePath = path.join(imagesDir, image);
  if (fs.existsSync(imagePath)) {
    const stats = fs.statSync(imagePath);
    const sizeKB = Math.round(stats.size / 1024);
    console.log(`   ${image}: ${sizeKB} KB`);
  }
});
