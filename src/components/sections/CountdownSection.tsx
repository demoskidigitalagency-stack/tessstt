'use client';

// TODO: Production implementation
// This is a placeholder for the countdown section component.
// Should display countdown timer until registration closes.

export default function CountdownSection() {
  return (
    <section className="w-full py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-brand-white mb-8">Registration Closes In</h2>
        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
          {['Days', 'Hours', 'Mins', 'Secs'].map((label) => (
            <div key={label} className="glass p-4 rounded-lg">
              <div className="text-3xl font-bold text-brand-blue">00</div>
              <p className="text-sm text-gray-300 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
