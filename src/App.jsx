import { useCallback, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import Stats      from "./components/Stats";
import ProductCard from "./components/ProductCard";
import Cart       from "./components/Cart";
import Steps      from "./components/Steps";
import Pricing    from "./components/Pricing";
import CTABanner  from "./components/CTABanner";
import Footer     from "./components/Footer";
import products   from "./data/products.json";

export default function App() {
  const [cart, setCart]         = useState([]);
  const [activeTab, setActiveTab] = useState("products");
  const [justAdded, setJustAdded] = useState(new Set());

  const sectionRef = useRef(null);

  /* ─── helpers ─── */
  const scrollToSection = () =>
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });

  /* ─── cart actions ─── */
  const addToCart = useCallback(
    (product) => {
      if (cart.find((p) => p.id === product.id)) {
        toast.info(`${product.name} is already in your cart!`, { icon: "🛒" });
        return;
      }
      setCart((prev) => [...prev, product]);

      // "just added" flash for button
      setJustAdded((prev) => new Set([...prev, product.id]));
      setTimeout(() => {
        setJustAdded((prev) => {
          const next = new Set(prev);
          next.delete(product.id);
          return next;
        });
      }, 2200);

      toast.success(`${product.name} added to cart!`, { icon: "🛒" });
    },
    [cart]
  );

  const removeFromCart = useCallback((product) => {
    setCart((prev) => prev.filter((p) => p.id !== product.id));
    toast.error(`${product.name} removed from cart`, { icon: "🗑️" });
  }, []);

  const checkout = useCallback(() => {
    if (cart.length === 0) {
      toast.info("Your cart is empty!", { icon: "🛒" });
      return;
    }
    const count = cart.length;
    setCart([]);
    toast.success(
      `🎉 Order placed! ${count} item${count > 1 ? "s" : ""} purchased successfully.`
    );
  }, [cart]);

  /* ─── nav cart click ─── */
  const handleCartNavClick = () => {
    setActiveTab("cart");
    scrollToSection();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* React-Toastify */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />

      <Navbar cartCount={cart.length} onCartClick={handleCartNavClick} />
      <Hero onExplore={scrollToSection} />
      <Stats />

      {/* ─── Products / Cart toggle section ─── */}
      <section ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>

          {/* Toggle pill */}
          <div className="inline-flex bg-gray-100 rounded-full p-1 mt-7 gap-1">
            {["products", "cart"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-250 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-md shadow-violet-200"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab === "products" ? "Products" : `Cart (${cart.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        {activeTab === "products" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={addToCart}
                inCart={!!cart.find((p) => p.id === product.id)}
                justAdded={justAdded.has(product.id)}
              />
            ))}
          </div>
        )}

        {/* Cart view */}
        {activeTab === "cart" && (
          <Cart
            cart={cart}
            onRemove={removeFromCart}
            onCheckout={checkout}
            onBrowse={() => setActiveTab("products")}
          />
        )}
      </section>

      <Steps />
      <Pricing />
      <CTABanner />
      <Footer />
    </div>
  );
}
