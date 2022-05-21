//Countdown Timer for Blast Off 10-1 seconds. 
function startCountdown() {
    var count = 10;

    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;
    //Sets a timer to run 
    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        //Decreases count by one
        count = count - 1;
        //Waits  1 second before displaying results
    }, 1000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  2 seconds before displaying results
    }, 2000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  3 seconds before displaying results
    }, 3000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  4 seconds before displaying results
    }, 4000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  5 seconds before displaying results
    }, 5000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  6 seconds before displaying results
    }, 6000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  7 seconds before displaying results
    }, 7000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  8 seconds before displaying results
    }, 8000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  9 seconds before displaying results
    }, 9000);

    setTimeout(function () {
        //after 1 sec, will print "BLAST OFF!!!"
        document.getElementById("countdownTimer").innerHTML = "BLAST OFF!!! ";
        //Waits  10 seconds before displaying results
    }, 10000);
}

function playCraps() {
    //create die1 variable
    var die1;
    //create die2 variable
    var die2;
    //create sum of die1 and die2 variable
    var sum;
    //make die1 roll between 0-6 and round up for whole numbers
    die1 = Math.ceil(Math.random() * 6);
    //make die2 roll between 0-6 and round up for whole numbers
    die2 = Math.ceil(Math.random() * 6);
    //create sum formula
    sum = die1 + die2;
    //show rolled die1 value
    document.getElementById("die1Res").innerHTML = die1;
    //show rolled die2 value
    document.getElementById("die2Res").innerHTML = die2;
    //show rolled sum of die1 and 2 value
    document.getElementById("sumRes").innerHTML = sum;
    //lose if sum is 7 or 11
    if (sum == 7 || sum == 11) {
        //show that user has lost
        document.getElementById("crapsResults").innerHTML = "Oh, no, You Lose!!!";
    }
    //win if die 1 and 2 are the same and they are even (%2=0 means it divides by 2 and has no remainder=even)
    else if (die1 == die2 && die1 % 2 == 0) {
        //show that user rolled even doubles and won
        document.getElementById("crapsResults").innerHTML = "Yay! DOUBLES, YOU WIN!!!";
    }
    //else means if none of the previous if statements are true
    else {
        //Allow user to play again
        document.getElementById("crapsResults").innerHTML = "Please try again.";

    }


}