'use client';

import Link from 'next/link';
import { formatPrice } from '@/utils/price';
import ImageComponent from './ImageComponent';

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category?: string;
  description?: string;
}

export default function ProductCard({ 
  id, 
  name, 
  brand, 
  price, 
  image,
  category,
  description 
}: ProductCardProps) {
  return (
    <Link 
      href={`/products/${id}`} 
      className="group block transform perspective-1000 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 ease-out hover:shadow-2xl">
        <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
          <ImageComponent
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg">
            <span className="text-lg font-bold text-gray-900">{formatPrice(price)}</span>
          </div>
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className="bg-black text-white text-sm font-medium px-3 py-1 rounded-full">
              {brand}
            </span>
            {category && (
              <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full capitalize">
                {category}
              </span>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
            {name}
          </h3>
          {description && (
            <p className="text-sm text-gray-600 line-clamp-2 mb-2">
              {description}
            </p>
          )}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>★★★★★</span>
            <span>In Stock</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100" />
      </div>
    </Link>
  );
}