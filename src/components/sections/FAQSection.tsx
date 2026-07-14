'use client';

// TODO: Production implementation
// This is a placeholder for the FAQ section component.
// Should display frequently asked questions in accordion format.

export default function FAQSection() {
  return (
    <section className="w-full py-20 bg-brand-navy">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-white text-center mb-12">FAQ Section Placeholder</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="glass p-6 rounded-lg">
              <p className="text-brand-white font-semibold">FAQ Question {i}</p>
              <p className="text-gray-300 mt-2">Answer placeholder</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
