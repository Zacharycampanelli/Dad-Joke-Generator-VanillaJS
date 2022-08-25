const jokeContainer = document.getElementById('saved');


function getSavedJokes() {
  for (let [key, value] of Object.entries(localStorage)) {
    
    let item = document.createElement("p");
    item.innerText = value;
    item.classList.add("saved-joke");
    let br = document.createElement("br");
    jokeContainer.appendChild(item);
    jokeContainer.appendChild(br);

   
  }
}
getSavedJokes();
