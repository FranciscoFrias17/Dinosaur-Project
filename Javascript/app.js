    // Fetch Dino data from dino.JSON 
function dataGrabber() {
    fetch("dino.json")
    .then(response => response.json())
    .then(data => dinoArray = data.Dinos)
    .then(dinoArray => {
        console.log(dinoArray)
        compareDiet(humanCreator(), dinoArray)
        compareHeight(humanCreator(), dinoArray)
        compareWeight(humanCreator(), dinoArray)
        dinoTiles(humanCreator(), dinoArray)
        console.log(dinoArray)
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
    console.log(newHuman)
    return newHuman
}

    // Create a new human when clicking Compare me

const compareMe = document.getElementById('btn')
compareMe.addEventListener('click', dataGrabber)

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

function compareDiet(human, dinosaur) {
    for (let i = 0; i < dinosaur.length; i++) {
        if(human.diet.toLowerCase() === dinosaur[i].diet) {
            console.log(dinosaur[i].species)
        } 
    }
}
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

function compareHeight(human, dinosaur) {
    for (let i = 0; i < dinosaur.length; i++) {
        if(human.height !== dinosaur[i].height) {
            console.log('Only pigeons are shorter than humans')
        }
    }
}

    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.

function compareWeight(human, dinosaur) {
    for(let i = 0; i < dinosaur.length; i++) {
        if(human.weight !== dinosaur[i].weight) {
            console.log('All dinosaurs except pigeons are heavier than humans')
        }
    }
}

    // Generate Tiles for each Dino in Array
  
function dinoTiles(human, dinosaur) {
    const dinoGrid = document.getElementById('grid')
    let humanTile = document.createElement('div')
        humanTile.classList.add('grid-item')
        humanTile.innerHTML = `<h3>${human.name}</h3>
                               <img src='images/human.png'>`
    dinoGrid.appendChild(humanTile)
    for (let i = 0; i < dinosaur.length; i++) {
        let tile = document.createElement('div')
        tile.classList.add('grid-item')
        tile.innerHTML = `<h3>${dinosaur[i].species}</h3>
                          <p>${dinosaur[i].fact}</p>
                          <img src='images/${dinosaur[i].species}.png'>`
        dinoGrid.appendChild(tile)
        let tiles = Array.from(document.getElementsByClassName('grid-item'))
        tiles.splice(0, 4, humanTile)
        console.log(tiles)
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
