import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Brand Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the brand you're looking for. It may have been removed or doesn't exist.
        </p>
        <Link
          href="/brands"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View All Brands
        </Link>
      </div>
    </div>
  );
} 