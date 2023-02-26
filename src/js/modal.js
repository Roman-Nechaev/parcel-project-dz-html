const bodyScrollLock = require('body-scroll-lock');

const refs = {
  openModalBtn: document.querySelector('[data-open-modal]'),
  closeModalBtn: document.querySelector('[data-close-modal]'),
  backdrop: document.querySelector('[data-backdrop]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);

refs.closeModalBtn.addEventListener('click', toggleModal);

refs.backdrop.addEventListener('click', logBacdropClick);

function toggleModal() {
  window.addEventListener('keydown', onEscKeyPress);

  const inModalOpen = refs.backdrop.classList.toggle('is-hidden');

  const scrollLockMethod = !inModalOpen ? 'disableBodyScroll' : 'enableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body);
}

function logBacdropClick(e) {
  if (e.currentTarget === e.target) {
    toggleModal();
  }
}

function onEscKeyPress(e) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = e.code === ESC_KEY_CODE;

  if (isEscKey) {
    toggleModal();
  }
}
