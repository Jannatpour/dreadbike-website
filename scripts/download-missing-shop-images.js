const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Missing shop images to download
const imagesToDownload = [
  {
    name: 'gallery-bike-3.jpg',
    url: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&crop=center',
    description: 'Performance exhaust system (parts) - fixing corrupted file',
  },
  {
    name: 'professional-gear-2.jpg',
    url: 'https://images.unsplash.com/photo-1605669164963-491b2ddc050b?w=800&h=600&fit=crop&crop=center',
    description: 'Professional motorcycle helmet',
  },
  {
    name: 'professional-gear-3.jpg',
    url: 'https://images.unsplash.com/photo-1558899447-76e97dc5a3c1?w=800&h=600&fit=crop&crop=center',
    description: 'Professional motorcycle dashboard/instruments',
  },
  {
    name: 'custom-parts-2.jpg',
    url: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop&crop=center',
    description: 'Custom motorcycle engine parts',
  },
  {
    name: 'custom-parts-3.jpg',
    url: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&crop=center',
    description: 'Custom motorcycle exhaust parts',
  },
  {
    name: 'racing-apparel-2.jpg',
    url: 'https://images.unsplash.com/photo-1600887996856-7a3f631e349a?w=800&h=600&fit=crop&crop=center',
    description: 'Racing leather jacket',
  },
  {
    name: 'racing-apparel-3.jpg',
    url: 'https://images.unsplash.com/photo-1596383483556-92373e282392?w=800&h=600&fit=crop&crop=center',
    description: 'Racing gear and apparel',
  },
  {
    name: 'motorcycle-boots-1.jpg',
    url: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center',
    description: 'Professional motorcycle boots',
  },
  {
    name: 'motorcycle-accessories-1.jpg',
    url: 'https://images.unsplash.com/photo-1558899412-db4a281fa0ed?w=800&h=600&fit=crop&crop=center',
    description: 'Motorcycle accessories and gear',
  },
  {
    name: 'performance-parts-1.jpg',
    url: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop&crop=center',
    description: 'High-performance motorcycle parts',
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
  console.log('Starting missing shop images download...\n');

  for (const image of imagesToDownload) {
    try {
      console.log(`📥 ${image.description}`);
      await downloadImage(image.url, image.name);
      console.log('');
    } catch (error) {
      console.error(`❌ Failed to download ${image.name}: ${error.message}\n`);
    }
  }

  console.log('Missing shop images download completed!');
  console.log('\nImages downloaded:');
  imagesToDownload.forEach(img => {
    const filePath = path.join(imagesDir, img.name);
    if (fs.existsSync(filePath)) {
      console.log(`✓ ${img.name} - ${img.description}`);
    } else {
      console.log(`❌ ${img.name} - Failed to download`);
    }
  });
}

// Run the download process
downloadAllImages().catch(console.error);
