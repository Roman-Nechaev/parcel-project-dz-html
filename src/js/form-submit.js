console.log('form-modal');

const formRef = document.querySelector('.js-form-submit');

formRef.addEventListener('submit', inFormSubmit);

function inFormSubmit(e) {
  e.preventDefault();
  new FormData(e.currentTarget).forEach((value, name) => console.log(`${name}: ${value}`));
  e.currentTarget.reset();
}
