const jokeContainer = document.getElementById('container');
const jokeButton = document.getElementById('joke-btn');

const getJoke = async () => {
  const url = 'https://icanhazdadjoke.com/';
  try {
    const response = await fetch(url, { method: 'GET', headers: { accept: 'application/json' } });

    let data = await response.json();
    clearContainer();
    appendJoke(data.joke);
  } catch (error) {
    console.log(error);
  }
};

const clearContainer = () => {
    while(jokeContainer.firstChild) {
        jokeContainer.firstChild.remove();
    }
}

const appendJoke = (apiJoke) => {

    const joke = document.createTextNode(apiJoke);
    joke.innerHTML = apiJoke;
    jokeContainer.appendChild(joke);
}

jokeButton.addEventListener("click", getJoke)
// getJoke();
