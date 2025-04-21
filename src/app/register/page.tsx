"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registration attempt with:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-md w-full mx-auto p-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 p-8 relative overflow-hidden">
          {/* Glass morphism effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0"></div>
          
          {/* Content */}
          <div className="relative">
            {/* Logo and Title */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-md transform rotate-6"></div>
                  <Image
                    src="/shoe-icon.svg"
                    alt="ShoeStore Logo"
                    width={50}
                    height={50}
                    className="relative animate-float"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2 [text-shadow:_0_2px_4px_rgb(0_0_0_/_20%)]">
                Create Account
              </h2>
              <p className="text-white/80">Join our community today</p>
            </div>

            {/* Register Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all outline-none text-sm backdrop-blur-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all outline-none text-sm backdrop-blur-sm"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/90 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all outline-none text-sm backdrop-blur-sm"
                  placeholder="Create a password"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/90 mb-1">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all outline-none text-sm backdrop-blur-sm"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="rounded border-white/20 bg-white/10 text-purple-600 focus:ring-purple-500"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-white/80">
                  I agree to the{' '}
                  <Link href="/terms" className="text-white hover:text-white/90 underline transition-colors">
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link href="/privacy" className="text-white hover:text-white/90 underline transition-colors">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-white text-purple-600 rounded-lg hover:bg-white/90 transition-all font-medium text-sm focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Create Account
              </button>
            </form>

            {/* Login Link */}
            <p className="mt-8 text-center text-sm text-white/80">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-white hover:text-white/90 transition-colors">
                Sign In
              </Link>
            </p>

            {/* Social Register */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-transparent text-white/60">Or register with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center px-4 py-3 border border-white/20 rounded-lg bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#ffffff"
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    />
                  </svg>
                </button>
                <button className="flex items-center justify-center px-4 py-3 border border-white/20 rounded-lg bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#ffffff"
                      d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 