export interface Collection {
  slug: string
  name: string
  description: string
  image: string
  itemCount: number
}

export const collections: Collection[] = [
  {
    slug: 'rings',
    name: 'Rings',
    description: 'Bands of legacy, forged in fine gold. From classic signet rings to modern statement pieces — each one crafted to endure.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    itemCount: 4,
  },
  {
    slug: 'necklaces',
    name: 'Necklaces',
    description: 'Chains and pendants that carry weight — not just in gold, but in meaning. Pieces that drape elegance across generations.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    itemCount: 4,
  },
  {
    slug: 'earrings',
    name: 'Earrings',
    description: 'Subtle brilliance that frames the face. From classic hoops to drop earrings — understated luxury at its finest.',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    itemCount: 4,
  },
  {
    slug: 'bracelets',
    name: 'Bracelets',
    description: 'Gold that wraps around the wrist like an embrace. Timeless bangles and chains crafted for everyday elegance.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    itemCount: 4,
  },
]
