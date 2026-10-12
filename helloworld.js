
function getComputerChoice (min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let resultComp = getComputerChoice(1,3);
    if (resultComp === 1) {
        alert ("Rock"); 
    } else if (resultComp === 2) {
            alert ("Paper"); 
     } else {
                alert ("Scissors");
            }

let resultHum = prompt("Enter a number from 1 to 3!");
if (resultHum == 1) {
    alert ("Rock");
}   else if (resultHum == 2) {
    alert ("Paper");
}   else if (resultHum == 3) {
    alert ("Scissors");
} 

let humanScore = 0;
let computerScore = 0;

