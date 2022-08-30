const jokeContainer = document.getElementById('container');
const jokeButton = document.getElementById('joke-btn');
const saveButton = document.getElementById('save-btn');
const copyButton = document.getElementById('copy-btn');
const messageBody = document.getElementById('message-body');
let currentJoke = document.querySelector('has-text-info');
let jokes = [];
let index = 0;
let jokeId = 0;

// Creates new joke from api call on homepage
const getNewJoke = async () => {
  saveButton.disabled = false;
  copyButton.disabled = false;
  const url = 'https://icanhazdadjoke.com/';
  try {
    const response = await fetch(url, { method: 'GET', headers: { accept: 'application/json' } });

    let data = await response.json();
    clearContainer();
    console.log(data);
    appendJoke(data.joke);
  } catch (error) {
    console.log(error);
  }
};

// Clears the current joke on the homepage
const clearContainer = () => {
  while (jokeContainer.firstChild) {
    jokeContainer.firstChild.remove();
  }
};

// Places joke text on screen
const appendJoke = (apiJoke) => {
  const joke = document.createElement('p');
  console.log('here');
  joke.textContent = apiJoke;
  joke.className = 'has-text-info toCopy';
  console.log(joke);
  currentJoke = joke;
  console.log(currentJoke);
  jokeContainer.appendChild(joke);
};

// Saves a liked joke to localStorage
function saveJokes() {
  let jokes = JSON.parse(localStorage.getItem('jokes'));

  console.log(jokes);

  jokes.push(currentJoke.textContent);
  localStorage.setItem('jokes', JSON.stringify(jokes));
}

// Copies the text of the joke to the clipboard
const copyJoke = () => {
  let message = currentJoke.textContent;
  navigator.clipboard.writeText(message).then(() => {
    alert('Copied!');
  });
};

function loadJokes() {
  let savedJokes = localStorage.getItem('jokes');

  if (!savedJokes) {
    return false;
  }

  savedJokes = JSON.parse(savedJokes);
}

jokeButton.addEventListener('click', getNewJoke);
saveButton.addEventListener('click', saveJokes);
copyButton.addEventListener('click', copyJoke);
//getNewJoke();
saveButton.disabled = true;
copyButton.disabled = true;
loadJokes();
