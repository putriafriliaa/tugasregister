function renderLogin(container) {
  container.innerHTML = `
    <div class="card">
      <h2>Login</h2>
      <input id="email" type="email" placeholder="Email">
      <input id="password" type="password" placeholder="Password">
      <button class="primary" onclick="login()">Login</button>
      <p>Email: user@mail.com<br>Password: 123456</p>
      <p> Belum punya akun?
        <a href="#" onclick="navigate('register')">Register</a>
      </p>
    </div>
  `;
}

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  const user = state.users.find(
    u => u.email === email && u.password === pass
  );

  if (user) {
    state.user = user;
    updateHeader();
    navigate("home");
  } else {
    alert("Login gagal");
  }
}

function logout(){
  state.user = null;
  state.cart = [];
  updateHeader();
  navigate("home");
}

function register() {
  state.user = null;
  state.cart = [];
  updateHeader();
  navigate("register");
}
