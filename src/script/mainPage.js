export function mainPage() {
  const btn = [...document.querySelectorAll(`button`)];

  btn.forEach((el) => {
    el.addEventListener(`click`, () => {
      if(el.id === `characters`){
        window.location = '#characters';
      }else if(el.id === `episodes`){
        window.location = '#episodes';
      }else if(el.id === `locations`){
        window.location = '#locations';
      }
    });
  });
}