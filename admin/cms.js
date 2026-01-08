const PASSWORD = "nov@tour123!"; // 🔐 change-le

function login() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === PASSWORD) {
    sessionStorage.setItem("cms-auth", "ok");
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Mot de passe incorrect";
  }
}

// Protection dashboard
if (window.location.pathname.includes("dashboard.html")) {
  if (sessionStorage.getItem("cms-auth") !== "ok") {
    window.location.href = "index.html";
  }
}
