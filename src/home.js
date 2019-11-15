const home = (() => {
  const tabPane = document.createElement('div');
  tabPane.setAttribute('id', 'nav-home');
  tabPane.setAttribute('class', 'tab-pane fade show active');
  tabPane.setAttribute('role', 'tabpanel');
  tabPane.setAttribute('aria-labelledby', 'nav-home-tab');

  const inner = document.createElement('div');

  inner.setAttribute('class', 'inner d-flex flex-row justify-content-center');

  const img = document.createElement('img');

  img.setAttribute('class', 'img-fluid  d-block logo-img');
  img.setAttribute('src', '/img/logo-3.png');
  img.setAttribute('alt', 'restaurant-logo');

  inner.appendChild(img);

  return tabPane.appendChild(inner);
})();

export default home;
