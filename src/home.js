const home = (() => {
  const inner = document.createElement('div');

  inner.setAttribute('class', 'inner d-flex flex-row justify-content-center');

  const img = document.createElement('img');

  img.setAttribute('class', 'img-fluid  d-block logo-img');
  img.setAttribute('src', '/img/logo-3.png');
  img.setAttribute('alt', 'restaurant-logo');


  return inner.appendChild(img);
})();

export default home;
