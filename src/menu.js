const menuTab = (() => {
  const inner = document.createElement('div');
  inner.setAttribute('class', 'inner d-flex flex-row justify-content-around pt-4');


  const cardContain = document.createElement('div');
  cardContain.setAttribute('class', 'card-deck mb-5');

  inner.appendChild(cardContain);

  const menus = [{
    img: 'https://user-images.githubusercontent.com/25479050/69044120-a4d03480-09f4-11ea-8714-4f895e7a991e.jpeg', title: 'Fried Plantain', price: '$20', text: 'This is a longer card with supporting text below as a natural lead-in to additional content.',
  },
  {
    img: 'https://user-images.githubusercontent.com/25479050/69044190-c4fff380-09f4-11ea-9741-5eda04e49a12.jpeg', title: 'Egusi Soup', price: '$35', text: 'This is a longer card with supporting text below as a natural lead-in to additional content.',
  },
  {
    img: 'https://user-images.githubusercontent.com/25479050/69044258-e82aa300-09f4-11ea-9a8e-8e3fe185e347.jpeg', title: 'Yam Porridge', price: '$50', text: 'This is a longer card with supporting text below as a natural lead-in to additional content.',
  },
  {
    img: 'https://user-images.githubusercontent.com/25479050/69044322-07293500-09f5-11ea-9133-f27b6c441705.jpeg', title: 'Vegetable Soup', price: '$120', text: 'This is a longer card with supporting text below as a natural lead-in to additional content.',
  }];




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
