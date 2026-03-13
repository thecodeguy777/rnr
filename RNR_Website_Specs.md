# RNR Gold Jewelry — Website Design Specifications

---

## Brand Overview

**RNR Gold Jewelry** is a heritage house of fine gold craftsmanship, re-established in 2025 by Eska Rudica and Precious Rudica. Its story begins in 1978 with the Rudica family, whose name became synonymous with artistry, trust, and excellence in the Philippine gold industry.

**Tagline:** Gold, redefined for generations

**Positioning:**
- Gold, redefined by generations
- Jewelry that lives with you
- Luxury within reach

---

## Brand Color Palette

| Color | Hex | Usage |
|---|---|---|
| **Orange** | `#f06a35` | Primary brand color — buttons, CTAs, hover states, accents |
| **Stone** | `#F6F1EC` | Primary background — warm cream tone |
| **Burgundy Red** | `#610600` | Secondary — deep accent for gradients, emphasis |
| **Deep Blue** | `#18263b` | Neutral — dark text, footer, contrast elements |

---

## Typography

| Role | Font | Weights |
|---|---|---|
| **Headings** | Cormorant Garamond (Serif) | Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700) |
| **Body Text** | Inter (Sans-serif) | Light (300), Regular (400), Medium (500), SemiBold (600) |

**Heading Style:** Light weight, wide letter-spacing, uppercase labels
**Body Style:** Clean, minimal, high readability
**Button/Label Style:** 10px, tracking 0.2em, uppercase

---

## Homepage Sections

### 1. FRONT PAGE — Hero

- Full-screen hero image (90vh)
- RNR Logo (white variant, 80px)
- Category navigation links (Rings, Necklaces, Earrings, Bracelets, Pendants)
- Brand motto: "Gold That Outlives Time"
- Sub-tagline: "Fine Gold Since 1978"
- Primary CTA: **SHOP NOW** button

### 2. SECOND PAGE — Categories Product Showcase

- Section header: "Shop By Category" / "Our Collections"
- 4-column grid (2 on mobile)
- Category cards with full-bleed images + dark gradient overlay
- Categories: Necklaces & Pendants, Bracelets, Earrings, Rings
- Each card: category name + "Shop Now" text overlay
- Hover: subtle image zoom (1.05x)

### 3. THIRD PAGE — Best Seller Product Showcase Slider

- Section header: "Best Sellers" / "Most Loved Pieces"
- Horizontal scroll carousel with snap points
- Product cards showing: image, name, dynamic price, karat
- Desktop: left/right scroll arrows
- Mobile: swipe-to-scroll
- "View All" link to collections page
- Background: Stone (darker shade)

### 4. FOURTH PAGE — Collection Summary (50/50 Split)

- Left: Full-bleed product image
- Right: Brand promise copy
  - Headline: "Gold That Holds Its Value Forever"
  - Copy about investment value + heritage craftsmanship
  - CTA: "Start Your Collection" button

### 5. FOOTER

- 3-column layout
- Column 1: RNR Logo + brand tagline
- Column 2: Navigation links (Collections, Our Story, Contact)
- Column 3: Social links (Facebook) + Location (Manila, Philippines)
- Bottom bar: Copyright + "Fine Gold Since 1978"

---

## Live Gold Price Ticker

- Fixed bar at top of every page
- Real-time simulated gold spot price (USD)
- Live canvas-drawn price chart with animated line
- Karat prices displayed: 24K, 21K, 18K, 14K (PHP per gram)
- Green/red pulse indicator for price direction
- Percentage change badge
- Orange gradient background with noise texture

---

## Product Detail Page

### Layout: 50/50 Split

**Left Column — Image Gallery:**
- Main image (square aspect ratio)
- Thumbnail strip below (click to switch)

**Right Column — Product Info:**
- Breadcrumb: Collections > [Category] > [Product Name]
- Product name (large serif heading)
- Dynamic price (updates with gold market)
- Star rating (4.8 / 5 stars, 24 reviews)
- **Finish Selector:** 18K / 21K / 24K toggle buttons
- **Size Selector:** 5.5" to 8" toggle buttons
- Per-gram price + weight display
- **Add to Cart** button (opens inquiry form)
- **Wishlist** heart icon toggle
- Status badge: Available / Sold Out / Reserved

### Accordion Sections:
1. **Details** — Product description + craftsmanship notes
2. **Delivery** — Shipping info (1-2 days Metro Manila, 3-5 provincial)
3. **FAQs** — 5 common questions about gold purity, pricing, shipping, payments, store visits

### Bottom Section:
- Best Sellers horizontal carousel

### Inquiry Modal:
- Fields: Name, Email, Phone (optional), Message
- Pre-filled with product name + selected finish + price

---

## Collections Page

### Layout: Sidebar + Grid

**Left Sidebar (Desktop):**
- Category filter (All, Rings, Necklaces, Earrings, Bracelets, Pendants)
- Sort by (Default, Newest, Price ascending/descending, Weight)
- Karat filter (All, 14K, 18K, 21K, 24K)
- Price range slider
- Stones filter (All, Diamond, Pearl, None)

**Main Grid:**
- 2 columns (mobile), 4 columns (desktop)
- Product cards with dynamic pricing
- Piece count indicator
- Empty state with "Clear Filters" button

---

## Dynamic Gold Pricing System

All product prices fluctuate in real-time based on simulated gold market rates.

### Pricing Formula:
```
Product Price = Weight (g) x Karat Price Per Gram x 1.20 (profit margin)
```

### Constants:
| Parameter | Value |
|---|---|
| Base Spot Price | $2,945 USD/oz |
| PHP Exchange Rate | 58.2 |
| Profit Margin | 20% |
| Update Interval | Every 4 seconds |

### Karat Purity Table:
| Karat | Purity | Approx. PHP/gram |
|---|---|---|
| 24K | 100% | ~5,510 |
| 21K | 87.5% | ~4,822 |
| 18K | 75% | ~4,133 |
| 14K | 58.3% | ~3,213 |

---

## Additional Pages

### Our Story
1. Hero (70vh) — workshop image, "Since 1978"
2. The Beginning — origin story copy
3. Full-width image break
4. Legacy section (50/50 split) — "Generation to Generation"
5. Principles grid (3 columns) — Timeless Over Trendy, Craft Before Commerce, Gold as Legacy
6. CTA — "Begin Your Legacy" with dual buttons

### Contact
- 2-column layout
- Left: visit info, social links, hours
- Right: contact form (Name, Email, Phone, Interest category, Message)
- Success state after submission

---

## Product Catalog

**20 products across 5 collections:**

### Rings (4 pieces)
| Product | Karat | Weight | Status |
|---|---|---|---|
| Classic Signet Ring | 18K | 8.5g | Available |
| Twisted Rope Band | 14K | 5.2g | Available |
| Heritage Dome Ring | 21K | 12.0g | Available |
| Bamboo Textured Band | 18K | 6.8g | Sold |

### Necklaces (4 pieces)
| Product | Karat | Weight | Status |
|---|---|---|---|
| Tiffany Hardware Chain | 18K | 15.3g | Available |
| Delicate Box Chain | 18K | 4.2g | Available |
| Herringbone Collar | 14K | 18.5g | Reserved |
| Pendant Drop Necklace | 21K | 9.8g | Available |

### Earrings (4 pieces)
| Product | Karat | Weight | Status |
|---|---|---|---|
| Classic Hoop Earrings | 18K | 6.4g | Available |
| Huggie Hoops | 14K | 3.1g | Available |
| Drop Leaf Earrings | 18K | 7.8g | Available |
| Ball Stud Earrings | 21K | 2.4g | Sold |

### Bracelets (4 pieces)
| Product | Karat | Weight | Status |
|---|---|---|---|
| Cuban Link Bracelet | 18K | 22.0g | Available |
| Bangle Cuff | 14K | 14.5g | Available |
| Figaro Chain Bracelet | 18K | 10.2g | Available |
| Woven Gold Bracelet | 21K | 16.8g | Reserved |

### Pendants (4 pieces)
| Product | Karat | Weight | Status |
|---|---|---|---|
| Teardrop Pendant | 18K | 5.6g | Available |
| Coin Medallion Pendant | 21K | 8.2g | Available |
| Heart Locket | 14K | 4.8g | Available |
| Cross Pendant | 18K | 6.5g | Sold |

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Nuxt | 4.4.2 | Frontend framework (Vue 3) |
| Vue | 3.5.30 | Reactive UI |
| Tailwind CSS | 4.2.1 | Utility-first styling |
| DaisyUI | 5.5.19 | Component library + theming |
| Vite | — | Build tool |
| Netlify | Static | Deployment |
| TypeScript | — | Type safety |

---

## Design Tokens

| Token | Value |
|---|---|
| Border Radius | 0.15 – 0.2rem (minimal) |
| Border Width | 1px |
| Max Content Width | 1280px (max-w-7xl) |
| Mobile Padding | 24px (px-6) |
| Desktop Padding | 48px (lg:px-12) |
| Image Hover Scale | 1.05x over 0.6s |
| Scroll Behavior | Smooth |
| Animations | Fade-in (0.8s), price flash (0.6s) |

---

## Responsive Breakpoints

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile | < 768px | 2-col grids, hamburger nav, stacked layouts |
| Tablet (md) | 768px+ | 3-col grids, expanded spacing |
| Desktop (lg) | 1024px+ | 4-col grids, sidebar filters, scroll arrows, 50/50 splits |

---

## Key Interactions

1. **Live Gold Ticker** — Prices update every 4s with flash animation
2. **Product Price Sync** — All product prices reflect current gold rate
3. **Carousel Navigation** — Snap scroll + arrow buttons
4. **Image Zoom** — Hover scale on product cards
5. **Accordion Toggle** — Collapsible product details/FAQs
6. **Wishlist Toggle** — Heart icon state change
7. **Inquiry Modal** — Form overlay for product inquiries
8. **Filter System** — Real-time product filtering by category, karat, price, stones
9. **Responsive Nav** — Drawer menu on mobile, inline links on desktop

---

*RNR Gold Jewelry — Gold, redefined for generations.*
