export interface Product {
  id: string
  name: string
  collection: string
  karat: string
  weightGrams: number
  price: number
  description: string
  craftsmanshipNotes: string
  images: string[]
  status: 'available' | 'sold' | 'reserved'
  featured: boolean
}

export const products: Product[] = [
  // ── Rings ──
  {
    id: 'ring-001',
    name: 'Classic Signet Ring',
    collection: 'rings',
    karat: '18K',
    weightGrams: 8.5,
    price: 42000,
    description: 'A bold signet ring with a polished flat top and tapered band. Designed to be worn daily and passed down through generations.',
    craftsmanshipNotes: 'Hand-cast using traditional lost-wax method. Each ring is individually polished to a mirror finish by our master goldsmith.',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80',
    ],
    status: 'available',
    featured: true,
  },
  {
    id: 'ring-002',
    name: 'Twisted Rope Band',
    collection: 'rings',
    karat: '14K',
    weightGrams: 5.2,
    price: 24000,
    description: 'A delicate rope-twist band that catches the light from every angle. Minimalist yet striking.',
    craftsmanshipNotes: 'Wire-twisted by hand and soldered with precision. The rope texture is achieved through a technique passed down three generations.',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
    ],
    status: 'available',
    featured: false,
  },
  {
    id: 'ring-003',
    name: 'Heritage Dome Ring',
    collection: 'rings',
    karat: '21K',
    weightGrams: 12.0,
    price: 78000,
    description: 'A substantial dome ring with a smooth, rounded profile. The higher karat gold gives it a richer, deeper color.',
    craftsmanshipNotes: 'Forged from a single piece of 21K gold. The dome shape is achieved through careful hammering and annealing cycles.',
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    ],
    status: 'available',
    featured: true,
  },
  {
    id: 'ring-004',
    name: 'Bamboo Textured Band',
    collection: 'rings',
    karat: '18K',
    weightGrams: 6.8,
    price: 34000,
    description: 'Inspired by Philippine bamboo groves. A textured band with segmented details that evoke natural bamboo stalks.',
    craftsmanshipNotes: 'Hand-engraved bamboo segments. Each band is unique — no two rings share the exact same pattern.',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80',
    ],
    status: 'sold',
    featured: false,
  },

  // ── Necklaces ──
  {
    id: 'neck-001',
    name: 'Tiffany Hardware Chain',
    collection: 'necklaces',
    karat: '18K',
    weightGrams: 15.3,
    price: 76000,
    description: 'A bold chain necklace with hardware-inspired links. Statement luxury for everyday wear.',
    craftsmanshipNotes: 'Each link is individually formed, connected, and soldered. The clasp is integrated seamlessly into the chain design.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141589-67f0d932b7d6?w=800&q=80',
    ],
    status: 'available',
    featured: true,
  },
  {
    id: 'neck-002',
    name: 'Delicate Box Chain',
    collection: 'necklaces',
    karat: '18K',
    weightGrams: 4.2,
    price: 22000,
    description: 'A fine box chain that sits perfectly on the collarbone. The ideal layering piece or standalone minimal necklace.',
    craftsmanshipNotes: 'Machine-woven with hand-finished ends. Spring ring clasp with adjustable length extension.',
    images: [
      'https://images.unsplash.com/photo-1515562141589-67f0d932b7d6?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    status: 'available',
    featured: false,
  },
  {
    id: 'neck-003',
    name: 'Herringbone Collar',
    collection: 'necklaces',
    karat: '14K',
    weightGrams: 18.5,
    price: 68000,
    description: 'A wide herringbone chain that lays flat against the skin. Liquid gold in motion.',
    craftsmanshipNotes: 'Precision-woven herringbone pattern. The flat profile requires exceptional tension control during weaving.',
    images: [
      'https://images.unsplash.com/photo-1602752250015-52934bc45613?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    status: 'reserved',
    featured: false,
  },
  {
    id: 'neck-004',
    name: 'Pendant Drop Necklace',
    collection: 'necklaces',
    karat: '21K',
    weightGrams: 9.8,
    price: 58000,
    description: 'A single teardrop pendant on a fine cable chain. Pure, unadorned gold — the pendant catches light beautifully.',
    craftsmanshipNotes: 'The teardrop is hand-formed and polished to a mirror finish. Bail is designed to allow free movement along the chain.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141589-67f0d932b7d6?w=800&q=80',
    ],
    status: 'available',
    featured: false,
  },

  // ── Earrings ──
  {
    id: 'ear-001',
    name: 'Classic Hoop Earrings',
    collection: 'earrings',
    karat: '18K',
    weightGrams: 6.4,
    price: 32000,
    description: 'Timeless round hoops with a smooth, polished finish. The perfect diameter — substantial but never heavy.',
    craftsmanshipNotes: 'Tubular construction for lightweight comfort. Click-top closure with safety catch. Hand-polished to remove all seam lines.',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    status: 'available',
    featured: true,
  },
  {
    id: 'ear-002',
    name: 'Huggie Hoops',
    collection: 'earrings',
    karat: '14K',
    weightGrams: 3.1,
    price: 15000,
    description: 'Small, close-fitting hoops that hug the earlobe. Effortless elegance for daily wear.',
    craftsmanshipNotes: 'Hinged snap closure for secure, comfortable all-day wear. Polished interior for sensitive ears.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    ],
    status: 'available',
    featured: false,
  },
  {
    id: 'ear-003',
    name: 'Drop Leaf Earrings',
    collection: 'earrings',
    karat: '18K',
    weightGrams: 7.8,
    price: 38000,
    description: 'Elongated leaf-shaped drops that sway with movement. Organic and refined.',
    craftsmanshipNotes: 'Hand-hammered leaf texture with a brushed satin finish. French wire hooks for comfortable wear.',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    status: 'available',
    featured: false,
  },
  {
    id: 'ear-004',
    name: 'Ball Stud Earrings',
    collection: 'earrings',
    karat: '21K',
    weightGrams: 2.4,
    price: 18000,
    description: 'Simple gold ball studs. The richness of 21K gold gives these a warm, deep luster that lower karats cannot match.',
    craftsmanshipNotes: 'Perfectly spherical, individually cast and polished. Push-back closures with large butterfly backs for security.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    ],
    status: 'sold',
    featured: false,
  },

  // ── Bracelets ──
  {
    id: 'brac-001',
    name: 'Cuban Link Bracelet',
    collection: 'bracelets',
    karat: '18K',
    weightGrams: 22.0,
    price: 110000,
    description: 'A bold Cuban link chain bracelet. Heavy, substantial, and unmistakably gold. The ultimate statement piece.',
    craftsmanshipNotes: 'Each link is individually cut, shaped, and connected. Box clasp with double safety catch. Hand-polished to a high shine.',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    ],
    status: 'available',
    featured: true,
  },
  {
    id: 'brac-002',
    name: 'Bangle Cuff',
    collection: 'bracelets',
    karat: '14K',
    weightGrams: 14.5,
    price: 52000,
    description: 'An open cuff bangle with a clean, modern silhouette. Adjusts gently to fit any wrist.',
    craftsmanshipNotes: 'Forged from a single gold rod, gradually flattened and curved. The open-ended design allows for subtle size adjustment.',
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    status: 'available',
    featured: false,
  },
  {
    id: 'brac-003',
    name: 'Figaro Chain Bracelet',
    collection: 'bracelets',
    karat: '18K',
    weightGrams: 10.2,
    price: 52000,
    description: 'Classic Figaro pattern — alternating short and long links create a distinctive rhythm on the wrist.',
    craftsmanshipNotes: 'Traditional Italian-style Figaro pattern adapted with Filipino craftsmanship. Lobster clasp with extension chain.',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    ],
    status: 'available',
    featured: false,
  },
  {
    id: 'brac-004',
    name: 'Woven Gold Bracelet',
    collection: 'bracelets',
    karat: '21K',
    weightGrams: 16.8,
    price: 98000,
    description: 'An intricately woven bracelet that catches light like fabric made of gold. Supple, flexible, and astonishingly detailed.',
    craftsmanshipNotes: 'Over 200 individual gold wires braided by hand. This technique requires three days of continuous work by our senior artisan.',
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    status: 'reserved',
    featured: false,
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCollection(collection: string): Product[] {
  return products.filter(p => p.collection === collection)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 0,
  }).format(price)
}
