// Logic: Divide number by 2. If there is no remainder, then it's even, else it's odd.

function evenOrOdd (number) {
    
    if (number % 2 == 0) {
        return "Even"
    }  

    else {
        return "Odd"
    }
;}


console.log(evenOrOdd(14))