'use client';

import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';
import Link from 'next/link';

export default function NikePage() {
  const nikeProducts = products.filter(product => product.brand.toLowerCase() === 'nike');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter products by category
  const filteredProducts = nikeProducts.filter(product => 
    selectedCategory === 'all' ? true : product.category === selectedCategory
  );

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
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
          <div className="flex items-center gap-4 mb-4">
            <Link 
              href="/brands"
              className="text-gray-600 hover:text-gray-900"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
            </Link>
            <h1 className="text-4xl font-bold">Nike Collection</h1>
          </div>
          <p className="text-gray-600 mb-6">
            Discover Nike&apos;s innovative footwear collection, from performance athletics to street style.
          </p>
          
          {/* Filters and Sorting */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-gray-600">
                Showing {sortedProducts.length} products
              </p>
              <div className="flex flex-wrap gap-2">
                {['all', 'men', 'women'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-sm rounded-full border transition-colors
                      ${selectedCategory === category
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 hover:border-gray-400 text-gray-700'
                      }`}
                  >
                    {category === 'all' ? 'All' : category === 'men' ? "Men's" : "Women's"}
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
              Please try a different category or check back later for new arrivals.
            </p>
          </div>
        )}

        {/* Collections Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Popular Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Air Max Series', image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1470&fit=crop' },
              { name: 'Jordan Collection', image: 'https://images.unsplash.com/photo-1586525198428-225f6f12cff5?q=80&w=1470&fit=crop' },
              { name: 'Running Essentials', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&fit=crop' },
            ].map((collection) => (
              <div 
                key={collection.name}
                className="relative h-48 rounded-lg overflow-hidden group cursor-pointer"
              >
                <div 
                  className="absolute inset-0 bg-center bg-cover"
                  style={{ backgroundImage: `url(${collection.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center">
                    {collection.name}
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