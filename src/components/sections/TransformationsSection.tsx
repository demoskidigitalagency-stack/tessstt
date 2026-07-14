'use client';

// TODO: Production implementation
// This is a placeholder for the transformations section component.
// Should display student testimonials and success stories.

export default function TransformationsSection() {
  return (
    <section className="w-full py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-white text-center mb-12">Student Transformations Placeholder</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="glass p-6 rounded-lg">
              <p className="text-gray-300">Testimonial {i} - Dynamic content from Supabase</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
