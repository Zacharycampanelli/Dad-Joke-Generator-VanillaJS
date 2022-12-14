const jokeContainer = document.querySelector('#saved');
let jokeId = 0;
let jokes = [];
// const deleteButton =

// function getSavedJokes() {
//   // for (let [key, value] of Object.entries(localStorage)) {
//   let item = document.createElement('li');

//   item.innerText = value;
//   item.className = 'saved-joke';
//   item.setAttribute('id', key);
//   let deleteButton = document.createElement('button');
//   deleteButton.innerHTML = 'Delete';

//   let br = document.createElement('br');
//   jokeContainer.appendChild(item);
//   jokeContainer.appendChild(deleteButton);
//   jokeContainer.appendChild(br);

//   // }
// }

function getSavedJokes() {
  let savedJokes = localStorage.getItem('jokes');

  if (!savedJokes) {
    return false;
  }

  savedJokes = JSON.parse(savedJokes);

  console.log(savedJokes);

  for (let i = 0; i < savedJokes.length; i++) {
    createSingleLikedJoke(savedJokes[i]);
  }
}

// function saveJokes() {
//   localStorage.setItem("jokes", JSON.stringify(jokes))
// }

function createSingleLikedJoke(joke_text) {
  // Create list item
  let jokeItemEl = document.createElement('li');

  // jokeItemEl.innerText = value;
  jokeItemEl.className = 'saved-joke';
  // Custom id for each joke
  // jokeItemEl.setAttribute('data-joke-id', jokeId);

  // let deleteButton = document.createElement('button');
  // deleteButton.innerHTML = 'Delete';

  // Create a div to hold the joke and add delete button
  var singleJokeContainer = document.createElement('div');
  singleJokeContainer.className = 'joke';
  singleJokeContainer.innerHTML = "<h3 class='whole-joke'>" + joke_text + '</h3>';
  singleJokeContainer.setAttribute('data-joke-id', jokeId);

  jokeItemEl.appendChild(singleJokeContainer);
  // let br = document.createElement('br');
  let deleteButton = createDeleteButton(jokeId);
  jokeItemEl.appendChild(deleteButton);
  jokeContainer.appendChild(jokeItemEl);

  // jokeContainer.appendChild(br);
  // joke_text.id = jokeId;
  jokes.push(joke_text);

  jokeId++;
}

function createDeleteButton(id) {
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-btn';
  deleteButton.setAttribute('data-joke-id', id);
  return deleteButton;
}

function deleteButtonHandler(event) {
  if (event.target.matches('.delete-btn')) {
    let dataJokeId = event.target.getAttribute('data-joke-id');
    event.target.remove()
    deleteJoke(dataJokeId);
  }
}

function deleteJoke(jokeId) {
  console.log(jokeId);
  let toDelete = document.querySelector(".joke[data-joke-id='" + jokeId + "']");
  toDelete.remove();
  let updatedJokeList = [];

  // jokes.filter()
jokes.splice(jokeId, 1);
console.log(updatedJokeList)

  localStorage.removeItem('jokes');
  console.log(jokes);
  localStorage.setItem('jokes', JSON.stringify(jokes));
}

getSavedJokes();
jokeContainer.addEventListener('click', deleteButtonHandler);
