import {createCards} from './creaeteCards.js';

export function creaeteEpisodes (el) {
  let cards = createCards(`article`, `cards`);

  let imgDiv = createCards(`div`, `imgCards`);
  let img = createCards(`img`);
  img.src = `../img/card/rickAndMorty.webp`;
  img.alt = `Зображення не пiдвантажилось`;
  imgDiv.append(img);
  let info = createCards(`div`, `info`);
  let h4 = createCards(`h4`, undefined, el.name);
  let locations = createCards(`div`, `locations`);
  let lastLocations = createCards(`div`, `lastLocations`);
  let spanLoc = createCards(`span`, undefined, `episode`);
  lastLocations.append(spanLoc);
  let nameLoc = createCards(`div`, `namelocation`);
  let spanName = createCards(`span`, undefined, el.episode);
  nameLoc.append(spanName);
  locations.append(lastLocations, nameLoc);
  let origin = createCards(`div`, `firstLocations`);
  let from = createCards(`div`, `lastLocations`);
  let spanFrom = createCards(`span`, undefined, `Air_date`);
  let nameLoc2 = createCards(`div`, `namelocation`);
  let spanFromName = createCards(`span`, undefined, el.air_date);
  nameLoc2.append(spanFromName);
  from.append(spanFrom, nameLoc2);
  origin.append(from);
  info.append(h4, locations, origin);
  cards.append(imgDiv, info);

  return cards;
}