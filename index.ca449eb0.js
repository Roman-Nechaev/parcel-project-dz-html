var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequirebbb8;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var d={id:e,exports:{}};return o[e]=d,t.call(d.exports,d,d.exports),d.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequirebbb8=t);var d=t("jQ7WT");const r={openModalBtn:document.querySelector("[data-open-modal]"),closeModalBtn:document.querySelector("[data-close-modal]"),backdrop:document.querySelector("[data-backdrop]")};function l(){window.addEventListener("keydown",a);const e=r.backdrop.classList.toggle("is-hidden");d[e?"enableBodyScroll":"disableBodyScroll"](document.body)}function a(e){"Escape"===e.code&&l()}r.openModalBtn.addEventListener("click",l),r.closeModalBtn.addEventListener("click",l),r.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&l()}));
//# sourceMappingURL=index.ca449eb0.js.map