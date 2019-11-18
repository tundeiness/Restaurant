const menuTab = (() => {
  const inner = document.createElement('div');
  inner.setAttribute('class', 'inner d-flex flex-row justify-content-around pt-4');

  // card container
  const cardContain = document.createElement('div');
  cardContain.setAttribute('class', 'card-deck mb-5');

  inner.appendChild(cardContain);

  const menus = [{
    img: 'https://github.com/tundeiness/Restaurant/blob/feature/img/fried-plantain.jpeg', title: 'Fried Plantain', price: '$20', text: 'This is a longer card with supporting text below as a natural lead-in to additional content.',
  },
  {
    img: 'https://github.com/tundeiness/Restaurant/blob/feature/img/Egusi-soup.jpeg', title: 'Egusi Soup', price: '$35', text: 'This is a longer card with supporting text below as a natural lead-in to additional content.',
  },
  {
    img: 'https://github.com/tundeiness/Restaurant/blob/feature/img/porridge.jpeg', title: 'Yam Porridge', price: '$50', text: 'This is a longer card with supporting text below as a natural lead-in to additional content.',
  },
  {
    img: 'https://github.com/tundeiness/Restaurant/blob/feature/img/vegetable-soup.jpeg', title: 'Vegetable Soup', price: '$120', text: 'This is a longer card with supporting text below as a natural lead-in to additional content.',
  }];

  // first menu


  for (let i = 0; i < menus.length; i += 1) {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const img = document.createElement('img');

    img.setAttribute('class', 'card-img-top');
    img.setAttribute('src', `${menus[i].img}`);
    img.setAttribute('alt', `${menus[i].title}`);
    card.appendChild(img);

    card.innerHTML += `<h5 class="card-title text-center">${menus[i].title}</h5>
            <p class="card-text">${menus[i].text}</p>
             <p class="card-text"><small class="text-muted">Price:
             ${menus[i].price} per plate</small></p>`;


    cardContain.appendChild(card);
    inner.appendChild(cardContain);
  }


  return inner;
})();

export default menuTab;
