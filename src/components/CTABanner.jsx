export default function CTABanner() {
  return (
    <section className="relative bg-gradient-to-br from-violet-800 via-violet-600 to-violet-500 py-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-60px] right-[-60px] w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-40px] w-72 h-72 bg-white/5 rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-violet-200 text-base mb-10 max-w-md mx-auto">
          Join 50,000+ professionals who trust DigiTools every day.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-violet-600 font-bold px-7 py-3.5 rounded-full text-sm hover:bg-violet-50 transition-colors duration-200 shadow-lg">
            Explore Products
          </button>
          <button className="border-2 border-white/60 text-white font-bold px-7 py-3.5 rounded-full text-sm hover:border-white transition-colors duration-200">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
