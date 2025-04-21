'use client';

import { products, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Improved search logic with multiple criteria
    const results = products.filter((product) => {
      if (!query) return false;
      
      const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
      const productName = product.name.toLowerCase();
      const productBrand = product.brand.toLowerCase();
      const productCategory = product.category.toLowerCase();
      
      // Check if all search terms are found in any of the product fields
      return searchTerms.every(term => 
        productName.includes(term) ||
        productBrand.includes(term) ||
        productCategory.includes(term)
      );
    });

    setSearchResults(results);
    setIsLoading(false);
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mr-4"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 mr-2" 
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
          Back to Home
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Search Results</h1>
        {isLoading ? (
          <p className="text-gray-600">Searching...</p>
        ) : (
          <div>
            <p className="text-gray-600 mb-4">
              {query ? (
                searchResults.length > 0 
                  ? `Found ${searchResults.length} results for "${query}"`
                  : `No results found for "${query}". Try using different keywords or check the spelling.`
              ) : 'Please enter a search term'}
            </p>
            {query && searchResults.length === 0 && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h2 className="text-blue-800 font-semibold mb-2">Search Tips:</h2>
                <ul className="text-blue-700 list-disc list-inside">
                  <li>Check the spelling of your search terms</li>
                  <li>Try using more general terms</li>
                  <li>Try searching by brand name (e.g., "Nike", "Adidas")</li>
                  <li>Try searching by category (e.g., "running", "casual")</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {!isLoading && searchResults.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {searchResults.map((product) => (
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
      )}
    </div>
  );
} 