<!DOCTYPE html> 
<!--This is a webpage made to fulfil assignment for CS102, 
    The Building Blocks for your Space Base - Functions
Sanyerlis Camacaro     sancamac@uat.edu-->
<!-- UAT Space Casino 
    It is the year 2032 and UAT Space Program had a successful Blast OFF.
    The UAT astronauts have landed in their campsites in Planet, Mars. After a long day of 
    exploration and research, the UAT astronauts relax by playing the UAT Space Craps
    game, where anyone can be a winner as long as you keep trying. 
-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>UAT Space Program </title>
    <link rel="stylesheet" href="style.css">
</head>

  <h1><img src="UATspaceLogo-1.jpg"></h1> 
   <h1> 
       UAT Space Program
         </h1> 
                
 <h2><script>
    //Testing line
    document.write("Mission Control");

</script></h2>
<!--Second Testing line-->
<h2><p>Are You Ready For Blastoff?</p><br></h2>
<!--br creates a break in the lines to be represented on the website-->
<br>
<h1><p id="countdownTimer">Click to Start Countdown</p>
    <!--button inserts a clickable button to start blast off-->
    <button onclick="startCountdown();">Start</button>
    <button>Stop</button></h1>

   
      <!--display game name and craps results-->
      <h3 id="crapsResults">UAT Space Craps Game</h3>
      <br>
      <!--display die results-->
      Die1 is:<div id="die1Res">Needs to be rolled</div><br>
      Die2 is:<div id="die2Res">Needs to be rolled</div><br>
      Sum of Die1+Die2 is:<div id="sumRes">Needs to be rolled</div><br>
      <!--create button to play craps-->
      <button class="lgButton" onclick="playCraps();">Press To Start Game</button>

<!--linking javascript file-->
<script src="Building Blocks.js"></script>

</body>
</html>

body 
{
    background-image: url(rocketblastoff.jpg);
    image-rendering: optimizeQuality;
    background-color: rgb(103, 102, 102);
}
h1 {
    color: rgb(28, 27, 27);
    font-style: normal;
    font-weight: bold;
    text-align: center;
    font-family:  'Arial Narrow'
  }
  h2 { color: rgb(114, 38, 42);
    font-style: normal;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
    text-shadow: 2px 2px #000000;
  }
  
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
