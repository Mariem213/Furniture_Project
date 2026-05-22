# 🛋️ FURNICS — Modern Furniture Shop

> A fully client-side, Progressive Web App (PWA) for browsing, filtering, and purchasing modern furniture online.

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Target Users](#target-users)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [UI Screens](#ui-screens)
- [Project Structure](#project-structure)
- [Data Storage & Schema](#data-storage--schema)
- [Installation & Setup](#installation--setup)
- [Deployment](#deployment)
- [Author](#author)

---

## About the Project

**FURNICS** is a modern, responsive e-commerce web application for a furniture store. It allows customers to browse a curated catalog of furniture items, filter and search by category or price, view individual product details, manage a shopping cart, and complete an order via a checkout flow.

The project is built entirely with vanilla HTML, CSS, and JavaScript — no back-end server required. Data persistence is handled through the browser's **localStorage**, making it straightforward to deploy on any static hosting platform. It is also configured as a **Progressive Web App (PWA)**, meaning users can install it on their device and use it offline.

---

## Target Users

| User Type | Description |
|-----------|-------------|
| **Shoppers** | Individuals looking to browse and purchase furniture items online |
| **Registered Customers** | Users who create an account to save preferences and complete purchases |
| **Mobile Users** | Users accessing the store from a phone or tablet (fully responsive + installable as PWA) |
| **Offline Users** | Users with limited connectivity who can still browse cached content |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 + Bootstrap 5.3 |
| Icons | Bootstrap Icons 1.13 |
| Scripting | Vanilla JavaScript (ES6+) |
| Offline Support | Service Worker API (PWA) |
| Data Persistence | Browser `localStorage` |
| Animations | Jarallax (parallax effects) |
| Package / CDN | jsDelivr CDN |

---

## Features

### 🛍️ Shopping
- Browse all products in a responsive grid layout
- Filter products by **category** (Table, Bedroom, Chair, Sofa)
- Filter products by **max price** using a range slider
- **Search** products by name in real time
- **Sort** products by price (Low → High / High → Low)
- **Pagination** for the product listing page
- View a **single product detail** page with full description and add-to-cart

### 🛒 Cart
- Add products to cart from the shop or product detail page
- View all cart items with product image, name, price, quantity, and line total
- Update quantities and remove items
- Live **subtotal and total** calculation
- Cart item count badge visible in the navbar across all pages (via `localStorage`)

### 💳 Checkout
- Billing information form (name, email, phone, address, city, zip)
- Order summary pulled dynamically from cart
- Payment method selection (Credit/Debit Card, PayPal, Cash on Delivery)
- Place Order button

### 👤 Authentication
- **Sign Up** with username, email, password, confirm password, phone, and optional profile image
- **Sign In** with email and password
- Password visibility toggle on all password fields
- Client-side validation with inline error messages
- User session stored in `localStorage`
- Dynamic navbar: shows user avatar when logged in, logout option in dropdown

### 📱 PWA
- Installable on desktop and mobile (Add to Home Screen)
- Offline access to core pages via Service Worker cache
- Custom theme color and splash screen defined in `manifest.json`

### UX / General
- Page loader animation on the homepage
- Sticky header with scroll behavior
- Off-canvas mobile navigation menu
- Search modal available on all pages
- Scroll-to-top button
- Testimonials carousel
- Contact form section
- Newsletter subscription form in footer

---

## UI Screens

| Screen | File | Description |
|--------|------|-------------|
| **Home** | `index.html` | Hero section, featured products, about us, testimonials, contact form |
| **Shop** | `shop.html` | Full product catalog with sidebar filters, search, sort, and pagination |
| **Single Product** | `single_product.html` | Detailed view of one product with add-to-cart |
| **Cart** | `cart.html` | Cart item table with quantity controls, totals, and checkout CTA |
| **Checkout** | `checkout.html` | Billing form + order summary + payment method selection |
| **Login / Register** | `login_rigster.html` | Split-panel animated sign-in and sign-up forms |

---

## Project Structure

```
FURNICS/
│
├── index.html               # Homepage
├── shop.html                # Product listing page
├── single_product.html      # Single product detail page
├── cart.html                # Shopping cart
├── checkout.html            # Checkout page
├── login_rigster.html       # Login & Register page
│
├── manifest.json            # PWA manifest
├── service-worker.js        # Service worker for offline caching
│
├── CSS/
│   ├── style.css            # Global styles (shared across all pages)
│   ├── shop.css             # Shop & product page styles
│   ├── cart.css             # Cart & checkout styles
│   └── login_rigster.css    # Auth page styles
│
├── JS/
│   ├── main.js              # Shared logic (navbar, scroll, user session)
│   ├── shop.js              # Product rendering, filtering, sorting, pagination
│   ├── cart.js              # Cart read/write, totals, checkout order summary
│   └── login_rigster.js     # Sign-up / sign-in validation and localStorage auth
│
└── images/
    ├── main-logo.png
    ├── hero-bg.png
    ├── icon.png
    ├── favicon.ico
    └── All Products/        # Product images used by shop.js
```

---

## Data Storage & Schema

Since FURNICS is a fully static app, all data is stored in the browser's **`localStorage`**. Below are the key storage schemas used across the JavaScript files.

---

### `users` — Registered Accounts

Stored as a JSON array under the key `"users"`.

```json
[
  {
    "username": "string",
    "email": "string",
    "password": "string",
    "phone": "string",
    "image": "base64 string | null"
  }
]
```

---

### `currentUser` — Active Session

Stored as a JSON object under the key `"currentUser"`. Set on login, cleared on logout.

```json
{
  "username": "string",
  "email": "string",
  "phone": "string",
  "image": "base64 string | null"
}
```

---

### `cart` — Shopping Cart

Stored as a JSON array under the key `"cart"`.

```json
[
  {
    "id": "number | string",
    "name": "string",
    "price": "number",
    "image": "string (image path)",
    "quantity": "number"
  }
]
```

> Cart totals (subtotal, total) are computed dynamically in JavaScript from this array — they are not stored.

---

### Products — In-Memory (defined in `shop.js`)

Products are defined as a JavaScript array inside `shop.js` and are never persisted. Each product object follows this shape:

```json
{
  "id": "number",
  "name": "string",
  "price": "number",
  "category": "table | bedroom | chair | sofa",
  "image": "string (path to image)",
  "description": "string",
  "rating": "number (1–5)"
}
```

> To upgrade to a back-end database, replace the in-memory products array with `fetch()` calls to a REST API (e.g., Node.js + Express + MongoDB, or a headless CMS like Sanity or Strapi).

---

## Installation & Setup

FURNICS requires no build tools or package manager — just a browser and a local server to avoid CORS issues with the Service Worker.

### Option 1 — VS Code Live Server (Recommended for development)

1. **Clone the repository**
   ```bash
   git clone [https://github.com/your-username/furnics.git](https://github.com/Mariem213/Furniture_Project.git)
   cd furnics
   ```

2. **Open in VS Code**
   ```bash
   code .
   ```

3. **Install the Live Server extension** (if not already installed):
   - Open Extensions (`Ctrl+Shift+X`)
   - Search for **"Live Server"** by Ritwick Dey
   - Click Install

4. **Start the server**
   - Right-click `index.html` in the file explorer
   - Select **"Open with Live Server"**
   - The app will open at `http://127.0.0.1:5500`

---

### Option 2 — Node.js `serve`

```bash
npm install -g serve
cd furnics
serve .
```
Then open the URL shown in the terminal.

---

> ⚠️ **Important:** Do not open `index.html` directly as a `file://` path — the Service Worker will not register and some scripts may not load correctly. Always use a local HTTP server.

---

## Deployment

FURNICS can be deployed to any **static hosting** platform with zero configuration.

### Recommended Platforms

| Platform | Steps |
|----------|-------|
| **GitHub Pages** | Push to a GitHub repo → Settings → Pages → Deploy from `main` branch |
| **Vercel** | `npx vercel` in the project directory (no framework needed) |
| **Firebase Hosting** | `firebase init hosting` then `firebase deploy` |

### GitHub Pages Quick Deploy

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [https://github.com/your-username/furnics.git](https://github.com/Mariem213/Furniture_Project.git)
git push -u origin main
```

Then in your GitHub repository: **Settings → Pages → Source: Deploy from branch → `main` / `root`**

> 🌐 **Live URL**: *([Furniture_Project](https://mariem213.github.io/Furniture_Project/))*

---

## Author

**Mariem Elgendy**
- 📧 mariem.elgendy213@gmail.com

---

<div align="center">
  <p>© 2025 <strong>FURNICS.</strong> All Rights Reserved.</p>
</div>
