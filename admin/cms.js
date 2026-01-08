const CMS_PASSWORD = "nov@tour123!";

function login() {
  const pass = document.getElementById("password").value;

  if (pass === CMS_PASSWORD) {
    sessionStorage.setItem("cms-auth", "ok");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Mot de passe incorrect";
  }
}

function logout() {
  sessionStorage.removeItem("cms-auth");
  window.location.href = "index.html";
}

// Protection automatique
if (window.location.pathname.includes("dashboard.html")) {
  if (sessionStorage.getItem("cms-auth") !== "ok") {
    window.location.href = "index.html";
  }
}
