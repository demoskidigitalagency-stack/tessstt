import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-brand-blue mb-4">404</h1>
        <h2 className="text-3xl font-bold text-brand-white mb-4">Page not found</h2>
        <p className="text-gray-300 mb-8">
          Sorry, we could not find the page you were looking for.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-brand-blue text-brand-black font-bold rounded-lg hover:opacity-90 transition-opacity"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
