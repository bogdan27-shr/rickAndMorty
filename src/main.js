import'./libs/bootstrap/bootstrap.min.css';
import './libs/bootstrap/bootstrap.bundle.min.js';
import './style/style.scss';
import {mainPage} from './script/mainPage.js';
import {charactersPage} from './script/characters.js';
import {episodesPage} from './script/episodes.js';
import {locationsPage} from './script/locations.js';

window.addEventListener(`DOMContentLoaded`, () => {
  let page = document.querySelector(`body`);

  if(page.dataset.page === `main`){
    mainPage();
  }else if(page.dataset.page === `characters`){
    charactersPage();
  }else if(page.dataset.page === `episodes`){
    episodesPage();
  }else if(page.dataset.page === `locations`){
    locationsPage();
  }
});