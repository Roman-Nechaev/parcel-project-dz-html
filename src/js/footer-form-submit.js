console.log('footer-form');

const footerFormRef = document.querySelector('.js-footer-form-submit');

footerFormRef.addEventListener('submit', inFormSubmit);

function inFormSubmit(e) {
  e.preventDefault();
  new FormData(e.currentTarget).forEach((value, name) => {
    console.log(`${name}: ${value}`);
  });
  e.currentTarget.reset();
}

console.log('js-footer-form-submit');
