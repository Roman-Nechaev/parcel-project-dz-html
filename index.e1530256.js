document.querySelector(".js-form-submit").addEventListener("submit",(function(e){e.preventDefault(),new FormData(e.currentTarget).forEach(((e,t)=>console.log(`${t}: ${e}`))),e.currentTarget.reset()}));
//# sourceMappingURL=index.e1530256.js.map
