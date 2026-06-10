export function mainPage() {
  const btn = [...document.querySelectorAll(`button`)];

  btn.forEach((el) => {
    el.addEventListener(`click`, () => {
      if(el.id === `characters`){
        window.location = '/src/pages/characters.html';
      }else if(el.id === `episodes`){
        window.location = '/src/pages/episodes.html';
      }else if(el.id === `locations`){
        window.location = '/src/pages/locations.html';
      }
    });
  });
}