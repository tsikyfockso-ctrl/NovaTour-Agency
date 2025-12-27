// lang.js
function setLang(lang) {
  document.querySelectorAll('[data-fr]').forEach(el => {
    if(lang === 'fr') el.innerText = el.getAttribute('data-fr');
    else if(lang === 'en') el.innerText = el.getAttribute('data-en');
    else if(lang === 'es') el.innerText = el.getAttribute('data-es');
    else if(lang === 'de') el.innerText = el.getAttribute('data-de');
    else if(lang === 'it') el.innerText = el.getAttribute('data-it');
    else if(lang === 'pt') el.innerText = el.getAttribute('data-pt');
    else if(lang === 'zh') el.innerText = el.getAttribute('data-zh');
    else if(lang === 'ar') el.innerText = el.getAttribute('data-ar');
    else if(lang === 'ru') el.innerText = el.getAttribute('data-ru');
  });
}
