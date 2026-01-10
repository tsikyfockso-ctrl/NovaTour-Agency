function setLang(lang) {
  // Sauvegarder la langue choisie
  localStorage.setItem("lang", lang);

  // Sélectionner tous les éléments traduisibles
  const elements = document.querySelectorAll("[data-" + lang + "]");

  // Pour chaque élément, remplacer le texte
  document.querySelectorAll("[data-fr], [data-en], [data-mg], [data-es], [data-de], [data-it], [data-pt], [data-zh], [data-ar]")
    .forEach(el => {
      const translation = el.getAttribute("data-" + lang);
      if (translation) {
        el.textContent = translation;
      }
    });

  // Gestion direction RTL pour l’arabe
  if (lang === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
  }
}

// Charger la langue sauvegardée au démarrage
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "fr";
  setLang(savedLang);

  // Mettre la langue sélectionnée dans le select
  const select = document.querySelector(".lang-switch select");
  if (select) {
    select.value = savedLang;
  }
});
