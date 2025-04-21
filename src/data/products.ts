export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'men' | 'women' | 'unisex';
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  // Nike Collection
  {
    id: 'nike-1',
    name: 'Air Max 270',
    brand: 'Nike',
    category: 'men',
    price: 150.00,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000',
    description: 'The Nike Air Max 270 delivers visible cushioning under every step.'
  },
  {
    id: 'nike-2',
    name: 'Zoom Pegasus 38',
    brand: 'Nike',
    category: 'men',
    price: 120.00,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000',
    description: 'Responsive running shoes with Zoom Air cushioning.'
  },
  {
    id: 'nike-3',
    name: 'Air Force 1',
    brand: 'Nike',
    category: 'men',
    price: 100.00,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1000',
    description: 'The iconic Nike Air Force 1 with timeless style.'
  },
  {
    id: 'nike-4',
    name: 'React Infinity',
    brand: 'Nike',
    category: 'women',
    price: 160.00,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000',
    description: 'Nike React foam delivers a smooth, responsive ride.'
  },
  {
    id: 'nike-5',
    name: 'Metcon 7',
    brand: 'Nike',
    category: 'men',
    price: 130.00,
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1000',
    description: 'Stable and sturdy shoes for training and lifting.'
  },
  {
    id: 'nike-6',
    name: 'ZoomX Vaporfly',
    brand: 'Nike',
    category: 'unisex',
    price: 250.00,
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1000',
    description: 'Elite racing shoes with carbon fiber plate.'
  },
  {
    id: 'nike-7',
    name: 'Free Run 5.0',
    brand: 'Nike',
    category: 'women',
    price: 100.00,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000',
    description: 'Flexible and lightweight for natural movement.'
  },
  {
    id: 'nike-8',
    name: 'Blazer Mid',
    brand: 'Nike',
    category: 'unisex',
    price: 100.00,
    image: 'https://images.unsplash.com/photo-1597248881519-db089d3744a5?q=80&w=1000',
    description: 'Vintage-inspired basketball shoes with modern comfort.'
  },
  {
    id: 'nike-9',
    name: 'Air Jordan 1',
    brand: 'Nike',
    category: 'men',
    price: 170.00,
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1000',
    description: 'The legendary Air Jordan 1 in classic colorway.'
  },
  {
    id: 'nike-10',
    name: 'Air Zoom Tempo',
    brand: 'Nike',
    category: 'women',
    price: 200.00,
    image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1000',
    description: 'Premium running shoes for race day performance.'
  },
  {
    id: 'nike-air-max-270',
    name: 'Nike Air Max 270',
    brand: 'Nike',
    category: 'men',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1470&fit=crop',
    description: 'The Nike Air Max 270 delivers visible cushioning under every step with a huge Air unit and lightweight foam.'
  },
  {
    id: 'nike-zoom-pegasus',
    name: 'Nike Air Zoom Pegasus 39',
    brand: 'Nike',
    category: 'men',
    price: 11999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&fit=crop',
    description: 'The Nike Air Zoom Pegasus 39 delivers comfort and speed for your daily training runs.'
  },
  {
    id: 'nike-metcon-8',
    name: 'Nike Metcon 8',
    brand: 'Nike',
    category: 'men',
    price: 13499,
    image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1470&fit=crop',
    description: 'The Nike Metcon 8 is built for lifting, high-intensity workouts, and cardio.'
  },
  {
    id: 'nike-free-run',
    name: 'Nike Free Run 5.0',
    brand: 'Nike',
    category: 'women',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1470&fit=crop',
    description: 'The Nike Free Run 5.0 provides a barefoot-like feel with its flexible sole design.'
  },
  {
    id: 'nike-react-infinity',
    name: 'Nike React Infinity Run',
    brand: 'Nike',
    category: 'women',
    price: 14999,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1470&fit=crop',
    description: 'The Nike React Infinity Run offers premium cushioning and support for long-distance runs.'
  },
  {
    id: 'nike-air-force-1',
    name: 'Nike Air Force 1 Low',
    brand: 'Nike',
    category: 'men',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1470&fit=crop',
    description: 'The iconic Nike Air Force 1 Low features classic style and all-day comfort.'
  },
  {
    id: 'nike-blazer-mid',
    name: 'Nike Blazer Mid',
    brand: 'Nike',
    category: 'women',
    price: 9499,
    image: 'https://images.unsplash.com/photo-1597248881519-db089d3744a5?q=80&w=1470&fit=crop',
    description: 'The Nike Blazer Mid offers vintage basketball style with modern comfort.'
  },
  {
    id: 'nike-dunk-low',
    name: 'Nike Dunk Low',
    brand: 'Nike',
    category: 'men',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1470&fit=crop',
    description: 'The Nike Dunk Low brings retro basketball style to everyday wear.'
  },
  {
    id: 'nike-air-max-90',
    name: 'Nike Air Max 90',
    brand: 'Nike',
    category: 'men',
    price: 11999,
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1470&fit=crop',
    description: 'The Nike Air Max 90 combines classic design with modern comfort technology.'
  },
  {
    id: 'nike-zoomx-vaporfly',
    name: 'Nike ZoomX Vaporfly',
    brand: 'Nike',
    category: 'men',
    price: 19999,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1470&fit=crop',
    description: 'The Nike ZoomX Vaporfly is designed for elite performance and record-breaking speed.'
  },
  {
    id: 'nike-air-zoom-tempo',
    name: 'Nike Air Zoom Tempo NEXT%',
    brand: 'Nike',
    category: 'women',
    price: 17999,
    image: 'https://images.unsplash.com/photo-1606297199333-e93f7d726cab?q=80&w=1470&fit=crop',
    description: 'The Nike Air Zoom Tempo NEXT% delivers speed and comfort for your tempo runs.'
  },
  {
    id: 'nike-jordan-1-high',
    name: 'Nike Air Jordan 1 High',
    brand: 'Nike',
    category: 'men',
    price: 15999,
    image: 'https://images.unsplash.com/photo-1586525198428-225f6f12cff5?q=80&w=1470&fit=crop',
    description: 'The iconic Air Jordan 1 High features premium materials and timeless style.'
  },
  {
    id: 'nike-jordan-4',
    name: 'Nike Air Jordan 4',
    brand: 'Nike',
    category: 'men',
    price: 16999,
    image: 'https://images.unsplash.com/photo-1607893378714-007fd47c8719?q=80&w=1470&fit=crop',
    description: 'The Air Jordan 4 combines classic basketball heritage with modern comfort.'
  },
  {
    id: 'nike-sb-dunk-high',
    name: 'Nike SB Dunk High',
    brand: 'Nike',
    category: 'men',
    price: 10999,
    image: 'https://images.unsplash.com/photo-1612015670817-0127d21628d4?q=80&w=1470&fit=crop',
    description: 'The Nike SB Dunk High offers skateboarding performance with street-ready style.'
  },
  {
    id: 'nike-air-huarache',
    name: 'Nike Air Huarache',
    brand: 'Nike',
    category: 'women',
    price: 10499,
    image: 'https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?q=80&w=1470&fit=crop',
    description: 'The Nike Air Huarache delivers classic \'90s style with modern comfort innovations.'
  },

  // Adidas Collection
  {
    id: 'adidas-ultraboost-23',
    name: 'Ultraboost 23',
    brand: 'Adidas',
    category: 'men',
    price: 19999,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1470&fit=crop',
    description: 'The latest Ultraboost with enhanced Boost cushioning and Continental rubber outsole.'
  },
  {
    id: 'adidas-stan-smith-primegreen',
    name: 'Stan Smith Primegreen',
    brand: 'Adidas',
    category: 'unisex',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1470&fit=crop',
    description: 'The classic tennis shoe reimagined with sustainable materials.'
  },
  {
    id: 'adidas-nmd-r1-v2',
    name: 'NMD_R1 V2',
    brand: 'Adidas',
    category: 'men',
    price: 13999,
    image: 'https://images.unsplash.com/photo-1554735490-5974588cbc4f?q=80&w=1470&fit=crop',
    description: 'Updated NMD design with Boost cushioning and modern streetwear style.'
  },
  {
    id: 'adidas-superstar-bold',
    name: 'Superstar Bold',
    brand: 'Adidas',
    category: 'women',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&w=1470&fit=crop',
    description: 'Platform version of the iconic shell-toe sneaker.'
  },
  {
    id: 'adidas-forum-84-hi',
    name: 'Forum 84 Hi',
    brand: 'Adidas',
    category: 'unisex',
    price: 11999,
    image: 'https://images.unsplash.com/photo-1603787081207-362bcef7c144?q=80&w=1470&fit=crop',
    description: 'Retro basketball high-top with premium leather upper.'
  },
  {
    id: 'adidas-zx-8000',
    name: 'ZX 8000',
    brand: 'Adidas',
    category: 'men',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=1470&fit=crop',
    description: 'Classic ZX series runner with Torsion System support.'
  },
  {
    id: 'adidas-ozelia',
    name: 'Ozelia',
    brand: 'Adidas',
    category: 'unisex',
    price: 11999,
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1470&fit=crop',
    description: 'Modern chunky sneaker inspired by Y2K aesthetics.'
  },
  {
    id: 'adidas-terrex-swift-r3',
    name: 'Terrex Swift R3 GTX',
    brand: 'Adidas',
    category: 'men',
    price: 15999,
    image: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?q=80&w=1470&fit=crop',
    description: 'Waterproof hiking shoe with Continental rubber outsole.'
  },
  {
    id: 'adidas-4dfwd-2',
    name: '4DFWD 2',
    brand: 'Adidas',
    category: 'unisex',
    price: 21999,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1470&fit=crop',
    description: 'Advanced 3D-printed midsole for forward momentum.'
  },
  {
    id: 'adidas-samba-vegan',
    name: 'Samba Vegan',
    brand: 'Adidas',
    category: 'unisex',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1584539696499-bff0b4768e4e?q=80&w=1470&fit=crop',
    description: 'Sustainable version of the classic indoor soccer shoe.'
  },
  {
    id: 'adidas-gazelle-indoor',
    name: 'Gazelle Indoor',
    brand: 'Adidas',
    category: 'men',
    price: 10999,
    image: 'https://images.unsplash.com/photo-1530389912609-9a007b3c38d6?q=80&w=1470&fit=crop',
    description: 'Indoor version of the classic Gazelle with gum sole.'
  },
  {
    id: 'adidas-ultra-4d-light',
    name: 'Ultra 4D Light',
    brand: 'Adidas',
    category: 'men',
    price: 19999,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1470&fit=crop',
    description: 'Lightweight version of the Ultra 4D with improved cushioning.'
  },
  {
    id: 'adidas-predator-edge.1',
    name: 'Predator Edge.1',
    brand: 'Adidas',
    category: 'unisex',
    price: 24999,
    image: 'https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?q=80&w=1470&fit=crop',
    description: 'Professional soccer cleats with Zone Skin technology.'
  },
  {
    id: 'adidas-dame-8',
    name: 'Dame 8',
    brand: 'Adidas',
    category: 'men',
    price: 13999,
    image: 'https://images.unsplash.com/photo-1607893378714-007fd47c8719?q=80&w=1470&fit=crop',
    description: 'Signature basketball shoes with Bounce Pro cushioning.'
  },
  {
    id: 'adidas-response-runner',
    name: 'Response Runner',
    brand: 'Adidas',
    category: 'women',
    price: 7999,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1470&fit=crop',
    description: 'Entry-level running shoes with Cloudfoam cushioning.'
  },
  {
    id: 'adidas-adistar-cs',
    name: 'Adistar CS',
    brand: 'Adidas',
    category: 'unisex',
    price: 14999,
    image: 'https://images.unsplash.com/photo-1587563871412-81c6e500f714?q=80&w=1470&fit=crop',
    description: 'Long-distance running shoes with dual-density midsole.'
  },
  {
    id: 'adidas-x-speedportal',
    name: 'X Speedportal.1',
    brand: 'Adidas',
    category: 'unisex',
    price: 23999,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1470&fit=crop',
    description: 'Speed-focused soccer cleats with carbon fiber plate.'
  },
  {
    id: 'adidas-retropy-e5',
    name: 'Retropy E5',
    brand: 'Adidas',
    category: 'men',
    price: 11999,
    image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=1470&fit=crop',
    description: 'Vintage-inspired runner with modern Boost cushioning.'
  },
  {
    id: 'adidas-adizero-sl',
    name: 'Adizero SL',
    brand: 'Adidas',
    category: 'unisex',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1470&fit=crop',
    description: 'Lightweight training shoes with Lightstrike cushioning.'
  },
  {
    id: 'adidas-campus-00s',
    name: 'Campus 00s',
    brand: 'Adidas',
    category: 'unisex',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&w=1470&fit=crop',
    description: 'Y2K-inspired version of the classic Campus sneaker.'
  },
  {
    id: 'adidas-ultraboost-light',
    name: 'Ultraboost Light',
    brand: 'Adidas',
    category: 'unisex',
    price: 22999,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1470&fit=crop',
    description: 'The lightest Ultraboost ever with 30% lighter Boost cushioning.'
  },
  {
    id: 'adidas-nmd-s1',
    name: 'NMD S1',
    brand: 'Adidas',
    category: 'men',
    price: 25999,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1470&fit=crop',
    description: 'Premium NMD evolution with futuristic design and enhanced Boost.'
  },
  {
    id: 'adidas-superstar-premium',
    name: 'Superstar Premium',
    brand: 'Adidas',
    category: 'unisex',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&w=1470&fit=crop',
    description: 'Luxury version with premium leather and gold accents.'
  },
  {
    id: 'adidas-adizero-pro-3',
    name: 'Adizero Pro 3',
    brand: 'Adidas',
    category: 'unisex',
    price: 27999,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1470&fit=crop',
    description: 'Elite racing shoe with carbon-fiber plate and Lightstrike Pro.'
  },
  {
    id: 'adidas-daily-3',
    name: 'Daily 3.0',
    brand: 'Adidas',
    category: 'men',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1470&fit=crop',
    description: 'Affordable everyday sneaker with canvas upper.'
  },
  {
    id: 'adidas-forum-luxe',
    name: 'Forum Luxe',
    brand: 'Adidas',
    category: 'women',
    price: 15999,
    image: 'https://images.unsplash.com/photo-1603787081207-362bcef7c144?q=80&w=1470&fit=crop',
    description: 'Premium version of Forum with Italian leather.'
  },
  {
    id: 'adidas-zx-2k-boost',
    name: 'ZX 2K Boost',
    brand: 'Adidas',
    category: 'unisex',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=1470&fit=crop',
    description: 'Modern ZX series with full Boost midsole.'
  },
  {
    id: 'adidas-terrex-agravic-pro',
    name: 'Terrex Agravic Pro',
    brand: 'Adidas',
    category: 'unisex',
    price: 29999,
    image: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?q=80&w=1470&fit=crop',
    description: 'Premium trail running shoe with BOA® Fit System.'
  },
  {
    id: 'adidas-run-falcon-3',
    name: 'Run Falcon 3',
    brand: 'Adidas',
    category: 'men',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1470&fit=crop',
    description: 'Budget-friendly running shoe with Cloudfoam cushioning.'
  },
  {
    id: 'adidas-copa-pure',
    name: 'Copa Pure.1',
    brand: 'Adidas',
    category: 'unisex',
    price: 21999,
    image: 'https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?q=80&w=1470&fit=crop',
    description: 'Premium leather soccer cleats with Touchpod technology.'
  },
  {
    id: 'adidas-harden-7',
    name: 'Harden Vol. 7',
    brand: 'Adidas',
    category: 'men',
    price: 17999,
    image: 'https://images.unsplash.com/photo-1607893378714-007fd47c8719?q=80&w=1470&fit=crop',
    description: 'James Harden signature shoe with Boost cushioning.'
  },
  {
    id: 'adidas-lite-racer-adapt',
    name: 'Lite Racer Adapt 4',
    brand: 'Adidas',
    category: 'women',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1470&fit=crop',
    description: 'Slip-on casual shoe with Cloudfoam comfort.'
  },
  {
    id: 'adidas-x-crazyfast',
    name: 'X Crazyfast+',
    brand: 'Adidas',
    category: 'unisex',
    price: 31999,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1470&fit=crop',
    description: 'Elite soccer cleats with Carbitex carbon plate.'
  },
  {
    id: 'adidas-dropset-trainer',
    name: 'Dropset Trainer',
    brand: 'Adidas',
    category: 'men',
    price: 13999,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1470&fit=crop',
    description: 'Versatile training shoe with stabilizing Bounce midsole.'
  },
  {
    id: 'adidas-centennial-85',
    name: 'Centennial 85 Low',
    brand: 'Adidas',
    category: 'unisex',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1470&fit=crop',
    description: 'Vintage basketball shoe reissue with premium materials.'
  },
  {
    id: 'adidas-duramo-10',
    name: 'Duramo 10',
    brand: 'Adidas',
    category: 'unisex',
    price: 6999,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1470&fit=crop',
    description: 'Value-focused running shoe with Lightmotion cushioning.'
  },
  {
    id: 'adidas-samba-og',
    name: 'Samba OG',
    brand: 'Adidas',
    category: 'unisex',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1584539696499-bff0b4768e4e?q=80&w=1470&fit=crop',
    description: 'Classic indoor soccer shoe with timeless style.'
  },
  {
    id: 'adidas-gazelle',
    name: 'Gazelle',
    brand: 'Adidas',
    category: 'unisex',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1584735174914-6ac1c7ac3f17?q=80&w=1470&fit=crop',
    description: 'Iconic sneaker with premium suede upper.'
  },
  {
    id: 'adidas-stan-smith',
    name: 'Stan Smith',
    brand: 'Adidas',
    category: 'unisex',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1470&fit=crop',
    description: 'The classic tennis shoe that defined a generation.'
  },
  {
    id: 'adidas-nmd-r1',
    name: 'NMD_R1',
    brand: 'Adidas',
    category: 'unisex',
    price: 13999,
    image: 'https://images.unsplash.com/photo-1587563871412-81c6e500f714?q=80&w=1470&fit=crop',
    description: 'Urban lifestyle sneaker with Boost cushioning.'
  },

  // Puma Collection
  {
    id: 'puma-velocity-nitro',
    name: 'Velocity Nitro 2',
    brand: 'Puma',
    category: 'men',
    price: 13999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000',
    description: 'High-performance running shoes with Nitro foam technology.'
  },
  {
    id: 'puma-suede-classic',
    name: 'Suede Classic XXI',
    brand: 'Puma',
    category: 'unisex',
    price: 7999,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000',
    description: 'The iconic Puma Suede reinvented for modern style.'
  },
  {
    id: 'puma-future-rider',
    name: 'Future Rider Play On',
    brand: 'Puma',
    category: 'unisex',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1000',
    description: 'Retro-inspired sneakers with playful color combinations.'
  },
  {
    id: 'puma-cali-sport',
    name: 'Cali Sport Heritage',
    brand: 'Puma',
    category: 'women',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000',
    description: 'Sport-inspired fashion sneakers with premium details.'
  },
  {
    id: 'puma-ultra-1',
    name: 'Ultra Ultimate',
    brand: 'Puma',
    category: 'unisex',
    price: 19999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000',
    description: 'Professional soccer cleats for explosive speed.'
  },
  {
    id: 'puma-mayze',
    name: 'Mayze Classic',
    brand: 'Puma',
    category: 'women',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1000',
    description: 'Platform sneakers with bold stacked sole design.'
  },
  {
    id: 'puma-mb',
    name: 'MB.01',
    brand: 'Puma',
    category: 'men',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1000',
    description: 'LaMelo Ball signature basketball shoes with Nitro foam.'
  },
  {
    id: 'puma-rs-x',
    name: 'RS-X³ Puzzle',
    brand: 'Puma',
    category: 'unisex',
    price: 11999,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000',
    description: 'Bold chunky sneakers with retro-future design elements.'
  },
  {
    id: 'puma-deviate-elite',
    name: 'Deviate Nitro Elite 2',
    brand: 'Puma',
    category: 'unisex',
    price: 21999,
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1000',
    description: 'Elite racing shoes with carbon plate technology.'
  },
  {
    id: 'puma-slipstream',
    name: 'Slipstream Lo',
    brand: 'Puma',
    category: 'unisex',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000',
    description: 'Classic basketball silhouette updated for today.'
  },
  {
    id: 'puma-pwrframe',
    name: 'PWRFrame OP-1',
    brand: 'Puma',
    category: 'men',
    price: 13999,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000',
    description: 'Training shoes with innovative support technology.'
  },
  {
    id: 'puma-foreverrun',
    name: 'ForeverRun Nitro',
    brand: 'Puma',
    category: 'women',
    price: 14999,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000',
    description: 'Maximum cushioning for long-distance running.'
  },
  {
    id: 'puma-rebound',
    name: 'Rebound Joy',
    brand: 'Puma',
    category: 'unisex',
    price: 6999,
    image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1000',
    description: 'Classic basketball-inspired sneakers for everyday wear.'
  },
  {
    id: 'puma-kosmo',
    name: 'Kosmo Rider',
    brand: 'Puma',
    category: 'unisex',
    price: 10999,
    image: 'https://images.unsplash.com/photo-1607893378714-007fd47c8719?q=80&w=1000',
    description: 'Futuristic design with retro running inspiration.'
  },
  {
    id: 'puma-palermo',
    name: 'Palermo OG',
    brand: 'Puma',
    category: 'unisex',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?q=80&w=1000',
    description: 'Vintage terrace culture meets modern street style.'
  },

  // Under Armour Collection
  {
    id: 'ua-phantom-3',
    name: 'HOVR Phantom 3',
    brand: 'Under Armour',
    category: 'men',
    price: 14999,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000',
    description: 'Connected running shoes with advanced HOVR technology.'
  },
  {
    id: 'ua-project-rock-5',
    name: 'Project Rock 5',
    brand: 'Under Armour',
    category: 'men',
    price: 15999,
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1000',
    description: 'Training shoes designed with Dwayne "The Rock" Johnson.'
  },
  {
    id: 'ua-charged-assert',
    name: 'Charged Assert 10',
    brand: 'Under Armour',
    category: 'unisex',
    price: 7999,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000',
    description: 'Versatile running shoes with responsive cushioning.'
  },
  {
    id: 'ua-hovr-machina-3',
    name: 'HOVR Machina 3',
    brand: 'Under Armour',
    category: 'men',
    price: 15999,
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1000',
    description: 'Long-distance running shoes with real-time coaching.'
  },
  {
    id: 'ua-curry-9',
    name: 'Curry Flow 9',
    brand: 'Under Armour',
    category: 'men',
    price: 16999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000',
    description: 'Stephen Curry\'s signature basketball shoes with Flow technology.'
  },
  {
    id: 'ua-tribase-reign-4',
    name: 'TriBase Reign 4',
    brand: 'Under Armour',
    category: 'unisex',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1000',
    description: 'Training shoes optimized for CrossFit and lifting.'
  },
  {
    id: 'ua-hovr-sonic-5',
    name: 'HOVR Sonic 5',
    brand: 'Under Armour',
    category: 'women',
    price: 11999,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000',
    description: 'Responsive running shoes with built-in tracking.'
  },
  {
    id: 'ua-flow-velociti-2',
    name: 'Flow Velociti Wind 2',
    brand: 'Under Armour',
    category: 'unisex',
    price: 15999,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1000',
    description: 'Revolutionary all-in-one cushioning system.'
  },
  {
    id: 'ua-hovr-apex-3',
    name: 'HOVR Apex 3',
    brand: 'Under Armour',
    category: 'men',
    price: 14999,
    image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1000',
    description: 'Versatile training shoes with enhanced stability.'
  },
  {
    id: 'ua-charged-pursuit-3',
    name: 'Charged Pursuit 3',
    brand: 'Under Armour',
    category: 'women',
    price: 7999,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000',
    description: 'Lightweight running shoes for daily training.'
  },
  {
    id: 'ua-project-rock-bsr',
    name: 'Project Rock BSR 2',
    brand: 'Under Armour',
    category: 'men',
    price: 10999,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000',
    description: 'Budget-friendly training shoes with Project Rock design.'
  },
  {
    id: 'ua-charged-bandit',
    name: 'Charged Bandit 7',
    brand: 'Under Armour',
    category: 'unisex',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1607893378714-007fd47c8719?q=80&w=1000',
    description: 'Reliable running shoes for everyday training.'
  },
  {
    id: 'ua-hovr-rise',
    name: 'HOVR Rise 4',
    brand: 'Under Armour',
    category: 'women',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?q=80&w=1000',
    description: 'Versatile training shoes with HOVR cushioning.'
  },
  {
    id: 'ua-spawn-3',
    name: 'Spawn 3',
    brand: 'Under Armour',
    category: 'men',
    price: 11999,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000',
    description: 'Basketball shoes designed for quick cuts and jumps.'
  },
  {
    id: 'ua-charged-vantage',
    name: 'Charged Vantage 2',
    brand: 'Under Armour',
    category: 'men',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000',
    description: 'Versatile running shoes with sleek design.'
  },

  // New Balance Collection
  {
    id: 'nb-990v6',
    name: '990v6',
    brand: 'New Balance',
    category: 'men',
    price: 18999,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000',
    description: 'Made in USA premium running shoes with ENCAP technology.'
  },
  {
    id: 'nb-574-legacy',
    name: '574 Legacy',
    brand: 'New Balance',
    category: 'unisex',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1000',
    description: 'Classic lifestyle sneakers with modern updates.'
  },
  {
    id: 'nb-fresh-foam-1080v12',
    name: 'Fresh Foam X 1080v12',
    brand: 'New Balance',
    category: 'men',
    price: 16999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000',
    description: 'Premium running shoes with Fresh Foam X technology.'
  },
  {
    id: 'nb-327-v2',
    name: '327 V2',
    brand: 'New Balance',
    category: 'unisex',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000',
    description: '70s inspired lifestyle shoes with contemporary design.'
  },
  {
    id: 'nb-997h-v2',
    name: '997H V2',
    brand: 'New Balance',
    category: 'men',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000',
    description: 'Modern interpretation of the classic 997.'
  },
  {
    id: 'nb-fresh-foam-roav-v2',
    name: 'Fresh Foam X Roav v2',
    brand: 'New Balance',
    category: 'women',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1000',
    description: 'Comfortable everyday running shoes with UltraHeel.'
  },
  {
    id: 'nb-237-v2',
    name: '237 v2',
    brand: 'New Balance',
    category: 'unisex',
    price: 7999,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000',
    description: 'Retro-inspired casual sneakers with modern comfort.'
  },
  {
    id: 'nb-fuelcell-rc-elite-v3',
    name: 'FuelCell RC Elite v3',
    brand: 'New Balance',
    category: 'unisex',
    price: 22999,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1000',
    description: 'Elite racing shoes with carbon fiber plate.'
  },
  {
    id: 'nb-fresh-foam-more-v4',
    name: 'Fresh Foam X More v4',
    brand: 'New Balance',
    category: 'men',
    price: 17999,
    image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1000',
    description: 'Maximum cushioning for long distance running.'
  },
  {
    id: 'nb-57-40-v2',
    name: '57/40 v2',
    brand: 'New Balance',
    category: 'unisex',
    price: 10999,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000',
    description: 'Bold interpretation of the classic 574.'
  },
  {
    id: 'nb-2002r',
    name: '2002R',
    brand: 'New Balance',
    category: 'men',
    price: 13999,
    image: 'https://images.unsplash.com/photo-1607893378714-007fd47c8719?q=80&w=1000',
    description: 'Premium lifestyle shoes with N-ERGY cushioning.'
  },
  {
    id: 'nb-fresh-foam-hierro-v7',
    name: 'Fresh Foam X Hierro v7',
    brand: 'New Balance',
    category: 'unisex',
    price: 14999,
    image: 'https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?q=80&w=1000',
    description: 'Trail running shoes with Vibram® outsole.'
  },
  {
    id: 'nb-numeric-272',
    name: 'Numeric 272',
    brand: 'New Balance',
    category: 'unisex',
    price: 7999,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000',
    description: 'Skateboarding shoes with NDurance rubber outsole.'
  },
  {
    id: 'nb-fresh-foam-tempo-v2',
    name: 'Fresh Foam Tempo v2',
    brand: 'New Balance',
    category: 'women',
    price: 10999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000',
    description: 'Lightweight running shoes for tempo training.'
  },
  {
    id: 'nb-fuelcell-rebel-v3',
    name: 'FuelCell Rebel v3',
    brand: 'New Balance',
    category: 'unisex',
    price: 13999,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000',
    description: 'Responsive running shoes for speed training.'
  }
];

export const brands = [
  'Nike',
  'Adidas',
  'Puma',
  'New Balance',
  'Under Armour'
]; 