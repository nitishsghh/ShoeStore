'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { items, isReady } = useCart();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  if (!mounted || !isReady) {
    return (
      <nav className="fixed w-full z-50 bg-white">
        <div className="max-w-[1400px] mx-auto px-0">
          <div className="flex justify-between h-[60px] items-center border-b border-gray-100">
            <div className="flex items-center pl-4">
              <div className="flex-shrink-0 flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <div className="w-[30px] h-[30px]" />
                  <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    ShoeStore
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-[1400px] mx-auto px-0">
        <div className="flex justify-between h-[60px] items-center border-b border-gray-100">
          <div className="flex items-center pl-4">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-2 group">
              <div className="flex items-center space-x-2">
                <Image 
                  src="/shoe-icon.svg" 
                  alt="ShoeStore Logo" 
                  width={30} 
                  height={30}
                  className="transform group-hover:rotate-12 transition-transform duration-300"
                  priority
                />
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  ShoeStore
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            <form onSubmit={handleSearch} className="relative group mr-4">
              <div className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search shoes..."
                  className="w-[260px] lg:w-[300px] h-[38px] px-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
                    transition-all duration-300 bg-gray-50/50 group-hover:bg-white text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 text-gray-400 hover:text-blue-600 transition-colors duration-300"
                  aria-label="Search"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <div className="flex items-center h-[60px] border-l border-gray-100">
              <div className="relative h-full">
                <button
                  onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                  className="text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 flex items-center space-x-1 group text-sm h-full px-4"
                >
                  <div className="flex items-center space-x-1">
                    <span>Brands</span>
                    <svg 
                      className={`w-4 h-4 transform transition-transform duration-300 ${
                        isBrandsOpen ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {/* Brands Dropdown */}
                <div className={`absolute top-[60px] right-0 py-1 w-44 bg-white rounded-lg shadow-lg transition-all duration-300 transform origin-top border border-gray-100 ${
                  isBrandsOpen 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}>
                  <Link
                    href="/brands/nike"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50/50 hover:text-blue-600 transition-all duration-300"
                  >
                    <div>Nike</div>
                  </Link>
                  <Link
                    href="/brands/adidas"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50/50 hover:text-blue-600 transition-all duration-300"
                  >
                    <div>Adidas</div>
                  </Link>
                  <Link
                    href="/brands/puma"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50/50 hover:text-blue-600 transition-all duration-300"
                  >
                    <div>Puma</div>
                  </Link>
                  <Link
                    href="/brands"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50/50 hover:text-blue-600 transition-all duration-300 border-t border-gray-100"
                  >
                    <div>View All Brands</div>
                  </Link>
                </div>
              </div>
              <Link 
                href="/orders" 
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 flex items-center space-x-1 text-sm h-full px-4 border-l border-gray-100"
              >
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Orders</span>
                </div>
              </Link>
              <Link 
                href="/login"
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 flex items-center space-x-1 text-sm h-full px-4 border-l border-gray-100"
              >
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Login</span>
                </div>
              </Link>
              <Link 
                href="/checkout" 
                className="relative text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 group h-full px-4 flex items-center border-l border-gray-100"
              >
                <div className="relative">
                  <svg
                    className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {items.length > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center
                      transform scale-100 group-hover:scale-110 transition-transform duration-300">
                      {items.length}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <Link href="/login" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <div>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </Link>
            <Link href="/checkout" className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <div className="relative">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </div>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <form onSubmit={handleSearch} className="p-2">
            <div className="flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search shoes..."
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="ml-2 p-2 text-gray-400 hover:text-blue-600"
                aria-label="Search"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>
          <Link
            href="/brands"
            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
          >
            <div className="flex items-center">
              <span>Brands</span>
            </div>
          </Link>
          <Link
            href="/orders"
            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
          >
            <div className="flex items-center">
              <span>Orders</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}