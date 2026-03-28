//  1) print number from 1 to 10 using for loop
 
// for (let i = 0; i <=10; i++) {
//   console.log(i)

// }

// 2 ) print number from 10 to 1 using while loop
// let i = 10;
// while (i > 0) {
//     console.log(i);
//     i--;
// }

//3)  print even number 1 to 20 using for loop

// for(let i =1; i<=20; i++){
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 4) print odd number 1 to 15 using while loop

// let i = 1;
// while (i < 16) {
//     if (i%2===1) {
//     console.log(i);
//     }
//     i++;
// }

//5)  print the multipication table of 5 (5 x 1 = 5 ... 5 x 10 = 50)

// for(let i =1; i<=10; i++){
//   console.log(`5 * ${i}   =  ${ 5*i}`)
// }

// 6) find the sum of numbers 1 to 100 using loop
// let sum = 0;
// for(let i =1; i<101; i++){
// sum = sum+ i;
// }
// console.log(sum)

// 7)  print the all number 1 to 50 that are divisable by 3

// for( i=1; i<51; i++){
// if (i%3===0) {
//     console.log(i);
// }
// }

// 8) ask the user for a number and print whether each number from 1 to that number is even or odd.

// let val = prompt( "please enter your number ");

// for (let i = 1; i < val; i++) {
//  if (i%2===0) {
//     console.log(`${i} is even`)
//  }
//     else{
    //         console.log(`${i} is odd`)
    //     }
    
    // }
    
// 9)  count how many numbers between 1 to 100 are divisable by both 3 and 5
   
    // for( i=1; i<=100; i++){
    // if (i%3===0 && i%5===0) {
    //     console.log(i);
    // }
    // }
    
    //  1) stop at first multiple of 7 
    // write a loop for 1 to 100
    // .print each numbers
    // stop completly when finds the first number divisable by 7
    
    // for( i=1; i<=100; i++){
    //     console.log(i);
    // if (i%7===0 ) {
    //     break;
    // }
    // }
    
    // skip multiple of 3 
    // write a loop for 1 to 20 that:
    // skips numbers divisable by 3 
    // print all others numbers
    
    // use continue
    

    // for( i=1; i<=20; i++){
        //     if (i%3===0 ) {
            //         continue;
            //     }
            //     console.log(i);
            // }


            // 3) print first 5 odd numbers
            // write a loop form 1 to 100 
    // priny only 5 odd number 
    //  then stop the loop
    
    let count = 0;
    for( i=1; i<=100; i++){
        if (i%2===1 ) {
            count++;
            console.log(i);  
        }
        if (count===5) {
            break;
        }
    }