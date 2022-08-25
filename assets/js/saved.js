const jokeContainer = document.getElementById('saved');


function getSavedJokes() {
  for (let [key, value] of Object.entries(localStorage)) {
    console.log(value);
    newValue = value + "\n"
    let item = document.createTextNode(newValue);
    let br = document.createElement("br");
    console.log(`${item}`);
    jokeContainer.appendChild(item);
    jokeContainer.appendChild(br);

   
  }
}
getSavedJokes();
