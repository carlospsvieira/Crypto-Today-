// const fetch = require('node-fetch');

const list = document.querySelector('ul');

const appendList = (data) => {
  const tenFirst = data.slice(0, 10);
  tenFirst.forEach(({ name, symbol, priceUsd }) => {
    const line = document.createElement('li');
    list.appendChild(line);
    // line.className = 'list-group-item';
    line.append(`${name} (${symbol}): USD$ ${Number(priceUsd).toFixed(2)}`);
  });
};

const fetchCoins = () => {
  const url = 'https://api.coincap.io/v2/assets';

  fetch(url)
    .then((response) => response.json())
    .then(({ data }) => appendList(data))
    .catch((error) => error);
};

fetchCoins();