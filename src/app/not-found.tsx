import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <p className="text-xl text-gray-600">Page Not Found</p>
      <p className="text-gray-500 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <div className="w-fit">
        <Link href="/" className="block">
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  );
} 