'use client';

// TODO: Production implementation
// This is a placeholder for the curriculum section component.
// Should display course modules in a timeline format.

export default function CurriculumSection() {
  return (
    <section className="w-full py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-white text-center mb-12">Curriculum Section Placeholder</h2>
        <div className="space-y-6">
          {[1, 2, 3, 4].map((week) => (
            <div key={week} className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-blue mb-2">Week {week}</h3>
              <p className="text-gray-300">Module content placeholder</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
