let emojis = ['🥳', '👻', '🥳', '👾', '👻'];

const urlAnimate = () => {
  window.location.hash = emojis[Math.floor((Date.now() / 100) % emojis.length)];
  setTimeout(urlAnimate, 800);
};
urlAnimate();
