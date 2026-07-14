'use client';

// TODO: Production implementation
// This is a placeholder for the footer component.
// Should display company info, links, and contact information.

export default function Footer() {
  return (
    <footer className="w-full bg-brand-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-brand-white font-bold mb-4">Demoski Digital Agency</h3>
            <p className="text-gray-400 text-sm">Premium digital marketing training.</p>
          </div>
          {['Product', 'Company', 'Resources'].map((col) => (
            <div key={col}>
              <h4 className="text-brand-white font-bold mb-4">{col}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-brand-blue transition">Link 1</a></li>
                <li><a href="#" className="hover:text-brand-blue transition">Link 2</a></li>
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Demoski Digital Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
