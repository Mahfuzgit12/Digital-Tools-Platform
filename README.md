# 🛒 DigiTools — Premium Digital Tools Marketplace

> A modern, fully responsive e-commerce platform for premium digital products built with React.js, Tailwind CSS, and DaisyUI.

---

## 📖 Description

DigiTools is a sleek digital product marketplace where users can browse a curated catalog of premium tools — from AI writing assistants to design template packs — add them to a shopping cart, and proceed to checkout. The project is built with a component-driven architecture and features smooth animations, toast notifications, and full responsive support.

---

## ⚙️ Technologies Used

| Technology | Purpose |
|---|---|
| **React.js** | Component-based UI framework |
| **Vite** | Blazing-fast dev server & bundler |
| **Tailwind CSS v4** | Utility-first styling |
| **DaisyUI** | Prebuilt accessible UI components |
| **React-Toastify** | Toast notification system |
| **Lucide React** | Clean SVG icon library |
| **JavaScript ES6+** | Modern JS features |
| **JSON** | Product data management |

---

## ✨ Features

### 🛒 Full Cart System
Add products to cart, remove individual items, view live total, and clear everything with a single "Proceed to Checkout" action. The navbar badge updates in real time to reflect cart count.

### 🔔 React-Toastify Notifications
Every cart action (add, remove, checkout) triggers a styled toast notification — success, error, and info variants — providing clear feedback to the user.

### 📱 Fully Responsive Design
The layout adapts seamlessly across mobile, tablet, and desktop screens. Product cards switch from a single column on mobile to a 3-column grid on desktop using Tailwind's responsive utilities.

---

## 📂 Project Structure

```
digitools/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Cart.jsx
│   │   ├── Steps.jsx
│   │   ├── Pricing.jsx
│   │   ├── CTABanner.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── products.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/digitools.git

cd digitools
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build for Production

```bash
npm run build
npm run preview
```

---

## 📄 License

MIT — feel free to use, modify, and distribute.
