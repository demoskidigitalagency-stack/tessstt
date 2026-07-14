'use client';

// TODO: Production implementation
// This is a placeholder for the career opportunities section component.
// Should display various career paths after completing the course.

export default function CareerSection() {
  return (
    <section className="w-full py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-white text-center mb-12">Career Opportunities Placeholder</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7].map((career) => (
            <div key={career} className="glass p-6 rounded-lg text-center">
              <p className="text-brand-white font-semibold">Career Path {career}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
