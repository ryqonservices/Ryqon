import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <h2 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500 mb-6 drop-shadow-sm">404</h2>
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Page Not Found</h2>
      <p className="text-lg text-slate-600 dark:text-slate-300 max-w-md mb-8">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="btn-primary"
      >
        <Home className="mr-2 h-5 w-5" />
        Back to Home
      </Link>
    </div>
  );
}
