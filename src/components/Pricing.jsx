import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    sub: "Perfect for getting started",
    price: 0,
    cta: "Get Started Free",
    popular: false,
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
  },
  {
    name: "Pro",
    sub: "Best for professionals",
    price: 29,
    cta: "Start Pro Trial",
    popular: true,
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
  },
  {
    name: "Enterprise",
    sub: "For teams and businesses",
    price: 99,
    cta: "Contact Sales",
    popular: false,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-base">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 relative flex flex-col transition-transform duration-300 ${
                plan.popular
                  ? "bg-gradient-to-br from-violet-600 to-violet-500 text-white shadow-2xl shadow-violet-300 scale-105"
                  : "bg-white border border-gray-200 shadow-sm text-gray-900"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-md">
                  ✨ Most Popular
                </div>
              )}

              <h3
                className={`text-xl font-bold mb-1 ${
                  plan.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-5 ${
                  plan.popular ? "text-violet-200" : "text-gray-400"
                }`}
              >
                {plan.sub}
              </p>

              <div className="mb-6">
                <span
                  className={`text-5xl font-extrabold tracking-tight ${
                    plan.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  ${plan.price}
                </span>
                <span
                  className={`text-sm ml-1 ${
                    plan.popular ? "text-violet-200" : "text-gray-400"
                  }`}
                >
                  /month
                </span>
              </div>

              <ul className="space-y-3 mb-7 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular ? "bg-white/20" : "bg-violet-100"
                      }`}
                    >
                      <Check
                        size={11}
                        strokeWidth={3}
                        className={plan.popular ? "text-white" : "text-violet-600"}
                      />
                    </span>
                    <span className={plan.popular ? "text-violet-100" : "text-gray-600"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                  plan.popular
                    ? "bg-white text-violet-600 hover:bg-violet-50"
                    : "border-2 border-violet-600 text-violet-600 hover:bg-violet-50"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
