'use client';

import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function BrandPage() {
  const params = useParams();
  const brandSlug = (params?.brand as string)?.toLowerCase();
  
  // Get brand name with proper capitalization from products
  const brandName = products.find(p => p.brand.toLowerCase() === brandSlug)?.brand;
  const brandProducts = products.filter(p => p.brand.toLowerCase() === brandSlug);

  // If brand doesn't exist, show 404
  if (!brandName || brandProducts.length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button and header */}
      <div className="mb-8">
        <Link 
          href="/brands" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-4"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          Back to All Brands
        </Link>

        <h1 className="text-3xl font-bold mb-2">{brandName}</h1>
        <p className="text-gray-600">
          {brandProducts.length} {brandProducts.length === 1 ? 'Product' : 'Products'} Available
        </p>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {brandProducts.map((product) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            brand={product.brand}
            price={product.price}
            image={product.image}
            category={product.category}
            description={product.description}
          />
        ))}
      </div>

      {/* Empty state - should never show because of notFound() above */}
      {brandProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-600">No products available for this brand.</p>
          <Link
            href="/brands"
            className="inline-block mt-4 text-blue-600 hover:text-blue-700"
          >
            View All Brands
          </Link>
        </div>
      )}
    </div>
  );
} 