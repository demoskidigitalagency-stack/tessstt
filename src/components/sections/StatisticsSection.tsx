'use client';

// TODO: Production implementation
// This is a placeholder for the statistics section component.
// Should display animated counters for key metrics.

export default function StatisticsSection() {
  return (
    <section className="w-full py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-brand-white mb-12">Statistics Section Placeholder</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-brand-blue mb-2">0</div>
              <p className="text-gray-300">Metric {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
