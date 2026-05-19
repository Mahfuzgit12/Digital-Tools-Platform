import { Check } from "lucide-react";

const TAG_STYLES = {
  bestseller: "bg-yellow-100 text-yellow-700",
  popular:    "bg-sky-100 text-sky-700",
  new:        "bg-emerald-100 text-emerald-700",
};

export default function ProductCard({ product, onAdd, inCart, justAdded }) {
  const tagClass = TAG_STYLES[product.tagType] || "bg-gray-100 text-gray-600";

  return (
    <div className="product-card bg-white border border-gray-100 rounded-2xl p-6 flex flex-col shadow-sm relative">
      {/* Tag badge */}
      <span
        className={`absolute top-4 right-4 text-[11px] font-bold px-2.5 py-1 rounded-full ${tagClass}`}
      >
        {product.tag}
      </span>

      {/* Icon */}
      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-4xl mb-4 flex-shrink-0">
        {product.icon}
      </div>

      {/* Name */}
      <h3 className="font-bold text-gray-900 text-[17px] mb-2 pr-16 leading-snug">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
        {product.description}
      </p>

      {/* Price */}
      <div className="mb-4">
        <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
        <span className="text-gray-400 text-sm ml-0.5">
          /{product.period === "monthly" ? "mo" : "one-time"}
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-5">
        {product.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-4 h-4 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
              <Check size={10} className="text-violet-600" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* Buy button */}
      <button
        onClick={() => onAdd(product)}
        disabled={inCart}
        className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
          justAdded
            ? "btn-added bg-emerald-500 text-white shadow-md shadow-emerald-200"
            : inCart
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-violet-600 to-violet-500 text-white hover:from-violet-700 hover:to-violet-600 shadow-md shadow-violet-200 hover:shadow-violet-300 hover:-translate-y-0.5 active:translate-y-0"
        }`}
      >
        {justAdded ? "✓ Added to Cart!" : inCart ? "Already in Cart" : "Buy Now"}
      </button>
    </div>
  );
}
