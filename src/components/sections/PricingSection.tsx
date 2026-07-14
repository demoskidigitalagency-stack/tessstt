'use client';

// TODO: Production implementation
// This is a placeholder for the pricing section component.
// Should display course pricing and enrollment options.

export default function PricingSection() {
  return (
    <section className="w-full py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-brand-white mb-12">Pricing Section Placeholder</h2>
        <div className="glass p-8 rounded-lg max-w-2xl mx-auto">
          <p className="text-3xl font-bold text-brand-blue mb-4">₦35,000</p>
          <button className="bg-brand-blue text-brand-black font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
}
