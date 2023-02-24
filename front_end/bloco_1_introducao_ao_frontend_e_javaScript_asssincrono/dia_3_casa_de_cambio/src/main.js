import Swal from 'sweetalert2';
import './style.css';

const searchButton = document.querySelector('.search-btn');
const coinInput = document.querySelector('#coin-input');
const coinsList = document.querySelector('.coins');
const coinsTitle = document.querySelector('.coins-title');

function fetchAPI(coin) {
    const url = `https://api.exchangerate.host/latest?base=${coin}`;
    return fetch(url)
    .then((response) => response.json())
    .then((data) => {
        if(data.base !== coin.toUpperCase()) {
            throw new Error('Moeda iválida!!!!!')
        }
        return data.rates;
    })
}

function renderCoins(coins) {
    coinsList.innerHTML = '';
    const coinsArray = Object.entries(coins);
    coinsArray.forEach((coin) => {
        const [coinName, value] = coin;
        const li = document.createElement('li');
        li.innerHTML = `${coinName} - `;

        const span = document.createElement('span');
        span.innerHTML = value;
        span.className = 'yellow';
        li.appendChild(span);
        coinsList.appendChild(li);
    });
}

function renderTitle(coin) {
    coinsTitle.innerHTML = `Valores referentes a 1 ${coin.toUpperCase()}:`;
}

function handleSearch() {
    const coin = coinInput.value;
    if(!coin) {
            Swal.fire({
            icon: 'error',
            title: 'Oppss!!!',
            text: 'seu burro digitar uma moeda valida!!'
        })
        return;
    }
    renderTitle(coin);
    fetchAPI(coin)
    .then(renderCoins)
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oppss!!!',
            text: error.message
        })
    })
}

searchButton.addEventListener('click', handleSearch);