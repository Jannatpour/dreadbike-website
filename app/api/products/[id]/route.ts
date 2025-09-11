import { NextResponse } from 'next/server';
import { Product } from '../route';

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
    category: 'gear',
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
  }
];

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const product = products.find(p => p.id === id);

  if (!product) {
    return NextResponse.json(
      { error: 'Product not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}
