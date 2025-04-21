'use client';

import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';

export default function WomenPage() {
  const womenProducts = products.filter(product => product.category === 'women');
  const [sortBy, setSortBy] = useState('featured');

  // Sort products based on selected option
  const sortedProducts = [...womenProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Women&apos;s Collection</h1>
          <p className="text-gray-600 mb-6">
            Discover our exclusive collection of women&apos;s footwear, featuring the latest trends and timeless classics.
          </p>
          
          {/* Filters and Sorting */}
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Showing {womenProducts.length} products
            </p>
            <div className="flex items-center gap-4">
              <label htmlFor="sort" className="text-gray-600">Sort by:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
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

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">
              Please check back later for new arrivals.
            </p>
          </div>
        )}
      </div>
    </main>
  );
} 