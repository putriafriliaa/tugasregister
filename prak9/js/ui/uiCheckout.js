function renderCheckout(container) {
  const total = state.cart.reduce((s, p) => s + p.price, 0);

  container.innerHTML = `
    <h2>Checkout</h2>
    <p>Total: <strong>Rp ${total.toLocaleString()}</strong></p>
    <button class="primary" onclick="finish()">Bayar</button>
  `;
}

function finish() {
  alert("Pembayaran berhasil");
  state.cart = [];
  updateHeader();
  navigate("home");
}
