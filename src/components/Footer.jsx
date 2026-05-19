const FOOTER_LINKS = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API", "Support", "Community"],
  },
];

const SOCIALS = [
  { label: "𝕏",  title: "Twitter"  },
  { label: "in", title: "LinkedIn" },
  { label: "gh", title: "GitHub"   },
  { label: "dc", title: "Discord"  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-violet-400 flex items-center justify-center">
                <span className="text-white font-extrabold text-sm">D</span>
              </div>
              <span className="text-white font-extrabold text-lg">DigiTools</span>
            </div>
            <p className="text-sm leading-relaxed max-w-[200px] mb-5">
              Your one-stop platform for premium digital tools and productivity software.
            </p>
            <div className="flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.title}
                  href="#"
                  title={s.title}
                  className="w-8 h-8 bg-gray-800 hover:bg-violet-600 rounded-lg flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-all duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs">© 2025 DigiTools. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a key={l} href="#" className="text-xs hover:text-white transition-colors duration-200">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
