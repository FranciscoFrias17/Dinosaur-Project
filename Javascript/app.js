    // Create Dino Constructor
class Dinosaur {
    constructor(species, weight, height, diet, fact, when, where) {
        this.species = species;
        this.height = height;
        this.weight = weight;
        this.diet = diet;
        this.fact = fact;
        this.when = when;
        this.where = where;
    }
}    

fetch("dino.json")
  .then(response => response.json())
  .then(data => dinoArray = dinoCreator(data))
  .then(dinoArray => {
        compareDiet(humanCreator, dinoArray)
  })
    // Create Dino Objects

function dinoCreator(element) {
    let dinoData = element.Dinos
    newDinoArray = Array(dinoData.length)
      for (let i = 0; i < dinoData.length; i++) {
          newDinoArray[i] = new Dinosaur(dinoData[i].species, dinoData[i].weight, dinoData[i].height, dinoData[i].diet, dinoData[i].fact, dinoData[i].when, dinoData[i].where)  
      }
      return newDinoArray
}

console.log()
    // Create Human Object

class Human {
    constructor(name, height, weight, diet) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.diet = diet;
    }
}    
    
function humanCreator() {
    return new Human(document.getElementById('name'), document.getElementById('height'), document.getElementById('weight'), document.getElementById('diet'))
}
    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

function compareDiet(human, dinosaur) {
    let humanDiet = human.diet;
    for (i = 0; i < dinosaur.length; i++) {
        if(humanDiet === dinosaur[i].diet) {
            console.log(dinosaur[i].species)
        } 
    }
}
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
