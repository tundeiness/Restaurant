const home = (() => {
  const inner = document.createElement('div');

  inner.setAttribute('class', 'inner d-flex flex-row justify-content-center');

  const img = document.createElement('img');

  img.setAttribute('class', 'img-fluid  d-block logo-img');
  img.setAttribute('src', 'https://user-images.githubusercontent.com/25479050/69044406-27f18a80-09f5-11ea-9f9a-e4834e0f8c29.png');
  img.setAttribute('alt', 'restaurant-logo');


  inner.appendChild(img);
  return inner;
})();

export default home;
