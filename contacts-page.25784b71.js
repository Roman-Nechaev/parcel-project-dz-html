!function(){var n,t;n=document.querySelectorAll(".button"),t=document.querySelectorAll(".card"),n.forEach((function(n){n.addEventListener("click",(function(){var a,e=n.dataset.filter;a=e,t.forEach((function(n){var t=!n.classList.contains(a),e="all"===a.toLowerCase();t&&!e?n.classList.add("anime"):(n.classList.remove("hide"),n.classList.remove("anime"))}))}))})),t.forEach((function(n){n.ontransitionend=function(){n.classList.contains("anime")&&n.classList.add("hide")}}))}();
//# sourceMappingURL=contacts-page.25784b71.js.map