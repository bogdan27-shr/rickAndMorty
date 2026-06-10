export function createCards (tagName, className = undefined, value = undefined){
  let tag = document.createElement(tagName);

  if(className !== undefined){
    tag.classList.add(className);
    if(value !== undefined){
      tag.append(value);
    }else{
      return tag;
    }
  }else{
    if(value !== undefined){
      tag.append(value);
    }else{
      return tag;
    }
  }
  return tag;
}