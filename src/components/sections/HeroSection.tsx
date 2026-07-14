'use client';

// TODO: Production implementation
// This is a placeholder for the hero section component.
// Should include main headline, subheadline, CTA buttons, and hero image.

export default function HeroSection() {
  return (
    <section className="w-full min-h-[600px] bg-hero-gradient py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-white mb-4">
          Hero Section Placeholder
        </h1>
        <p className="text-lg text-gray-300 mb-8">This section will contain the main headline and CTA.</p>
      </div>
    </section>
  );
}
