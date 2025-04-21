'use client';

import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';

export default function MenPage() {
  const menProducts = products.filter(product => product.category === 'men');
  const [sortBy, setSortBy] = useState('featured');

  // Sort products based on selected option
  const sortedProducts = [...menProducts].sort((a, b) => {
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
          <h1 className="text-4xl font-bold mb-4">Men&apos;s Collection</h1>
          <p className="text-gray-600 mb-6">
            Explore our premium collection of men&apos;s footwear, from casual comfort to formal elegance.
          </p>
          
          {/* Filters and Sorting */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-gray-600">
                Showing {menProducts.length} products
              </p>
              <div className="flex flex-wrap gap-2">
                {['All', 'Casual', 'Formal', 'Sports'].map((type) => (
                  <button
                    key={type}
                    className="px-4 py-2 text-sm rounded-full border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
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

        {/* Product Categories Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Shop by Style</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Casual Comfort', 'Business Formal', 'Athletic Performance'].map((category) => (
              <div 
                key={category}
                className="relative h-48 rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center">
                    {category}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 