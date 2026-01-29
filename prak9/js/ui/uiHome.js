function renderHome(container) {
  container.innerHTML = `
    <h2>Produk Terbaru</h2>
    <div class="products">
      ${state.products.map(p => `
        <div class="product">
          <h3>${p.name}</h3>
          <p class="price">Rp ${p.price.toLocaleString()}</p>
          <button class="primary" onclick="addToCart(${p.id})">
            Tambah ke Cart
          </button>
        </div>
      `).join("")}
    </div>
  `;
}

function addToCart(id) {
  const item = state.cart.find(i => i.id === id);

  if (item) {
    item.qty++;
  } else {
    const product = state.products.find(p => p.id === id);
    state.cart.push({ ...product, qty: 1 });
  }

  updateHeader();
}
