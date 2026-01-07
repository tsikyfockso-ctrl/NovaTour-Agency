const PASSWORD = "novatour123";

const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

function login() {
  const pwd = document.getElementById("pwd").value;
  if(pwd === PASSWORD){
    document.getElementById("login").style.display = "none";
    document.getElementById("cms").style.display = "block";
    loadContent();
  } else alert("Mot de passe incorrect");
}

function loadContent(){
  const page = document.getElementById("page").value;
  fetch(`../content/${page}.html`)
    .then(res => res.text())
    .then(txt => {
      editor.value = txt;
      updatePreview();
    });
}

editor.addEventListener("input", updatePreview);

function updatePreview(){
  preview.innerHTML = editor.value;
}

function wrapSelection(before, after = before){
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const text = editor.value;
  editor.value = text.slice(0,start) + before + text.slice(start,end) + after + text.slice(end);
  updatePreview();
}

// Outils
function addBold(){ wrapSelection("<b>","</b>"); }
function addItalic(){ wrapSelection("<i>","</i>"); }
function addLink(){ const url=prompt("URL du lien :"); if(url) wrapSelection(`<a href="${url}">`,`</a>`);}
function addImage(){ const url=prompt("URL de l'image :"); if(url) wrapSelection(`<img src="${url}" alt="">`);}
function addHeading(){ wrapSelection("<h2>","</h2>"); }
function addList(){ wrapSelection("<ul>\n<li>","</li>\n</ul>"); }

function save(){
  const page = document.getElementById("page").value;
  alert("Tu vas être redirigé vers GitHub pour enregistrer le fichier.");
  window.open(
    `https://github.com/tsikyfockso-ctrl/NovaTour-Agency/edit/main/content/${page}.html`,
    "_blank"
  );
}
