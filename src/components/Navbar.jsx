import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar({ cartCount, onCartClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-md border-b border-gray-100" : "shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-violet-400 flex items-center justify-center shadow-lg shadow-violet-200">
              <span className="text-white font-extrabold text-base">D</span>
            </div>
            <span className="text-gray-900 font-extrabold text-lg tracking-tight">DigiTools</span>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {["Products", "Pricing", "About", "Blog"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-500 hover:text-violet-600 text-sm font-medium transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Cart button */}
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-xl text-gray-500 hover:text-violet-600 hover:bg-violet-50 transition-all duration-200"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-violet-600 text-white text-[11px] font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1 shadow-md shadow-violet-300">
                  {cartCount}
                </span>
              )}
            </button>

            {/* CTA */}
            <button className="hidden sm:block bg-gradient-to-r from-violet-600 to-violet-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:from-violet-700 hover:to-violet-600 transition-all duration-200 shadow-md shadow-violet-200 hover:shadow-violet-300 hover:-translate-y-0.5">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
