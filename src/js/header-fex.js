// console.log('header-fex');

const { height: headerHeight } = document.querySelector('.header-fixed').getBoundingClientRect();
// console.log(headerHeight);

const mainFoo = document.querySelector('main');
// console.log('mainFoo', mainFoo);

mainFoo.style.paddingTop = `${headerHeight}px`;
