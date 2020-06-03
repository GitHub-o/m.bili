onResize();

window.addEventListener('resize', onResize, false);

document.addEventListener('touchmove', onTouchMove, false);

function onResize () {
  const { documentElement } = document;

  documentElement.style.fontSize = documentElement.clientWidth / 37.5 + 'px';
}

function onTouchMove (e) {
  const { touches } = e;

  if (touches && touches.length > 0) {
    e.preventDefault();
  }
}
