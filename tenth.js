let gameNum = 80 ;
let userNum = prompt("Enter Your Number");
while (userNum != gameNum) {
    userNum =prompt("You Guess The Wrong Number :Guess Again");
}
swal({
    title: "GAME SCORE",
    text: "YOU WIN THE GAME! 😀",
    timer: 5000
  });