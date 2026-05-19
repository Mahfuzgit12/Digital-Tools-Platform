export default function Cart({ cart, onRemove, onCheckout, onBrowse }) {
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-20 max-w-sm mx-auto">
        <div className="animate-bounce-slow text-6xl mb-5">🛒</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h3>
        <p className="text-gray-400 text-sm mb-7">
          Browse our catalog and add some amazing tools!
        </p>
        <button
          onClick={onBrowse}
          className="bg-gradient-to-r from-violet-600 to-violet-500 text-white font-semibold px-7 py-3 rounded-full text-sm hover:from-violet-700 hover:to-violet-600 transition-all duration-200 shadow-md shadow-violet-200"
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
        <h3 className="text-xl font-bold text-gray-900 mb-5">Your Cart</h3>

        <div className="flex flex-col gap-3 mb-5">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-gray-50 rounded-2xl px-4 py-3.5"
            >
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm flex-shrink-0">
                {item.icon}
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm truncate">{item.name}</p>
                <p className="text-violet-600 font-bold text-base">${item.price}</p>
              </div>

              <button
                onClick={() => onRemove(item)}
                className="border border-red-200 text-red-500 hover:bg-red-50 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors duration-150 flex-shrink-0"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center border-t border-gray-100 pt-4 mb-5">
          <span className="text-gray-500 font-medium text-sm">Total:</span>
          <span className="text-3xl font-extrabold text-gray-900 tracking-tight">${total}</span>
        </div>

        <button
          onClick={onCheckout}
          className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-violet-500 text-white font-bold text-sm rounded-2xl hover:from-violet-700 hover:to-violet-600 transition-all duration-200 shadow-lg shadow-violet-200"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
