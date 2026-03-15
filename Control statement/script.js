// function getGrade(score) {
//   if (score >= 90 && score <= 100) {
//     return "A";
//   } else if (score >= 80 && score <= 89) {
//     return "B";
//   } else if (score >= 70 && score <= 79) {
//     return "C";
//   } else if (score >= 60 && score <= 69) {
//     return "D";
//   } else if (score >= 33 && score <= 59) {
//     return "E";
//   } else if (score >= 0 && score <= 32) {
//     return "fail";
//   } else {
//     return "invalid marks";
//   }
// }

// early return pattern

// function getGrade(score) {
//   if (score >= 90 && score <= 100) return "A";
//   if (score >= 80 && score <= 89) return "B";
//   if (score >= 70 && score <= 79) return "C";
//   if (score >= 60 && score <= 69) return "D";
//   if (score >= 33 && score <= 59) return "E";
//   if (score >= 0 && score <= 32) return "fail";
//   return "invalid marks";
// }

// console.log(getGrade(0));


// Rock-paper-scissors logic 

function rps(user, computer) {
    if (user === computer) return " draw";
    if (user === "rock" && computer === "scissor") return "user";
    if (user === "scissor" && computer === "paper") return "user";
    if (user === "paper" && computer === "rock") return "user";
    return "computer"
       
}
 console.log(rps("scissor","rock"))