import {createCards} from './creaeteCards.js';

export function createCharacterCard(el) {
  let cards = createCards(`article`, `cards`);

  let imgDiv = createCards(`div`, `imgCards`);
  let img = createCards(`img`);
  img.src = el.image;
  img.alt = `Зображення не пiдвантажилось з сервера`;
  imgDiv.append(img);
  let info = createCards(`div`, `info`);
  let h4 = createCards(`h4`, undefined, el.name);
  let type = createCards(`div`, `type`);
  let circle = createCards(`span`, `cirkle`);
  let span = createCards(`span`, undefined, el.species);
  type.append(circle, span);
  let locations = createCards(`div`, `locations`);
  let lastLocations = createCards(`div`, `lastLocations`);
  let spanLoc = createCards(`span`, undefined, `Location`);
  lastLocations.append(spanLoc);
  let nameLoc = createCards(`div`, `namelocation`);
  let spanName = createCards(`span`, undefined, el.location.name);
  nameLoc.append(spanName);
  locations.append(lastLocations, nameLoc);
  let origin = createCards(`div`, `firstLocations`);
  let from = createCards(`div`, `lastLocations`);
  let spanFrom = createCards(`span`, undefined, `From`);
  let nameLoc2 = createCards(`div`, `namelocation`);
  let spanFromName = createCards(`span`, undefined, el.origin.name);
  nameLoc2.append(spanFromName);
  from.append(spanFrom, nameLoc2);
  origin.append(from);
  info.append(h4, type, locations, origin);
  cards.append(imgDiv, info);

  return cards;
}