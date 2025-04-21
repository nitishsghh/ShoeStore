import './globals.css';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import { CartProvider } from '@/context/CartContext';
import { OrderProvider } from '@/context/OrderContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'ShoeStore - Your Premium Shoe Destination',
  description: 'Find the perfect pair of shoes for any occasion.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <CartProvider>
          <OrderProvider>
            <Suspense fallback={
              <div className="h-[60px] w-full bg-white border-b border-gray-100" />
            }>
              <Navbar />
            </Suspense>
            <main className="pt-16">{children}</main>
          </OrderProvider>
        </CartProvider>
      </body>
    </html>
  );
}
