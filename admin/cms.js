function login() {
  const pass = document.getElementById("cms-password").value;
  // mot de passe : admin123 (modifiable ici)
  if(pass === "Nov@tour123!") {
    sessionStorage.setItem("cms-auth", "ok");
    window.location.href = "dashboard.html";
  } else {
    alert("Mot de passe incorrect !");
  }
}

function protect() {
  if(sessionStorage.getItem("cms-auth") !== "ok") {
    window.location.href = "index.html";
  }
}

function back() {
  window.location.href = "dashboard.html";
}
