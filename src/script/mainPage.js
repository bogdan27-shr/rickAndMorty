export function mainPage() {
  const btn = [...document.querySelectorAll('button')];
  const BASE = import.meta.env.BASE_URL;

  btn.forEach((el) => {
    el.addEventListener('click', () => {
      if (el.id === 'characters') {
        window.location = `${BASE}characters.html`;
      }else if (el.id === 'episodes') {
        window.location = `${BASE}episodes.html`;
      }else if (el.id === 'locations') {
        window.location = `${BASE}locations.html`;
      }
    });
  });
}