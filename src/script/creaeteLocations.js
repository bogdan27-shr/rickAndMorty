import {createCards} from './creaeteCards.js';
import rickImage from '../img/card/rickAndMorty.webp';

export function createLocations(el) {
  let cards = createCards(`article`, `cards`);

  let imgDiv = createCards(`div`, `imgCards`);
  let img = createCards(`img`);
  img.src = rickImage;
  img.alt = `Зображення не пiдвантажилось з сервера`;
  imgDiv.append(img);
  let info = createCards(`div`, `info`);
  let h4 = createCards(`h4`, undefined, el.name);
  let locations = createCards(`div`, `locations`);
  let lastLocations = createCards(`div`, `lastLocations`);
  let spanLoc = createCards(`span`, undefined, `Type`);
  lastLocations.append(spanLoc);
  let nameLoc = createCards(`div`, `namelocation`);
  let spanName = createCards(`span`, undefined, el.type);
  nameLoc.append(spanName);
  locations.append(lastLocations, nameLoc);
  let origin = createCards(`div`, `firstLocations`);
  let from = createCards(`div`, `lastLocations`);
  let spanFrom = createCards(`span`, undefined, `Dimension`);
  let nameLoc2 = createCards(`div`, `namelocation`);
  let spanFromName = createCards(`span`, undefined, el.dimension);
  nameLoc2.append(spanFromName);
  from.append(spanFrom, nameLoc2);
  origin.append(from);
  info.append(h4, locations, origin);
  cards.append(imgDiv, info);

  return cards;
}