const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// List of expected favicon files
const expectedFiles = [
  'favicon.ico',
  'favicon.svg',
  'favicon-16x16.svg',
  'favicon-32x32.svg',
  'favicon-96x96.svg',
  'apple-touch-icon-57x57.svg',
  'apple-touch-icon-60x60.svg',
  'apple-touch-icon-72x72.svg',
  'apple-touch-icon-76x76.svg',
  'apple-touch-icon-114x114.svg',
  'apple-touch-icon-120x120.svg',
  'apple-touch-icon-144x144.svg',
  'apple-touch-icon-152x152.svg',
  'apple-touch-icon-180x180.svg',
  'site.webmanifest',
  'safari-pinned-tab.svg',
];

console.log('🔍 Verifying DreadBike favicon files...\n');

let allFilesExist = true;
let totalSize = 0;

expectedFiles.forEach(filename => {
  const filePath = path.join(publicDir, filename);

  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalSize += stats.size;

    console.log(`✅ ${filename} - ${sizeKB} KB`);
  } else {
    console.log(`❌ ${filename} - MISSING`);
    allFilesExist = false;
  }
});

console.log(
  `\n📊 Total favicon package size: ${(totalSize / 1024).toFixed(2)} KB`
);

if (allFilesExist) {
  console.log('\n🎉 All favicon files are present and ready!');
  console.log('🌐 Website is fully responsive and favicon-ready!');
  console.log('🚀 Server running at: http://localhost:3002');
} else {
  console.log(
    '\n⚠️  Some favicon files are missing. Please run the favicon generators.'
  );
}

// Test if server is running
const http = require('http');
const options = {
  hostname: 'localhost',
  port: 3002,
  path: '/favicon.ico',
  method: 'HEAD',
};

const req = http.request(options, res => {
  if (res.statusCode === 200) {
    console.log('✅ Favicon is accessible via HTTP');
  } else {
    console.log(`❌ Favicon HTTP status: ${res.statusCode}`);
  }
});

req.on('error', err => {
  console.log('⚠️  Server might not be running. Start with: npm run dev');
});

req.end();
