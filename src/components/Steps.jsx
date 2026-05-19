const STEPS = [
  {
    num: "01",
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    icon: "👤",
  },
  {
    num: "02",
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    icon: "🛍️",
  },
  {
    num: "03",
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
    icon: "🚀",
  },
];

export default function Steps() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Get Started in 3 Steps
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-3 gap-10">
          {STEPS.map((step, i) => (
            <div key={step.num} className="relative text-center">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden sm:block absolute top-7 left-[calc(50%+44px)] right-[calc(-50%+44px)] h-0.5 bg-gradient-to-r from-violet-300 to-violet-100" />
              )}

              {/* Step number */}
              <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-violet-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-violet-200 relative z-10">
                <span className="text-white font-extrabold text-lg">{step.num}</span>
              </div>

              <div className="text-3xl mb-3">{step.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[240px] mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
