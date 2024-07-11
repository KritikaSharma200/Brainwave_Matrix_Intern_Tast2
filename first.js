let gameNumber = 25;
let userNumber = prompt("Guess the gameNumber: ");
while(userNumber!=gameNumber){
    userNumber=prompt("You have entered the wrong number try again: ")
}

console.log("You have entered the right number!")