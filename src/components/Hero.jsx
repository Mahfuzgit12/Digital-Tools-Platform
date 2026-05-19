import { Play, Star } from "lucide-react";
import bannerImg from "../assets/banner.png";

export default function Hero({ onExplore }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="pointer-events-none absolute -top-16 left-1/2 w-72 h-72 blur-3xl bg-violet-200/40 rounded-full -translate-x-1/2" />
      <div className="pointer-events-none absolute -bottom-12 right-0 w-64 h-64 blur-3xl bg-indigo-200/30 rounded-full" />
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="animate-fade-in-up max-w-[540px]">
          <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-7">
            <span className="pulse-dot w-2 h-2 bg-violet-500 rounded-full inline-block" />
            New: AI-powered productivity tools
          </div>

          <h1 className="text-4xl sm:text-5xl xl:text-[56px] font-extrabold text-gray-900 leading-[1.12] tracking-tight mb-5">
            Supercharge Your{" "}
            <span className="bg-gradient-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent">
              Digital Workflow
            </span>
          </h1>

          <p className="text-gray-500 text-lg leading-8 mb-8">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Build smarter, move faster, and keep your
            projects progressing with confidence.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onExplore}
              className="bg-gradient-to-r from-violet-600 to-violet-500 text-white font-semibold px-7 py-3.5 rounded-full text-base hover:from-violet-700 hover:to-violet-600 transition-all duration-200 shadow-xl shadow-violet-200/70 hover:shadow-violet-300/60 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-violet-200"
            >
              Explore Products
            </button>
            <button className="flex items-center gap-2 text-gray-700 bg-white border border-gray-200 font-semibold px-6 py-3.5 rounded-full text-base hover:border-violet-400 hover:text-violet-600 hover:bg-violet-50 transition-all duration-200 shadow-sm">
              <Play size={13} fill="currentColor" />
              Watch Demo
            </button>
          </div>

          <div className="mt-6 inline-flex flex-wrap gap-3 text-sm text-gray-600">
            <span className="rounded-full border border-gray-200 px-3 py-1.5 bg-white/80">Fast onboarding</span>
            <span className="rounded-full border border-gray-200 px-3 py-1.5 bg-white/80">AI-ready templates</span>
            <span className="rounded-full border border-gray-200 px-3 py-1.5 bg-white/80">Secure access</span>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-xl mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-50 via-violet-100 to-indigo-100 shadow-[0_40px_80px_rgba(109,40,217,0.12)]" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={bannerImg}
                alt="Hero banner"
                className="w-full h-[24rem] sm:h-[28rem] md:h-[32rem] object-cover"
              />
            </div>
            <div className="absolute top-6 -left-8 w-28 h-28 sm:w-36 sm:h-36 bg-violet-200/40 rounded-full blur-3xl" />
            <div className="absolute bottom-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 bg-indigo-200/30 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
