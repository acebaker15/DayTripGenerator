console.log("Hello World!");

let primoDestinations = ["Seattle", "Paris", "Luckenbach, TX", "Portland", "San Diego", "Bozeman"];

function randomGenerator(myArray){
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)];
    return randomChoice
}
let randomDestination = randomGenerator(primoDestinations);
console.log(randomDestination);

function destinationGenerator(){
    let userIsHappy = false;

    while (userIsHappy === false){
        let randomSpot = randomGenerator(primoDestinations);
        let userResponse = prompt(`Your random generated destination ${randomDestination}. Are you OK with that?`);
        if (userResponse === 'Yes') {
            alert(`Enjoy ${randomDestination}`);
            userIsHappy === true
        }
        else if (userResponse === "No")
        userIsHappy === false
    
    }

}

//

let primoEats = ["Fish and Chips", "Fondue", "BBQ", "Voodoo Doughnuts", "Lemon Grass", "Rocky Mountain Oysters"];

function randomGenerator(myArray){
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)];
    return randomChoice
}
let randomFood = randomGenerator(primoEats);
console.log(randomFood);

//

let primoTransports = ["Bike", "Foot Mobile", "Horseback", "Segway", "Uber", "Pny Express"];

function randomGenerator(myArray){
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)];
    return randomChoice
}
let randomRide = randomGenerator(primoTransports);
console.log(randomRide);

//

let primoEntertainment = ["Everclear", "Luciano Pavarotti", "Willie Nelson", "Trailblazers", "UFC", "Bar Fights"];

function randomGenerator(myArray){
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)];
    return randomChoice
}
let randomJams = randomGenerator(primoEntertainment);
console.log(randomJams);

//