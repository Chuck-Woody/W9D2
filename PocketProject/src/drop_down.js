
export const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};


export function dogLinkCreator(dogs) {
  let liArr = [];

 
  for(let key in dogs) {
    let aTag = document.createElement("a");
    aTag.innerHTML = key
    aTag.setAttribute("href",dogs[key])
    let li = document.createElement("li")
    li.appendChild(aTag)
    li.classList.add("dog-link")
    liArr.push(li);
  }

  return liArr;
}


// console.log(dogLinkCreator());