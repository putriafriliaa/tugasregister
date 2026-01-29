function openCart() {
  renderCartSidebar();
  document.getElementById("cart-sidebar").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function closeCart() {
  document.getElementById("cart-sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

function renderCartSidebar() {
  const sidebar = document.getElementById("cart-sidebar");

  if (!state.user) {
    sidebar.innerHTML = `
      <h3>My Cart</h3>
      <p>Silakan login terlebih dahulu</p>
      <button class="primary" onclick="navigate('login'); closeCart();">
        Login
      </button>
    `;
    return;
  }

  if (state.cart.length === 0) {
    sidebar.innerHTML = `
      <h3>My Cart</h3>
      <p>Cart masih kosong</p>
    `;
    return;
  }

  let total = 0;

  sidebar.innerHTML = `
    <div class="cart-header">
      <h3>My Cart</h3>
      <button class="link" onclick="closeCart()">❌</button>
    </div>

    ${state.cart.map(item => {
      total += item.price * item.qty;
      return `
        <div class="cart-item">
          <div>
            <strong>${item.name}</strong>
            <p>Rp ${item.price.toLocaleString()}</p>
          </div>

          <div class="cart-actions">
            <button onclick="decreaseQty(${item.id})">−</button>
            <span>${item.qty}</span>
            <button onclick="increaseQty(${item.id})">+</button>
            <button onclick="removeItem(${item.id})">🗑️</button>
          </div>
        </div>
      `;
    }).join("")}

    <div class="cart-footer">
      <p><strong>Total:</strong> Rp ${total.toLocaleString()}</p>
      <button class="primary" onclick="navigate('checkout'); closeCart();">
        Checkout
      </button>
    </div>
  `;
}
function increaseQty(id) {
  const item = state.cart.find(i => i.id === id);
  item.qty++;
  updateHeader();
  renderCartSidebar();
}

function decreaseQty(id) {
  const item = state.cart.find(i => i.id === id);
  if (item.qty > 1) {
    item.qty--;
  }
  updateHeader();
  renderCartSidebar();
}

function removeItem(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  updateHeader();
  renderCartSidebar();
}
