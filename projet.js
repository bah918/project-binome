// ca marche

var grid = [
    ["R", " ", " ", " ", "N", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "E"],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", "S", " ", " ", " ", " ", " "]
];

var rover = [{
    direction: "N",
    x: 0,
    y: 0,
}];

// fonction pour tourner a droite
var tab = [];
function turnRight(rover) {
    tab = rover.map(direction.join("E"));
    console.log(rover);
}

// fonction pour tourner a gauche
function turnLeft(rover) {

}

console.log(rover);
turnRight(rover);