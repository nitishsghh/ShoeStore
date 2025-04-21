'use client';

import { products } from '@/data/products';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { formatPrice } from '@/utils/price';
import { useCart } from '@/context/CartContext';
import ImageComponent from '@/components/ImageComponent';

const sizes = [
  { us: '6', uk: '5.5', eu: '39' },
  { us: '7', uk: '6.5', eu: '40' },
  { us: '8', uk: '7.5', eu: '41' },
  { us: '9', uk: '8.5', eu: '42' },
  { us: '10', uk: '9.5', eu: '43' },
  { us: '11', uk: '10.5', eu: '44' },
  { us: '12', uk: '11.5', eu: '45' },
];

export default function ProductPage() {
  const params = useParams();
  const product = products.find(p => p.id === params.id);
  const [selectedSize, setSelectedSize] = useState('');
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Product not found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, 1);
    window.location.href = '/checkout';
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
            <ImageComponent
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{product.brand}</p>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                {formatPrice(product.price)}
              </p>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Select Size</h2>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size.us}
                    onClick={() => setSelectedSize(size.us)}
                    className={`p-3 text-sm border rounded-lg transition-all ${
                      selectedSize === size.us
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-medium">US {size.us}</div>
                    <div className="text-xs text-gray-500">
                      UK {size.uk} / EU {size.eu}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart and Buy Now Buttons */}
            <div className="flex flex-col gap-4 mt-auto">
              <button
                onClick={handleAddToCart}
                className="w-full py-4 px-6 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all"
              >
                Buy Now
              </button>
            </div>

            {/* Additional Information */}
            <div className="mt-8 border-t pt-8">
              <h2 className="text-lg font-semibold mb-4">Product Details</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Brand</span>
                  <span className="font-medium">{product.brand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium capitalize">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Style</span>
                  <span className="font-medium">{product.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 