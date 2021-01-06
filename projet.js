// ca marche

var grid = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [],
};

// fonction pour se tourner a gauche
function turnLeft(rover) {
    if (rover.direction === "N") {
        rover.direction = "O";
    } else if (rover.direction === "O") {
        rover.direction = "S";
    } else if (rover.direction === "S") {
        rover.direction = "E";
    } else if (rover.direction === "E") {
        rover.direction = "N";
    }
    console.log(rover);
}

function turnRight(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "O";
            break;
        case "O":
            rover.direction = "N";
            break;
    }
    console.log(rover);
}

function moveForward(rover) {
    if (rover.direction === "N") {
        rover.y += 1;
    } else if (rover.direction === "S") {
        rover.y = rover.y - 1;
    } else if (rover.direction === "E") {
        rover.x += 1;
    } else if (rover.direction === "O") {
        rover.x = rover.x - 1;
    }
    console.log(rover)
}

function pilotRover(string) {
    var mouvement = [];
    mouvement = string.toUpperCase().split("");
    for (var i = 0; i < mouvement.length; i++) {
        if (mouvement[i] === "L") {
            turnLeft(rover);
            console.log("+1 à gauche");
        } else if (mouvement[i] === "R") {
            turnRight(rover);
            console.log("+1 à droite");
        } else if (mouvement[i] === "F") {
            moveForward(rover)
        } else {
            console.log("je sais pas !")
        }
    }
    console.log(mouvement)
}

pilotRover("Rrrff");