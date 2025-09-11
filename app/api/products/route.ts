import { NextResponse } from 'next/server';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
  rating?: number;
  reviews?: number;
  features?: string[];
}

// Mock data - in production, this would come from your database
const products: Product[] = [
  {
    id: '1',
    name: 'DreadBike Racing Jacket',
    price: 299.99,
    image: '/images/gallery-bike-1.jpg',
    category: 'apparel',
    description: 'High-performance racing jacket with advanced protection and ventilation.',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    features: ['CE Level 2 Protection', 'Ventilation System', 'Reflective Panels']
  },
  {
    id: '2',
    name: 'Steel Skull Helmet',
    price: 449.99,
    image: '/images/gallery-bike-2.jpg',
    category: 'gear',
    description: 'Custom steel skull design helmet with maximum protection.',
    inStock: true,
    rating: 4.9,
    reviews: 89,
    features: ['DOT Approved', 'Custom Design', 'Lightweight Construction']
  },
  {
    id: '3',
    name: 'Performance Exhaust System',
    price: 799.99,
    image: '/images/gallery-bike-3.jpg',
    category: 'parts',
    description: 'High-flow exhaust system for maximum power and sound.',
    inStock: true,
    rating: 4.7,
    reviews: 156,
    features: ['Stainless Steel', 'High Flow Design', 'Easy Installation']
  },
  {
    id: '4',
    name: 'DreadBike Gloves',
    price: 89.99,
    image: '/images/gallery-bike-4.jpg',
    category: 'apparel',
    description: 'Premium leather gloves with reinforced knuckle protection.',
    inStock: true,
    rating: 4.6,
    reviews: 203,
    features: ['Premium Leather', 'Knuckle Protection', 'Touchscreen Compatible']
  },
  {
    id: '5',
    name: 'Racing Boots',
    price: 199.99,
    image: '/images/gallery-bike-5.jpg',
    category: 'gear',
    description: 'Professional racing boots with ankle protection.',
    inStock: false,
    rating: 4.5,
    reviews: 67,
    features: ['Ankle Protection', 'Slip Resistant', 'Comfortable Fit']
  },
  {
    id: '6',
    name: 'Performance Brake Pads',
    price: 129.99,
    image: '/images/gallery-bike-6.jpg',
    category: 'parts',
    description: 'High-performance brake pads for superior stopping power.',
    inStock: true,
    rating: 4.8,
    reviews: 98,
    features: ['High Performance', 'Long Lasting', 'Easy Installation']
  },
  {
    id: '7',
    name: 'DreadBike Racing Pants',
    price: 249.99,
    image: '/images/gallery-bike-1.jpg',
    category: 'apparel',
    description: 'Professional racing pants with knee and hip protection.',
    inStock: true,
    rating: 4.7,
    reviews: 89,
    features: ['CE Level 2 Protection', 'Ventilation', 'Adjustable Fit']
  },
  {
    id: '8',
    name: 'Carbon Fiber Helmet',
    price: 599.99,
    image: '/images/gallery-bike-2.jpg',
    category: 'gear',
    description: 'Ultra-lightweight carbon fiber helmet for maximum performance.',
    inStock: true,
    rating: 4.9,
    reviews: 156,
    features: ['Carbon Fiber', 'Ultra Lightweight', 'Aerodynamic Design']
  },
  {
    id: '9',
    name: 'Performance Air Filter',
    price: 79.99,
    image: '/images/gallery-bike-3.jpg',
    category: 'parts',
    description: 'High-flow air filter for improved engine performance.',
    inStock: true,
    rating: 4.5,
    reviews: 203,
    features: ['High Flow', 'Reusable', 'Easy Installation']
  },
  {
    id: '10',
    name: 'Racing Socks',
    price: 24.99,
    image: '/images/gallery-bike-4.jpg',
    category: 'apparel',
    description: 'Moisture-wicking racing socks for comfort and performance.',
    inStock: true,
    rating: 4.3,
    reviews: 67,
    features: ['Moisture Wicking', 'Seamless Design', 'Comfortable Fit']
  },
  {
    id: '11',
    name: 'Performance Chain',
    price: 149.99,
    image: '/images/gallery-bike-5.jpg',
    category: 'parts',
    description: 'High-performance motorcycle chain for smooth power transfer.',
    inStock: true,
    rating: 4.6,
    reviews: 98,
    features: ['High Performance', 'Long Lasting', 'Smooth Operation']
  },
  {
    id: '12',
    name: 'Racing Backpack',
    price: 89.99,
    image: '/images/gallery-bike-6.jpg',
    category: 'gear',
    description: 'Compact racing backpack for essential gear and tools.',
    inStock: true,
    rating: 4.4,
    reviews: 124,
    features: ['Compact Design', 'Water Resistant', 'Multiple Compartments']
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const inStock = searchParams.get('inStock');

  let filteredProducts = products;

  // Filter by category
  if (category && category !== 'all') {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }

  // Filter by search term
  if (search) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Filter by stock status
  if (inStock === 'true') {
    filteredProducts = filteredProducts.filter(product => product.inStock);
  }

  return NextResponse.json({
    products: filteredProducts,
    total: filteredProducts.length
  });
}

