const { height: headerHeight } = document.querySelector('.header-fixed').getBoundingClientRect();

const mainFoo = document.querySelector('main');

mainFoo.style.paddingTop = `${headerHeight}px`;
