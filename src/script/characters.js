import {createCharacterCard} from './creaeteCharactersCard.js';

export function charactersPage() {
  const req = async (url) => {
    let data = await fetch(url);
    return data.json();
  }
  
  req(`https://rickandmortyapi.com/api/character/?page=1`).then((cards) => {
    let cont = document.querySelector(`.contForCard`);
    cont.innerHTML = ``;

    cards.results.forEach((el) => {
      cont.append(createCharacterCard(el));
    });
  }).catch(() => {
    console.warn(`Щось не те з API`);
  });
  
  const pagination = document.querySelector(`.pagin nav ul`);
  let currentPage = 1;

  pagination.addEventListener(`click`, ({target}) => {
    if(currentPage >= 1 && currentPage <= 48){
      if(target.dataset.current === `next`){
        if(currentPage <= 47){
          currentPage++;

          let links = [...document.querySelectorAll(`.pagin nav ul li a`)];
          links[1].textContent = currentPage - 1;
          links[2].textContent = currentPage;
          links[3].textContent = currentPage + 1;
          links[2].classList.add(`activeP`);
          links[2].dataset.current = `current`;

          req(`https://rickandmortyapi.com/api/character/?page=${currentPage}`).then((cards) => {
            let cont = document.querySelector(`.contForCard`);
            cont.innerHTML = ``;

            cards.results.forEach((el) => {
              cont.append(createCharacterCard(el));
            });
          }).catch(() => {
            console.warn(`Щось не те з API`);
          });
        }else return;

      }else if(target.dataset.current === `previous`){
        if(currentPage >= 2){
          currentPage--;

          let links = [...document.querySelectorAll(`.pagin nav ul li a`)];
          links[1].textContent = currentPage - 1;
          links[2].textContent = currentPage;
          links[3].textContent = currentPage + 1;
          links[2].classList.add(`activeP`);
          
          req(`https://rickandmortyapi.com/api/character/?page=${currentPage}`).then((cards) => {
            let cont = document.querySelector(`.contForCard`);
            cont.innerHTML = ``;

            cards.results.forEach((el) => {
              cont.append(createCharacterCard(el));
            });
          }).catch(() => {
            console.warn(`Щось не те з API`);
          });
        }else return;
      }
    }
  });
}