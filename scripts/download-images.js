const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Image URLs to download (using free/placeholder images)
const imagesToDownload = [
  {
    name: 'og-image.png',
    url: 'https://via.placeholder.com/1200x630/1c1c1c/ffff00?text=DREADBIKE',
    description: 'Open Graph image for social media sharing',
  },
  {
    name: 'texture-overlay.png',
    url: 'https://via.placeholder.com/100x100/ffffff/ffffff?text=.',
    description: 'Texture overlay pattern',
  },
  {
    name: 'dreadbike-hero-bg.jpg',
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&crop=center',
    description: 'Hero background image (motorcycle)',
  },
  {
    name: 'motorcycle-1.jpg',
    url: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop&crop=center',
    description: 'Gallery motorcycle image 1',
  },
  {
    name: 'motorcycle-2.jpg',
    url: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop&crop=center',
    description: 'Gallery motorcycle image 2',
  },
];

const imagesDir = path.join(__dirname, '..', 'public', 'images');

// Ensure images directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

function downloadImage(imageUrl, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);

    // Skip if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`${filename} already exists, skipping...`);
      resolve();
      return;
    }

    const url = new URL(imageUrl);
    const protocol = url.protocol === 'https:' ? https : http;

    console.log(`Downloading ${filename}...`);

    const request = protocol.get(imageUrl, response => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filePath);
        response.pipe(fileStream);

        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✓ Downloaded ${filename}`);
          resolve();
        });

        fileStream.on('error', err => {
          fs.unlink(filePath, () => {}); // Delete partial file
          reject(err);
        });
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirects
        downloadImage(response.headers.location, filename)
          .then(resolve)
          .catch(reject);
      } else {
        reject(
          new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`)
        );
      }
    });

    request.on('error', err => {
      reject(err);
    });

    request.setTimeout(30000, () => {
      request.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

async function downloadAllImages() {
  console.log('Starting image downloads...\n');

  for (const image of imagesToDownload) {
    try {
      console.log(`📥 ${image.description}`);
      await downloadImage(image.url, image.name);
      console.log('');
    } catch (error) {
      console.error(`❌ Failed to download ${image.name}: ${error.message}\n`);
    }
  }

  console.log('Image download process completed!');
  console.log(
    '\nNote: Some images use placeholder services. For production, replace with your own images.'
  );
}

// Run the download process
downloadAllImages().catch(console.error);
