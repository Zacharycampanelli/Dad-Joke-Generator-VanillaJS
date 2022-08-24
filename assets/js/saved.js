const jokeContainer = document.querySelector('container');

const loadJokes = () => {
  // for (item in localStorage) {
  //     let vari = JSON.parse(window.localStorage.getItem(item))
  //     console.log(vari)
  // }
  
  const items = { ...localStorage };
  console.log(items);
  console.log(items.length);
  for (item in items) console.log(items[item]);
//   let joke = document.createElement('p');
//   joke.textContent = items[item];
  jokeContainer.appendChild(items[item]);
};

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
        let storageItem = localStorage.getItem(keys[i])
        console.log(storageItem);
        console.log(jokeContainer)
    }
    for(value in values)
    console.log(values[value]);
    jokeContainer.appendChild(values);
    return values;
}

function allStorage2() {
    for (let [key, value] of Object.entries(localStorage)) {
        console.log(`${value}`);
        jokeContainer.appendChild(value);
    }
}
allStorage2();
//loadJokes();
