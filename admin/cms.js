const PASSWORD = "nov@tour123!"; // Mot de passe CMS

const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

function login() {
  const pwd = document.getElementById("pwd").value;
  if (pwd === PASSWORD) {
    document.getElementById("login").style.display = "none";
    document.getElementById("cms").style.display = "block";
    loadContent();
  } else {
    alert("Mot de passe incorrect");
  }
}

function loadContent() {
  const page = document.getElementById("page").value;
  fetch(`../content/${page}.html`)
    .then(res => res.text())
    .then(txt => {
      editor.value = txt;
      updatePreview();
    });
}

editor.addEventListener("input", updatePreview);

function updatePreview() {
  preview.innerHTML = editor.value;
}

function addBold() { wrapSelection("**"); }
function addItalic() { wrapSelection("_"); }
function addLink() {
  const url = prompt("URL du lien :");
  if (url) wrapSelection(`<a href="${url}">Lien</a>`);
}
function addImage() {
  const url = prompt("URL de l'image :");
  if (url) wrapSelection(`<img src="${url}" alt="">`);
}

function wrapSelection(wrapper) {
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const text = editor.value;
  editor.value = text.slice(0,start) + wrapper + text.slice(start,end) + wrapper + text.slice(end);
  updatePreview();
}

function save() {
  const page = document.getElementById("page").value;
  alert("Tu vas être redirigé vers GitHub pour enregistrer le fichier.");
  window.open(
    `https://github.com/tsikyfockso-ctrl/NovaTour-Agency/edit/main/content/${page}.html`,
    "_blank"
  );
}
