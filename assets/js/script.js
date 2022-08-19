const jokeContainer = document.getElementById('container');

const getJoke = async () => {
  const url = 'https://icanhazdadjoke.com/';
  try {
    const response = await fetch(url, { method: 'GET', headers: { accept: 'application/json' } });

    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getJoke();
