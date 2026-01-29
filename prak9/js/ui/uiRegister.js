function renderRegister(container) {
    container.innerHTML = `
        <div class="card">
            <h2>Register</h2>
            <input id="regEmail" type="email" placeholder="Email">
            <input id="regPassword" type="password" placeholder="Password">
            <input id="regConfirm" type="password" placeholder="Confirm Password">
            <button class="primary" onclick="register()">Register</button>
            <p>Sudah punya akun? 
                <a href="#" onclick="navigate('login')">Login</a>
            </p>
        </div>
    `;
}

function register() {
    const email = document.getElementById("regEmail").value;
    const pass = document.getElementById("regPassword").value;
    const confirm = document.getElementById("regConfirm").value;
    
    if (!email || !pass || !confirm) {
        alert("Semua field wajib diisi!");
        return;
    }

    if (pass !== confirm) {
        alert("Password tidak sama!");
        return;
    }

    const exists = state.users.find(u => u.email === email);
    if (exists) {
        alert("Email sudah terdaftar");
        return;
    }

    state.users.push({
        email: email,
        password: pass
    });

    alert("Register berhasil, silahkan login");
    navigate("login");
}