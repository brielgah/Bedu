//Reto 1
function power(base,exponent)
{
    let power = 1;
    while(exponent--)
        power*=base;
    return power;
}

console.log(power(9,2))

//Reto 2
let getGreaterNumber = (numbers) => {
    let greatest = -Infinity;
    for (const number of numbers) {
        greatest = number > greatest ? number : greatest;
    }
    return greatest;
}

//Reto 3
let fibonnaci = (n) =>{
    if(n <= 2)
    {
        console.log(n-1 + ' ');    
    }
    let current = 1;
    let previous = 0;
    while(n--)
    {
        current+=previous;
        console.log(current + ' ');
        previous = current-previous;
    }
}