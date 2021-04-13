/* 
for a range of numbers (1 .. 100):
    if the number is div evenly by:
    3 --> fizz
    5 --> buzz
    3 & 5 --> fizzBuzz
    otherwise -> number
    1
    2
    fizz
    4
    buzz
    ..
    14
    fizzBuzz
    ..
    100

1. Bronze if solved with for loop and if statement 
2. Silver if you solve it with a while loop and switch
3. Gold if you solve it with a for loop and ternaries
*/

// let i = 0;
// while(i <= 10){
//     console.log(i)
//     i++
// }
// for(let x = 0; x <= 10; x++){
//     for(let y = 0; y <= 10; y++) {
//         console.log(x, y);
//     }
// }

for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('fizzBuzz');
    } else if (l % 3 === 0 && l % 5 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0){
        console.log('buzz');
    } else {
    console.log(i);
    }
}

let l = 1;
while (l <= 100){
    switch(true){
        case l % 3 === 0 && l % 5 === 0:
            console.log('fizzBuzz');
            break;
        case l % 3 === 0:
            console.log('fizz');
            break;
        case l % 5 ===0:
            console.log('buzz');
        default:
            console.log(l);
    }
    l++
}

for (let i = 1; i <= 100; i++){
    i % 3 === 0 && i % 5 === 0 ? console.log('fizzBuzz')
    : i % 3 === 0 ? console.log('fizz')
    : i % 5 === 0 ? console.log('buzz') 
    : console.log(i);
}
