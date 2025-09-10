const fs = require('fs');
const path = require('path');

// Create a simple 150x150 PNG for mstile
// This is a basic implementation - in production you'd want to use a proper image library
const createMstile = () => {
  // Create a minimal PNG file (1x1 black pixel, then we'll replace it)
  // For now, let's copy the existing logo and resize it
  const publicDir = path.join(__dirname, '..', 'public');
  const logoPath = path.join(publicDir, 'images', 'dreadbike-gritty-logo.png');
  const mstilePath = path.join(publicDir, 'mstile-150x150.png');

  if (fs.existsSync(logoPath)) {
    fs.copyFileSync(logoPath, mstilePath);
    console.log('Created mstile-150x150.png from existing logo');
  } else {
    console.log('Logo file not found, mstile will remain empty');
  }
};

createMstile();
