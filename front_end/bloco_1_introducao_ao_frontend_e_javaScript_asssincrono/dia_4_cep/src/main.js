import getAddressFromCep from './getAddressFromCep';

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('pre');

buttonEl.addEventListener('click', handleClick);

export async function handleClick() {
  const cep = inputEl.value;

  try {
    const adressData = await getAddressFromCep(cep);
    preEl.innerHTML = JSON.stringify(adressData);
  } catch (error) {
    alert(error.message);
  }
}