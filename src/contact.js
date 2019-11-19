const contact = (() => {
  const inner = document.createElement('div');
  inner.setAttribute('class', 'jumbotron mt-5 bg-dark text-white');


  const heading = document.createElement('h1');
  heading.setAttribute('class', 'display-4');
  heading.innerHTML = 'Contact Us!';

  inner.appendChild(heading);

  const small = document.createElement('small');
  small.setAttribute('class', 'text-muted');
  const smallContent = '091 235 4329 & 213 453 765';
  small.innerHTML = smallContent;

  const para = document.createElement('p');
  para.setAttribute('class', 'lead');
  const paraContent = `For personal orders, Parties, Luncheons, </br>
     Symposium and other events where you'd like us to serve you </br>
     exquisite cuisine from the Mother'Lan, call us on the following</br>
     phone numbers: `;
  para.innerHTML = `${paraContent} <small class="text-muted"> 091 235 4329 & 213 453 765</small>`;

  inner.appendChild(para);

  const horizontal = document.createElement('hr');
  horizontal.setAttribute('class', 'my-4');

  inner.appendChild(horizontal);


  const twitter = document.createElement('a');
  const facebook = document.createElement('a');
  const instagram = document.createElement('a');
  const foursquare = document.createElement('a');


  twitter.setAttribute('href', '#');
  twitter.setAttribute('class', 'badge badge-primary mr-2');
  facebook.setAttribute('href', '#');
  facebook.setAttribute('class', 'badge badge-primary mr-2');
  instagram.setAttribute('href', '#');
  instagram.setAttribute('class', 'badge badge-secondary mr-2');
  foursquare.setAttribute('href', '#');
  foursquare.setAttribute('class', 'badge badge-danger');


  const insetTwitter = document.createElement('i');
  const insetFacebook = document.createElement('i');
  const insetInsta = document.createElement('i');
  const insetFour = document.createElement('i');

  insetTwitter.setAttribute('href', '#');
  insetTwitter.setAttribute('class', 'fab fa-twitter fa-lg');

  insetFacebook.setAttribute('href', '#');
  insetFacebook.setAttribute('class', 'fab fa-facebook-square fa-lg');

  insetInsta.setAttribute('href', '#');
  insetInsta.setAttribute('class', 'fab fa-instagram fa-lg');

  insetFour.setAttribute('href', '#');
  insetFour.setAttribute('class', 'fab fa-foursquare fa-lg');


  twitter.appendChild(insetTwitter);
  facebook.appendChild(insetFacebook);
  instagram.appendChild(insetInsta);
  foursquare.appendChild(insetFour);

  inner.appendChild(twitter);
  inner.appendChild(facebook);
  inner.appendChild(instagram);
  inner.appendChild(foursquare);


  return inner;
})();

export default contact;
