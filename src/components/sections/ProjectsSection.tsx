'use client';

// TODO: Production implementation
// This is a placeholder for the projects section component.
// Should display projects students will build during the course.

export default function ProjectsSection() {
  return (
    <section className="w-full py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-white text-center mb-12">Projects You'll Build Placeholder</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <div key={project} className="glass p-6 rounded-lg">
              <p className="text-brand-white font-semibold">Project {project}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
