import { Play, Star } from "lucide-react";

export default function Hero({ onExplore }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left */}
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-7">
            <span className="pulse-dot w-2 h-2 bg-violet-500 rounded-full inline-block" />
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl sm:text-5xl xl:text-[56px] font-extrabold text-gray-900 leading-[1.12] tracking-tight mb-5">
            Supercharge Your{" "}
            <span className="bg-gradient-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent">
              Digital Workflow
            </span>
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-9 max-w-[440px]">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onExplore}
              className="bg-gradient-to-r from-violet-600 to-violet-500 text-white font-semibold px-7 py-3.5 rounded-full text-base hover:from-violet-700 hover:to-violet-600 transition-all duration-200 shadow-lg shadow-violet-200 hover:shadow-violet-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Products
            </button>
            <button className="flex items-center gap-2 text-gray-700 border border-gray-200 font-semibold px-6 py-3.5 rounded-full text-base hover:border-violet-400 hover:text-violet-600 transition-all duration-200">
              <Play size={13} fill="currentColor" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right – decorative card */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="bg-gradient-to-br from-violet-50 via-violet-100 to-indigo-100 rounded-3xl h-80 flex items-center justify-center overflow-hidden relative">
              {/* BG circles */}
              <div className="absolute top-[-40px] right-[-40px] w-44 h-44 bg-violet-200/40 rounded-full" />
              <div className="absolute bottom-[-30px] left-[-20px] w-32 h-32 bg-indigo-200/30 rounded-full" />

              {/* Center */}
              <div className="text-center z-10">
                <div className="text-7xl mb-3">⚡</div>
                <p className="text-violet-700 font-bold text-base tracking-tight">Premium Digital Tools</p>
                <p className="text-violet-400 text-sm font-medium mt-1">All-in-one platform</p>
              </div>

              {/* Floating badges */}
              <div className="absolute top-5 left-5 bg-white rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2 text-xs font-semibold text-gray-700">
                🚀 50K+ Users
              </div>
              <div className="absolute bottom-5 right-5 bg-white rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2 text-xs font-semibold text-gray-700">
                <Star size={12} fill="#FBBF24" color="#FBBF24" />
                4.9 Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
