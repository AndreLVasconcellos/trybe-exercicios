window.onload = function() {

let h1 = document.createElement('h1')
h1.id = 'title';
document.body.appendChild(h1);
h1.innerHTML = 'Paleta de Cores';

let mainContent = document.createElement('div');
mainContent.id = 'color-palette';
document.body.appendChild(mainContent);

let centerContent = document.createElement('div');
centerContent.className = 'color';
centerContent.classList.add('selected');
centerContent.style.backgroundColor = 'rgb(0, 0, 0)';
mainContent.appendChild(centerContent);

let centerContent2 = document.createElement('div');
centerContent2.className = 'color';
centerContent2.style.backgroundColor = 'rgb(255, 0, 0)';
mainContent.appendChild(centerContent2);

let centerContent3 = document.createElement('div');
centerContent3.className = 'color';
centerContent3.style.backgroundColor = 'rgb(0, 0, 255)';
mainContent.appendChild(centerContent3);

let centerContent4 = document.createElement('div');
centerContent4.className = 'color';
centerContent4.style.backgroundColor = 'rgb(0, 128, 0)';
mainContent.appendChild(centerContent4);

let buttonRandomColor = document.createElement('button');
buttonRandomColor.id = 'button-random-color';
buttonRandomColor.innerHTML = 'Cores aleatórias';
document.body.appendChild(buttonRandomColor);

let buttonClearBoard = document.createElement('button');
buttonClearBoard.id = 'clear-board';
buttonClearBoard.innerHTML = 'Limpar';
document.body.appendChild(buttonClearBoard);

let secondMainContend = document.createElement('div');
secondMainContend.id = 'pixel-board';
document.body.appendChild(secondMainContend);



function changeColors() {
   let getButtonRandomColor = document.querySelector('#button-random-color');
   let getcenterContents = document.querySelectorAll('.color');
   let colors = [];
   let backgroundColor1 = 'black' 
   let backgroundColor2 = 'red'
   let backgroundColor3 = 'blue'
   let backgroundColor4 = 'green'

   getButtonRandomColor.addEventListener('click', function() {
    for (let index = 1; index < getcenterContents.length; index += 1) {
        let newBackgroundColor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
        if (getcenterContents[index].style.backgroundColor === newBackgroundColor);
        getcenterContents[index].style.backgroundColor = newBackgroundColor;
        console.log(getcenterContents[index].style.backgroundColor);
        colors.push(getcenterContents[index].style.backgroundColor);

        // JSON.stringify(localStorage.setItem('colorPalette', getcenterContents[index].style.backgroundColor));
        // JSON.stringify(localStorage.setItem('colorPalette', getcenterContents[index].style.backgroundColor));
        // JSON.stringify(localStorage.setItem('colorPalette', getcenterContents[index].style.backgroundColor));
    }
    localStorage.setItem('colorPalette', JSON.stringify(colors));
    colors = [];
   });
   
}
changeColors();

for (let index = 0; index < 25; index += 1) {
    let createBox = document.createElement('div');
    createBox.className = 'pixel';
    secondMainContend.appendChild(createBox);
}



let recoveryColors = JSON.parse(localStorage.getItem('colorPalette'));
let arr = recoveryColors || [];
console.log(recoveryColors);
let contador = 1;
for (let i = 0; i < arr.length; i += 1) {
document.querySelectorAll('div.color')[contador].style.backgroundColor = recoveryColors[i];
contador += 1;
}



// function paintColors() {
//     let selectedColor = document.getElementsByClassName('color selected');
//     let colorPalette = document.querySelector('#color-palette');
//     let myColors = document.querySelector('.color');
//     let colorcont =1;
//     colorPalette.addEventListener('click', function() {
//         if (colorcont === 1) {
//             event.target.className = 'color selected';
//             colorcont = 2;
//         } else {
//             event.target.className = 'color';
//             colorcont = 1;
//         }
//     });
// }
// paintColors();

let firstDiv = document.querySelectorAll('div.color')[0];
let seconDiv = document.querySelectorAll('div.color')[1];
let thirDLi = document.querySelectorAll('div.color')[2];
let fourthDiv = document.querySelectorAll('div.color')[3];


function Changecolors(event) {
    let selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
    
  }
  
  firstDiv.addEventListener('click', Changecolors);
  seconDiv.addEventListener('click', Changecolors);
  thirDLi.addEventListener('click', Changecolors);
  fourthDiv.addEventListener('click', Changecolors);
  





  function setColor() {
    let selectedColor = document.getElementsByClassName('color selected');
    let pixelBoxs = document.querySelector('#pixel-board');
    let colorPalette = document.querySelector('.color');
    let pixelColor = colorPalette.style.backgroundColor;
    let getcenterPixels = document.querySelectorAll('.pixel');
    let positionAndColor = [];
    
    pixelBoxs.addEventListener('click', function(event) {
           console.log(event.target);

        
            let color = selectedColor[0].style.backgroundColor;
            event.target.style.backgroundColor = color;
        
        
        
        for (let index = 0; index < getcenterPixels.length; index += 1) {
            positionAndColor.push(getcenterPixels[index].style.backgroundColor);    
        }
        console.log(positionAndColor);
        console.log(JSON.stringify(positionAndColor));
        localStorage.setItem('pixelBoard', JSON.stringify(positionAndColor));
        positionAndColor = [];
    });
}

setColor();
















function clearBoard() {
    let getbuttonClearBoard = document.querySelector('#clear-board');
    let getcenterPixels = document.querySelectorAll('.pixel');
    
 
 
    getbuttonClearBoard.addEventListener('click', function() {
     for (let index = 0; index < getcenterPixels.length; index += 1) {
         let newBackgroundColor = "rgb(255, 255, 255)"
         if (getcenterPixels[index].style.backgroundColor !== newBackgroundColor);
         getcenterPixels[index].style.backgroundColor = newBackgroundColor;
        
     }
    localStorage.setItem('pixelBoard', 1);
    });
}

clearBoard();



let recoveryPositionColors = JSON.parse(localStorage.getItem('pixelBoard'));
let arr2 = recoveryPositionColors || [];
for (let i = 0; i < arr2.length; i += 1) {
document.querySelectorAll('.pixel')[i].style.backgroundColor = arr2[i];
}


}

// let getcenterPixels = document.querySelectorAll('.pixel');
// let positionAndColor = [];
// for (let index = 0; index < getcenterPixels.length; index += 1) {
//     positionAndColor.push(getcenterPixels[index].style.backgroundColor);    
// }
// localStorage.setItem('pixelBoard', JSON.stringify(positionAndColor));

 // JSON.stringify(localStorage.setItem('colorPalette', getcenterContents[index].style.backgroundColor));
 // JSON.stringify(localStorage.setItem('colorPalette', getcenterContents[index].style.backgroundColor));
 // JSON.stringify(localStorage.setItem('colorPalette', getcenterContents[index].style.backgroundColor));





// function setColor() {
//     let selectedColor = document.getElementsByClassName('color selected');
//     let pixelBoxs = document.querySelector('#pixel-board');
//     let taskDiv = document.querySelector('.pixel');
//     let taskColor = taskDiv.style.backgroundColor;
    
//     pixelBoxs.addEventListener('click', function() {
//         let eventTargetColor = event.target.style.backgroundColor;
//         if (selectedColor.length > 0 && eventTargetColor !== taskColor) {
//             let color = selectedColor[0].style.backgroundColor;
//             event.target.style.backgroundColor = color;
//         } 
//         else if (eventTargetColor === taskColor) {
//             event.target.style.backgroundColor = 'rgb(119,119,119)'
//         } 
        
//     });
// }

// setColor();


// document.querySelectorAll('div.color')[1].style.backgroundColor = localStorage.getItem('1');
// document.querySelectorAll('div.color')[2].style.backgroundColor = localStorage.getItem('2');
// document.querySelectorAll('div.color')[3].style.backgroundColor = localStorage.getItem('3');

// function saveColor () {
//     let colorElement = document.getElementsByClassName('color')
//     let colors = [];
//     for (let i = 1)
// }











// localStorage.setItem("pixel-color", newBackgroundColor)