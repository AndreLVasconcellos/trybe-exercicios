const mainContent = document.createElement('div');
document.body.appendChild(mainContent);

const mainText = document.createElement('span');
mainText.id = 'text';
mainText.innerHTML = 0;
mainContent.appendChild(mainText);

const btn = document.createElement('button');
btn.id = 'button-test';
btn.innerHTML = 'click aqui';
document.body.appendChild(btn);

let clickCount = 0;
btn.addEventListener('click', () => mainText.innerHTML = clickCount += 1);