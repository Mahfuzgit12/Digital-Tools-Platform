const stats = [
  { value: "50K+", label: "Happy Customers", icon: "👥" },
  { value: "200+", label: "Premium Tools",   icon: "🛠️" },
  { value: "4.9",  label: "Average Rating",  icon: "⭐" },
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-br from-violet-50 to-indigo-50 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-6 sm:gap-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center bg-white/70 backdrop-blur-sm rounded-2xl py-7 px-4 border border-white shadow-sm"
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                {s.value}
              </div>
              <div className="text-gray-500 text-sm font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
