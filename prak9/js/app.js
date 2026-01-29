const app = document.getElementById("app");

function navigate(page) {
  if (page === "home") renderHome(app);
  if (page === "login") renderLogin(app);
  if (page === "logout") logout(app);
  if (page === "register") renderRegister(app);
  if (page === "cart") renderCart(app);
  if (page === "checkout") renderCheckout(app);
}

navigate("home");
updateHeader();
