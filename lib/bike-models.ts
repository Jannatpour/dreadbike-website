import * as THREE from 'three';

export interface BikeModel {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  specs: {
    engine: string;
    power: string;
    weight: string;
    topSpeed: string;
  };
  colors: string[];
  materials: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export interface Skin {
  id: string;
  name: string;
  type: 'color' | 'wrap' | 'decal';
  category: 'sport' | 'cruiser' | 'adventure' | 'custom';
  colors: {
    primary: string;
    secondary?: string;
    accent?: string;
  };
  material: 'matte' | 'glossy' | 'metallic' | 'carbon' | 'chrome';
  price: number;
  description: string;
  texture?: string;
}

export const bikeModels: BikeModel[] = [
  {
    id: 'kawasaki-ninja',
    name: 'Ninja ZX-10R',
    brand: 'Kawasaki',
    description: 'Track-ready sportbike with aggressive styling and cutting-edge technology.',
    price: 16999,
    specs: {
      engine: '998cc Inline-4',
      power: '203 HP',
      weight: '206 kg',
      topSpeed: '299 km/h',
    },
    colors: ['#1a1a1a', '#ff0000', '#0066cc', '#ffffff'],
    materials: {
      primary: 'matte',
      secondary: 'glossy',
      accent: 'carbon',
    },
  },
  {
    id: 'bmw-s1000rr',
    name: 'S1000RR',
    brand: 'BMW',
    description: 'German engineering meets racing performance in this precision machine.',
    price: 18999,
    specs: {
      engine: '999cc Inline-4',
      power: '205 HP',
      weight: '197 kg',
      topSpeed: '305 km/h',
    },
    colors: ['#1a1a1a', '#ffffff', '#0066cc', '#ff6600'],
    materials: {
      primary: 'glossy',
      secondary: 'metallic',
      accent: 'carbon',
    },
  },
  {
    id: 'ducati-panigale',
    name: 'Panigale V4',
    brand: 'Ducati',
    description: 'Italian passion and precision in a V4 masterpiece.',
    price: 22999,
    specs: {
      engine: '1103cc V4',
      power: '214 HP',
      weight: '201 kg',
      topSpeed: '312 km/h',
    },
    colors: ['#ff0000', '#1a1a1a', '#ffffff', '#ffcc00'],
    materials: {
      primary: 'glossy',
      secondary: 'carbon',
      accent: 'chrome',
    },
  },
];

export const skins: Skin[] = [
  // Color Skins
  {
    id: 'matte-black',
    name: 'Stealth Black',
    type: 'color',
    category: 'custom',
    colors: { primary: '#1a1a1a' },
    material: 'matte',
    price: 299,
    description: 'Ultimate stealth look with matte black finish.',
  },
  {
    id: 'racing-red',
    name: 'Racing Red',
    type: 'color',
    category: 'sport',
    colors: { primary: '#ff0000' },
    material: 'glossy',
    price: 199,
    description: 'Classic racing red for maximum impact.',
  },
  {
    id: 'electric-blue',
    name: 'Electric Blue',
    type: 'color',
    category: 'sport',
    colors: { primary: '#0066cc' },
    material: 'metallic',
    price: 249,
    description: 'Electric blue metallic finish that catches every eye.',
  },
  {
    id: 'carbon-fiber',
    name: 'Carbon Fiber',
    type: 'color',
    category: 'custom',
    colors: { primary: '#2a2a2a' },
    material: 'carbon',
    price: 599,
    description: 'Authentic carbon fiber weave pattern.',
  },
  {
    id: 'chrome-silver',
    name: 'Chrome Silver',
    type: 'color',
    category: 'custom',
    colors: { primary: '#c0c0c0' },
    material: 'chrome',
    price: 399,
    description: 'Mirror-like chrome finish for ultimate shine.',
  },
  
  // Wrap Skins
  {
    id: 'dreadbike-gritty',
    name: 'DreadBike Gritty',
    type: 'wrap',
    category: 'custom',
    colors: { primary: '#1a1a1a', secondary: '#ffcc00', accent: '#ff0000' },
    material: 'matte',
    price: 799,
    description: 'Official DreadBike gritty design with yellow accents.',
  },
  {
    id: 'neon-tribal',
    name: 'Neon Tribal',
    type: 'wrap',
    category: 'custom',
    colors: { primary: '#1a1a1a', secondary: '#00ff00', accent: '#ff00ff' },
    material: 'glossy',
    price: 899,
    description: 'Futuristic tribal patterns with neon highlights.',
  },
  {
    id: 'racing-stripes',
    name: 'Racing Stripes',
    type: 'wrap',
    category: 'sport',
    colors: { primary: '#ffffff', secondary: '#ff0000' },
    material: 'glossy',
    price: 399,
    description: 'Classic racing stripes for that track look.',
  },
  {
    id: 'flame-design',
    name: 'Flame Design',
    type: 'wrap',
    category: 'custom',
    colors: { primary: '#ff6600', secondary: '#ff0000', accent: '#ffff00' },
    material: 'glossy',
    price: 699,
    description: 'Burning flames design for maximum attitude.',
  },
  
  // Decal Skins
  {
    id: 'skull-decal',
    name: 'Skull Decal',
    type: 'decal',
    category: 'custom',
    colors: { primary: '#1a1a1a', secondary: '#ffffff' },
    material: 'matte',
    price: 199,
    description: 'Intimidating skull decal for the fearless rider.',
  },
  {
    id: 'lightning-bolt',
    name: 'Lightning Bolt',
    type: 'decal',
    category: 'sport',
    colors: { primary: '#ffff00', secondary: '#1a1a1a' },
    material: 'glossy',
    price: 149,
    description: 'Electric lightning bolt for speed demons.',
  },
  {
    id: 'dragon-scale',
    name: 'Dragon Scale',
    type: 'decal',
    category: 'custom',
    colors: { primary: '#0066cc', secondary: '#1a1a1a' },
    material: 'metallic',
    price: 299,
    description: 'Mystical dragon scale pattern for the legendary rider.',
  },
];

export const createBikeGeometry = (): THREE.Group => {
  const group = new THREE.Group();
  
  // Create bike frame
  const frameGeometry = new THREE.BoxGeometry(0.1, 0.8, 0.05);
  const frameMaterial = new THREE.MeshStandardMaterial({ color: '#2a2a2a' });
  const frame = new THREE.Mesh(frameGeometry, frameMaterial);
  frame.position.set(0, 0, 0);
  group.add(frame);
  
  // Create engine block
  const engineGeometry = new THREE.BoxGeometry(0.3, 0.2, 0.15);
  const engineMaterial = new THREE.MeshStandardMaterial({ 
    color: '#1a1a1a',
    metalness: 0.8,
    roughness: 0.2,
  });
  const engine = new THREE.Mesh(engineGeometry, engineMaterial);
  engine.position.set(0, -0.1, 0);
  group.add(engine);
  
  // Create front wheel
  const frontWheelGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.05, 16);
  const wheelMaterial = new THREE.MeshStandardMaterial({ 
    color: '#333333',
    metalness: 0.9,
    roughness: 0.1,
  });
  const frontWheel = new THREE.Mesh(frontWheelGeometry, wheelMaterial);
  frontWheel.rotation.z = Math.PI / 2;
  frontWheel.position.set(0.4, -0.2, 0);
  group.add(frontWheel);
  
  // Create rear wheel
  const rearWheel = new THREE.Mesh(frontWheelGeometry, wheelMaterial);
  rearWheel.rotation.z = Math.PI / 2;
  rearWheel.position.set(-0.4, -0.2, 0);
  group.add(rearWheel);
  
  // Create handlebars
  const handlebarGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.3, 8);
  const handlebarMaterial = new THREE.MeshStandardMaterial({ 
    color: '#2a2a2a',
    metalness: 0.7,
    roughness: 0.3,
  });
  const handlebars = new THREE.Mesh(handlebarGeometry, handlebarMaterial);
  handlebars.rotation.z = Math.PI / 2;
  handlebars.position.set(0.2, 0.1, 0);
  group.add(handlebars);
  
  // Create seat
  const seatGeometry = new THREE.BoxGeometry(0.2, 0.05, 0.1);
  const seatMaterial = new THREE.MeshStandardMaterial({ 
    color: '#1a1a1a',
    roughness: 0.8,
  });
  const seat = new THREE.Mesh(seatGeometry, seatMaterial);
  seat.position.set(-0.1, 0.05, 0);
  group.add(seat);
  
  // Create exhaust pipes
  const exhaustGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.3, 8);
  const exhaustMaterial = new THREE.MeshStandardMaterial({ 
    color: '#666666',
    metalness: 0.9,
    roughness: 0.1,
  });
  const leftExhaust = new THREE.Mesh(exhaustGeometry, exhaustMaterial);
  leftExhaust.position.set(-0.2, -0.1, 0.1);
  group.add(leftExhaust);
  
  const rightExhaust = new THREE.Mesh(exhaustGeometry, exhaustMaterial);
  rightExhaust.position.set(-0.2, -0.1, -0.1);
  group.add(rightExhaust);
  
  return group;
};

export const createSkinMaterial = (skin: Skin): THREE.Material => {
  const baseColor = new THREE.Color(skin.colors.primary);
  
  let material: THREE.Material;
  
  switch (skin.material) {
    case 'matte':
      material = new THREE.MeshStandardMaterial({
        color: baseColor,
        metalness: 0.1,
        roughness: 0.9,
      });
      break;
    case 'glossy':
      material = new THREE.MeshStandardMaterial({
        color: baseColor,
        metalness: 0.2,
        roughness: 0.1,
      });
      break;
    case 'metallic':
      material = new THREE.MeshStandardMaterial({
        color: baseColor,
        metalness: 0.8,
        roughness: 0.2,
      });
      break;
    case 'carbon':
      material = new THREE.MeshStandardMaterial({
        color: baseColor,
        metalness: 0.1,
        roughness: 0.3,
        // Note: In a real implementation, you'd load a carbon fiber texture here
      });
      break;
    case 'chrome':
      material = new THREE.MeshStandardMaterial({
        color: baseColor,
        metalness: 1.0,
        roughness: 0.0,
      });
      break;
    default:
      material = new THREE.MeshStandardMaterial({
        color: baseColor,
        metalness: 0.2,
        roughness: 0.5,
      });
  }
  
  return material;
};
