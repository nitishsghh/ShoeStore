# Modern Shoe Store

A modern e-commerce web application built with Next.js 14, React, and TypeScript, featuring a beautiful UI and smooth user experience for browsing and purchasing shoes.

## 🚀 Features

- **Modern UI/UX**: Clean and responsive design with smooth animations
- **Performance Optimized**: Fast loading with image optimization and lazy loading
- **Mobile First**: Fully responsive across all devices
- **Brand Filtering**: Easy filtering by shoe brands
- **Image Optimization**: Advanced image handling with next/image
- **SEO Friendly**: Optimized meta tags and structured data
- **Type Safe**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 14**: React framework for production
- **React 18**: UI library
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework

### Key Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "@types/react": "^18.2.0",
    "@types/node": "^20.0.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "@heroicons/react": "^2.0.0",
    "sharp": "^0.32.0"
  },
  "devDependencies": {
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "@svgr/webpack": "^8.0.0"
  }
}
```

## 📦 Project Structure

```
shoe-store/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with metadata
│   │   ├── page.tsx          # Home page
│   │   ├── products/
│   │   │   ├── [id]/        # Dynamic product pages
│   │   │   └── page.tsx     # Products listing page
│   │   └── orders/
│   │       └── page.tsx     # Order history page
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── badge/
│   │   │   ├── button/
│   │   │   ├── card/
│   │   │   └── scroll-area/
│   │   ├── Navbar.tsx       # Navigation component
│   │   └── ProductCard.tsx  # Product display component
│   ├── context/
│   │   ├── CartContext.tsx  # Shopping cart state management
│   │   └── OrderContext.tsx # Order management
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   └── data/
│       └── products.ts      # Product database
├── public/
│   └── images/              # Static images and icons
├── styles/
│   └── globals.css         # Global styles
└── config/
    └── next.config.mjs     # Next.js configuration
```

## 🎨 Features & Components

### Navbar Component
- Responsive navigation
- Brand filtering
- Mobile menu
- Smooth animations
- Accessibility features

### Image Component
- Optimized image loading
- WebP and AVIF support
- Lazy loading
- Blur placeholder
- Error handling

### Product Data
- Structured product information
- Multiple brands (Nike, Adidas, Puma, etc.)
- High-quality product images
- Detailed descriptions

### Website Images Review
#### Home Page
```
/public/images/home/
├── hero-banner.jpg     # Main banner showcasing featured shoes
├── featured-1.jpg      # Featured collection display
└── brands/            # Brand logos and categories
    ├── nike.png
    ├── adidas.png
    └── puma.png
```

#### Product Pages
```
/public/images/products/
├── gallery/           # Product image galleries
│   ├── shoe-1/
│   │   ├── main.jpg
│   │   ├── angle-1.jpg
│   │   ├── angle-2.jpg
│   │   └── detail.jpg
│   └── ...
├── thumbnails/        # Product thumbnails for listings
└── categories/        # Category background images
```

#### UI Elements
```
/public/images/ui/
├── icons/            # UI icons and symbols
│   ├── cart.svg
│   ├── search.svg
│   └── user.svg
├── backgrounds/      # Section backgrounds
└── loaders/         # Loading animations
```

#### Features
- Responsive images with multiple sizes
- WebP format support for modern browsers
- Lazy loading implementation
- Blur placeholder effects
- Image optimization pipeline
- CDN integration ready
- Alt text for accessibility
- Structured image naming convention
- Automated image compression
- EXIF data cleaning

### Login Page
- Modern and responsive authentication interface
- Secure user authentication flow
- Form validation with error handling
- Remember me functionality
- Password recovery option
- OAuth integration support (Google, Facebook)
- Protected route management
- Session handling and persistence
- Mobile-friendly design
- Loading states and feedback
- Security features:
  - Password strength requirements
  - Rate limiting for login attempts
  - CSRF protection
  - Secure cookie handling
  - Input sanitization

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone <repository-url>
cd shoe-store
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Start production server**
```bash
npm start
```

## 🔧 Configuration

### Next.js Configuration
- Image optimization
- SVG support
- Security headers
- Compression
- Static optimization

### TypeScript Configuration
- Strict mode enabled
- Path aliases
- Type checking

### Tailwind Configuration
- Custom theme
- Extended colors
- Custom plugins
- JIT mode

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## 🔒 Security Features

- Content Security Policy
- Secure headers
- SVG sanitization
- Input validation

## 🎯 Performance Optimizations

- Image optimization
- Code splitting
- Route prefetching
- Font optimization
- Asset compression

## 📈 Future Enhancements

- [ ] User authentication
- [ ] Shopping cart functionality
- [ ] Payment integration
- [ ] Order management
- [ ] Admin dashboard
- [ ] Product reviews
- [ ] Wishlist feature
- [ ] Size guide
- [ ] Stock management

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - Copyright (c) 2025 - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Unsplash for high-quality images
- Open source community for various tools and libraries
