const state = { 
  user: null,
  products: [
    { id: 1, name: "Laptop Gaming", price: 7500000 },
    { id: 2, name: "Mouse Wireless", price: 150000 },
    { id: 3, name: "Keyboard Mechanical", price: 350000 }
  ],
  cart: [],
  dummyUser: {
    email: "user@mail.com",
    password: "123456",
    name: "Budi"
  },
  users: [
    {
      email: "user@gmail.com",
      password: "123456"
    }
  ]
};

function updateHeader() {
  const totalQty = state.cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById("cart-count").innerText = totalQty;

  let userLabel = document.getElementById("user-info");
  let linkLogin = document.getElementById("link-login");
  let linkLogout = document.getElementById("link-logout");


  if(state.user != null){
    userLabel.innerText = state.user.name;
    linkLogin.style.display = "none";
    linkLogout.style.display = "block";

  }else{
    userLabel.innerText = '';
    linkLogin.style.display = "block";
    linkLogout.style.display = "none";

  }


}
