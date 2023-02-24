import './style.css'

const getDogButton = document.querySelector('#random-dog');
const petImage = document.querySelector('#random-pet-image');
const getCatButton = document.querySelector('#random-cat');
const surpriseMeButton = document.querySelector('#surprise-me');

getDogButton.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((data) => {
            const petUrl = data.message;
            petImage.src = petUrl;
        })
})

getCatButton.addEventListener('click', () => {
    fetch('https://aws.random.cat/meow')
        .then((res) => res.json())
        .then((data) => {
            const petUrl = data.file;
            petImage.src = petUrl;
        })
})

surpriseMeButton.addEventListener('click', () => {
    Promise.any([
        fetch("https://aws.random.cat/meow"),
        fetch("https://dog.ceo/api/breeds/image/random"),
      ])
      .then((res) => res.json())
      .then((data) => {
        const petUrl = data.file || data.message;
        petImage.src = petUrl;
      })
})