const jokeContainer = document.getElementById('saved');


function getSavedJokes() {
  for (let [key, value] of Object.entries(localStorage)) {
    
    let item = document.createTextNode(value);
    let br = document.createElement("br");
    jokeContainer.appendChild(item);
    jokeContainer.appendChild(br);

   
  }
}
getSavedJokes();
