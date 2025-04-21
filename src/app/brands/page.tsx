'use client';

import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';

interface BrandInfo {
  name: string;
  image: string;
  productCount: number;
}

export default function BrandsPage() {
  // Get unique brands and their info
  const brands: BrandInfo[] = Array.from(new Set(products.map(p => p.brand)))
    .map(brandName => {
      const brandProducts = products.filter(p => p.brand === brandName);
      return {
        name: brandName,
        // Use the first product's image as the brand image
        image: brandProducts[0]?.image || '/default-shoe.jpg',
        productCount: brandProducts.length
      };
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Brands</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <Link
            key={brand.name}
            href={`/brands/${brand.name.toLowerCase()}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48 w-full bg-gray-100">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-semibold">View Collection</span>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">{brand.name}</h2>
                <p className="text-sm text-gray-600">{brand.productCount} Products</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {brands.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-600">No brands available at the moment.</p>
        </div>
      )}
    </div>
  );
} 