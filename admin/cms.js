const password="Nov@tour123!"; // mot de passe CMS
function login(){
  const p=document.getElementById("pass").value;
  if(p===password){document.getElementById("cms-interface").style.display="block";}
  else{alert("Mot de passe incorrect");}
}
function saveContent(){
  const data=document.getElementById("content-json").value;
  console.log("Sauvegarde JSON:",data);
  alert("Contenu sauvegardé dans la console (simulé pour GitHub Pages)");
}
