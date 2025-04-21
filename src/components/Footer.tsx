'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gray-300">Our Story</Link></li>
              <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
              <li><Link href="/press" className="hover:text-gray-300">Press</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
              <li><Link href="/shipping" className="hover:text-gray-300">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-gray-300">Returns & Exchanges</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/men" className="hover:text-gray-300">Men's Shoes</Link></li>
              <li><Link href="/women" className="hover:text-gray-300">Women's Shoes</Link></li>
              <li><Link href="/brands" className="hover:text-gray-300">All Brands</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-gray-300">Instagram</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Facebook</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Twitter</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} ShoeStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 