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
};

// fonction pour se tourner a gauche
function turnLeft(rover) {
    if (rover.direction === "N") {
        rover.direction = "W";
    } else if (rover.direction === "W") {
        rover.direction = "S";
    } else if (rover.direction === "S") {
        rover.direction = "E";
    } else if (rover.direction === "E") {
        rover.direction = "N";
    }
    console.log(rover);
}

// fonction pour tourner a droite
// function turnRight(rover) {
//     if (rover.direction === "N") {
//         rover.direction = "E";
//     } else if (rover.direction === "E") {
//         rover.direction = "S";
//     } else if (rover.direction === "S") {
//         rover.direction = "W";
//     } else if (rover.direction === "W") {
//         rover.direction = "N";
//     }
//     console.log(rover);
// }

function turnRight(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "W";
            break;
        case "W":
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
    } else if (rover.direction === "W") {
        rover.x = rover.x - 1;
    }
    console.log(rover)
}

console.log(rover);
turnLeft(rover);// tourne de 45deg vers la gauche
turnLeft(rover);// tourne de 45deg vers la gauche
moveForward(rover)
turnLeft(rover);// tourne de 45deg vers la gauche
moveForward(rover)