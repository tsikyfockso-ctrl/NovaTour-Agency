const PASSWORD = "Nov@tour123!"; // mot de passe simple

function login() {
  if (document.getElementById("pwd").value === PASSWORD) {
    document.getElementById("login").style.display = "none";
    document.getElementById("cms").style.display = "block";
  } else {
    alert("Mot de passe incorrect");
  }
}

function save() {
  alert("Tu vas être redirigé vers GitHub pour enregistrer.");
  window.open(
    "https://github.com/tsikyfockso-ctrl/NovaTour-Agency/edit/main/content/home.html",
    "_blank"
  );
}
