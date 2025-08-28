/* ------------------------------------------------------------------ */
/* ========================== Add To Cart =========================== */
/* ------------------------------------------------------------------ */

function parsePrice(raw) {
  if (raw == null) return 0;
  return Number(String(raw).replace(/[^0-9.-]+/g, '')) || 0;
}

function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.getElementById("cartItems");
  const subtotalEl = document.querySelector(".cart-subtotal");
  const totalEl = document.querySelector(".cart-total");

  if (!cartItemsContainer) return;

  cartItemsContainer.innerHTML = "";
  let subtotal = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <tr>
        <td colspan="6" class="text-center text-muted">Your cart is empty</td>
      </tr>
    `;
  } else {
    cart.forEach((item, i) => {
      const price = parsePrice(item.priceNumber ?? item.price ?? item.currentPrice);
      const quantity = Number(item.quantity || 0);
      const total = price * quantity;
      subtotal += total;

      const row = `
        <tr data-index="${i}">
          <td class="product-image">
            <img src="${item.img}" alt="${item.name}" class="img-fluid" style="max-width:100px;">
          </td>
          <td class="product-name">
            <h2 class="h5 text-black">${item.name}</h2>
          </td>
          <td>$${price.toFixed(2)}</td>
          <td class="num">
            <div class="input-group mb-3 quantity-container">
              <div class="input-group-prepend">
                <button class="iconbtn btn-outline-black decrease" type="button">&minus;</button>
              </div>
              <input type="text" class="form-control text-center quantity-amount" value="${quantity}" readonly>
              <div class="input-group-append">
                <button class="iconbtn btn-outline-black increase" type="button">&plus;</button>
              </div>
            </div>
          </td>
          <td>$${total.toFixed(2)}</td>
          <td class="removeItem">
            <button class="iconbtn btn-black btn-sm remove-btn">
              <i class="bi bi-x-circle-fill"></i>
            </button>
          </td>
        </tr>
      `;
      cartItemsContainer.insertAdjacentHTML("beforeend", row);
    });
  }

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${subtotal.toFixed(2)}`;
}

function updateQuantity(index, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  index = Number(index);
  if (!cart[index]) return;
  cart[index].quantity = Math.max(0, Number(cart[index].quantity || 0) + change);
  if (cart[index].quantity === 0) cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  index = Number(index);
  if (!cart[index]) return;
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

document.addEventListener("click", function (e) {
  const row = e.target.closest("tr[data-index]");
  if (!row) return;
  const index = row.getAttribute("data-index");

  if (e.target.closest(".increase")) {
    updateQuantity(index, 1);
  } else if (e.target.closest(".decrease")) {
    updateQuantity(index, -1);
  } else if (e.target.closest(".remove-btn")) {
    removeItem(index);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("cart.html")) {
    renderCart();
  }
});


/* ------------------------------------------------------------------ */
/* ========================== Count of Cart ========================= */
/* ------------------------------------------------------------------ */

(function () {
  const CART_KEY = "cart";

  function parsePrice(raw) {
    if (raw == null) return 0;
    return Number(String(raw).replace(/[^0-9.-]+/g, "")) || 0;
  }

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  function updateCartBadge() {
    const badge = document.getElementById("cartCount") || document.getElementById("cart-count") || document.querySelector(".cart-count");
    if (!badge) return;
    const cart = getCart();
    const totalQty = cart.reduce((s, it) => s + (Number(it.quantity) || 0), 0);
    badge.textContent = totalQty;
  }

  function addToCartObject(product) {
    const cart = getCart();
    const idx = cart.findIndex(p => Number(p.id) === Number(product.id));
    if (idx > -1) {
      cart[idx].quantity = (Number(cart[idx].quantity) || 0) + (Number(product.quantity) || 1);
    } else {
      cart.push({
        id: product.id,
        name: product.name || product.title || "",
        img: product.img || product.image || product.src || "",
        priceNumber: product.priceNumber != null ? Number(product.priceNumber) : parsePrice(product.currentPrice || product.price),
        currentPrice: product.currentPrice || product.price || (`$${(product.priceNumber || 0).toFixed ? product.priceNumber.toFixed(2) : product.priceNumber}`),
        quantity: Number(product.quantity) || 1
      });
    }
    saveCart(cart);
    updateCartBadge();
  }

  function addToCartFromButton(el) {
    const product = {
      id: el.dataset.id || el.getAttribute("data-id"),
      name: el.dataset.name || el.getAttribute("data-name"),
      img: el.dataset.img || el.getAttribute("data-img"),
      currentPrice: el.dataset.price || el.getAttribute("data-price"),
      quantity: el.dataset.qty || el.getAttribute("data-qty") || 1
    };
    addToCartObject(product);
  }

  document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();

    document.body.addEventListener("click", function (e) {
      const btn = e.target.closest(".add-to-cart");
      if (!btn) return;
      e.preventDefault();

      addToCartFromButton(btn);
    });
  });

  window.addEventListener("storage", function (e) {
    if (e.key === CART_KEY) {
      updateCartBadge();
    }
  });
})();

