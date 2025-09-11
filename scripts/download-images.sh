#!/bin/bash

# DreadBike Image Downloader Script
# This script downloads missing images for the DreadBike website

IMAGES_DIR="../public/images"

# Create images directory if it doesn't exist
mkdir -p "$IMAGES_DIR"

echo "🏍️  DreadBike Image Downloader"
echo "================================"
echo ""

# Function to download image if it doesn't exist
download_if_missing() {
    local filename="$1"
    local url="$2"
    local description="$3"
    local filepath="$IMAGES_DIR/$filename"

    if [ -f "$filepath" ]; then
        echo "✓ $filename already exists, skipping..."
    else
        echo "📥 Downloading $description..."
        echo "   URL: $url"

        if curl -L -o "$filepath" "$url" --connect-timeout 30 --max-time 60 -s; then
            echo "✓ Downloaded $filename successfully"
        else
            echo "❌ Failed to download $filename"
            # Remove partial file if download failed
            rm -f "$filepath"
        fi
    fi
    echo ""
}

# Download Open Graph image (1200x630 for social media)
download_if_missing "og-image.png" \
    "https://via.placeholder.com/1200x630/1c1c1c/ffff00.png?text=DREADBIKE" \
    "Open Graph image for social media sharing"

# Download a better texture overlay
download_if_missing "texture-overlay.png" \
    "https://via.placeholder.com/200x200/ffffff/ffffff.png?text=." \
    "Texture overlay pattern"

# Download motorcycle images from Unsplash (free stock photos)
download_if_missing "hero-motorcycle.jpg" \
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80" \
    "Hero section motorcycle background"

download_if_missing "gallery-bike-1.jpg" \
    "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop&crop=center&auto=format&q=80" \
    "Gallery motorcycle image 1"

download_if_missing "gallery-bike-2.jpg" \
    "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop&crop=center&auto=format&q=80" \
    "Gallery motorcycle image 2"

download_if_missing "gallery-bike-3.jpg" \
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&crop=center&auto=format&q=80" \
    "Gallery motorcycle image 3"

download_if_missing "service-tuning.jpg" \
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&crop=center&auto=format&q=80" \
    "Service section - motorcycle tuning"

download_if_missing "service-custom.jpg" \
    "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop&crop=center&auto=format&q=80" \
    "Service section - custom builds"

# Create a simple favicon if it doesn't exist
if [ ! -f "$IMAGES_DIR/../favicon.ico" ]; then
    echo "📥 Creating favicon..."
    # Download a simple favicon
    curl -L -o "$IMAGES_DIR/../favicon.ico" \
        "https://via.placeholder.com/32x32/ffff00/1c1c1c.ico?text=D" \
        --connect-timeout 30 --max-time 60 -s
    echo "✓ Created favicon.ico"
    echo ""
fi

echo "🎉 Image download process completed!"
echo ""
echo "📝 Next steps:"
echo "   1. Review the downloaded images in public/images/"
echo "   2. Replace placeholder images with your own branded content"
echo "   3. Optimize images for web (compress, resize as needed)"
echo "   4. Update image references in your components if needed"
echo ""
echo "⚠️  Note: Downloaded images are from free stock photo services."
echo "   For production, use your own branded motorcycle images."
