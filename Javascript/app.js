    // Fetch Dino data from dino.JSON 
function dataGrabber() {
fetch("dino.json")
    .then(response => response.json())
    .then(data => dinoArray = data.Dinos)
    .then(dinoArray => {
        dinoTiles(humanCreator(), dinoArray)

  })
}

    // Create Human Object

class Human {
    constructor(name, height, weight, diet) {
        this.name = document.getElementById('name').value,
        this.height = (parseInt(document.getElementById('feet').value) * 12 + parseInt(document.getElementById('inches').value)).toString(),
        this.weight = document.getElementById('weight').value,
        this.diet = document.querySelector('#diet').value
    }
}

function humanCreator() {
    let newHuman = new Human()
    return newHuman
}

    // Create a new human when clicking Compare me

const compareMe = document.getElementById('btn')
compareMe.addEventListener('click', dataGrabber)

    // Use IIFE to get human data from form

// Random Generator Function

function randomGen(human, dinosaur) {
    let randomNum = Math.floor(Math.random()*3)
    let funFact = '';
    if (randomNum === 0) {
        funFact = compareDiet(human, dinosaur)
    } if (randomNum === 1) {
        funFact = compareHeight(human, dinosaur)
    } if (randomNum === 2) {
        funFact = compareWeight(human, dinosaur)
    }
    return funFact
}
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.

function compareDiet(human, dinosaur) {
    let fact = '';
        if(dinosaur.species === 'Pigeon') {
            fact = 'All birds are Dinosaurs.'
        } else if (human.diet.toLowerCase() === dinosaur.diet){
            fact = `You and ${dinosaur.species} should share meals`
        } else if (human.diet.toLowerCase() != dinosaur.diet) {
            fact = `${dinosaur.species} does not share your diet`
        }
        return fact
}
 
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

function compareHeight(human, dinosaur) {
    let fact ='';
        if(dinosaur.species === 'Pigeon') {
            fact = 'All birds are Dinosaurs.'
        } else if (human.height < dinosaur.height) {
            fact = `${dinosaur.species} is ${dinosaur.height - human.height} inches taller than you`
        } else if (human.height > dinosaur.height) {
            fact = `${dinosaur.species} is ${human.height - dinosaur.height} inches shorter than you`
        }
        return fact
}

    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.

function compareWeight(human, dinosaur) {
    let fact = '';
        if (dinosaur.species === 'Pigeon') {
            fact = 'All birds are Dinosaurs.'
        } else if (human.weight < dinosaur.weight) {
            fact = `${dinosaur.species} is ${dinosaur.weight - human.weight} lbs heavier than you`
        } else if (human.weight > dinosaur.weight) {
            fact = `${dinosaur.species} is ${human.weight - dinosaur.weight} lbs lighter than you`
        }
        return fact
}

    // Generate Tiles for each Dino in Array

function dinoTiles(human, dinosaur) {
    const dinoGrid = document.getElementById('grid')
    // Make human tile
    let humanTile = document.createElement('div')
        humanTile.classList.add('grid-item')
        humanTile.innerHTML = `<h3>${human.name}</h3>
                               <img src='images/human.png'>`
    // generate dino tiles from dinoArray Data
    for (let i = 0; i < dinosaur.length; i++) {
        let randomFact = randomGen(human, dinosaur[i])
        let tile = document.createElement('div')
        tile.classList.add('grid-item')
        tile.innerHTML = `<h3>${dinosaur[i].species}</h3>
                          <p>${randomFact}</p>
                          <img src='images/${dinosaur[i].species}.png'>`
        dinoGrid.appendChild(tile)
        if (i === 3) {
            dinoGrid.appendChild(humanTile)
        }
    }
}

        // Add tiles to DOM

    // Remove form from screen

function hideForm() {
    const magicForm = document.getElementById('dino-compare')
    magicForm.style.display = "none"
}

compareMe.addEventListener('click',hideForm)

// On button click, prepare and display infographic