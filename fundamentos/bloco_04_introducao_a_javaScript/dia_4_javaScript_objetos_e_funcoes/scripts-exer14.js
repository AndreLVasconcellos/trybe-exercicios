function catAndMouse(mouse, cat1, cat2) {
    
    if (Math.abs(cat2 - mouse) === 2 && Math.abs(cat1 - mouse) === 3 ) {
        return 'cat2'
    } else if (Math.abs(mouse - cat1) === 6 &&  Math.abs(mouse - cat2) === 12) {
        return 'cat1'
    } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
        return 'os gatos trombam e o rato foge'
    } 
}

console.log(catAndMouse(10, 4, 22));
console.log(catAndMouse(10, 4, 22));


