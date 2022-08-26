const jokeContainer = document.getElementById('container');
const jokeButton = document.getElementById('joke-btn');
const saveButton = document.getElementById('save-btn');
const copyButton = document.getElementById('copy-btn');
const messageBody = document.getElementById('message-body');
const getJoke = async () => {
  const url = 'https://icanhazdadjoke.com/';
  try {
    const response = await fetch(url, { method: 'GET', headers: { accept: 'application/json' } });

    let data = await response.json();
    clearContainer();
    let joke = splitJoke(data.joke);
    // let dividedJoke = formatJoke(joke);
    console.log(joke);
    appendJoke(joke);
  } catch (error) {
    console.log(error);
  }
};

const clearContainer = () => {
  while (jokeContainer.firstChild) {
    jokeContainer.firstChild.remove();
  }
};

// const formatJoke = (opening, punchLine) => {
//    console.log('shit')
//   return [opening, punchLine]
// }

const appendJoke = (apiJoke) => {
  const joke = document.createElement('p');
  console.log('here');
  joke.textContent = apiJoke;
  joke.classList.add('has-text-info');
  joke.classList.add('toCopy');
  jokeContainer.appendChild(joke);
};

const splitJoke = (joke) => {
  console.log(joke);
  // if(joke.includes(':')) {
  //   console.log('skip')
  //   getJoke()
  // }

  let newJoke = joke.split();

  if (newJoke[newJoke.length - 1] === '') {
    console.log('pop' + newJoke.pop());
  }
  if (newJoke.length > 2) {
    getJoke();
  }
  console.log(newJoke);
  // if(newJoke.length === 2 //|| (newJoke.length === 3 && newJoke[2] === '')//|| newJoke[1] !== undefined
  //   ){
  //   console.log('here')
  // let opening = newJoke[0];

  // let punchLine = newJoke[1]
  // const formattedJoke = formatJoke(opening, punchLine)// [opening, punchLine]
  // return formattedJoke
  // }
  // else {
  //   // if (newJoke.includes(''))
  //   // console.log('undefined')
  //   // else console.log('too many')
  //   // return newJoke
  //    getJoke();
  // }
  return newJoke;
};

const saveJoke = () => {

  console.log(jokeContainer.innerText)
  window.localStorage.setItem(window.localStorage.length - 1, jokeContainer.innerText);
};

const copyJoke = () => {

  let message = document.getElementsByClassName('toCopy')[0].innerHTML
  console.log(typeof message);
  navigator.clipboard.writeText(message).then(() => {
    alert("Copied!")
  })
  

}

jokeButton.addEventListener('click', getJoke);
saveButton.addEventListener('click', saveJoke);
copyButton.addEventListener('click', copyJoke);
// getJoke();
