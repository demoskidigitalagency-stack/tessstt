'use client';

// TODO: Production implementation
// This is a placeholder for the newsletter section component.
// Should display newsletter signup form.

export default function NewsletterSection() {
  return (
    <section className="w-full py-20 bg-brand-navy">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-brand-white mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-300 mb-8">Get digital marketing tips and updates.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-brand-white placeholder-gray-500 focus:outline-none focus:border-brand-blue"
          />
          <button className="px-8 py-3 bg-brand-blue text-brand-black font-bold rounded-lg hover:opacity-90 transition-opacity">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
