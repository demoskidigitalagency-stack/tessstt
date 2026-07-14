'use client';

// TODO: Production implementation
// This is a placeholder for the bonuses section component.
// Should display bonus materials included with the course.

export default function BonusesSection() {
  return (
    <section className="w-full py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-white text-center mb-12">Bonuses Section Placeholder</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((bonus) => (
            <div key={bonus} className="glass p-4 rounded-lg text-center">
              <p className="text-brand-white font-semibold">Bonus {bonus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
