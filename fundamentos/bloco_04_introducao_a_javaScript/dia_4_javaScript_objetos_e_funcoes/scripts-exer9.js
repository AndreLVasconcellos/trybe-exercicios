function footballPoints(win, ties) {
    win *=3;
    return win + ties;
}

console.log(footballPoints(14, 8));