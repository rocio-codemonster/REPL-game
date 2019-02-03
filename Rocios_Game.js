const readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');

console.log("Hello " + userName + ". Want to play a game? ");
let answer= readlineSync.question( "Answer: 1-yes, 2-no\n" );
if (answer=="1") {
    console.log( "There are 3 doors, which Color do you want to go through? \n" +
    "One takes you outside, one takes you to a tunnel, and another one takes you to a hungry tiger");
    let doorChoice = readlineSync.question( "Options: 1-Red, 2-Blue, 3-Yellow\n" );

    if (doorChoice=="1") {
        console.log( "The tiger walking towards you, what is your reaction?" );
        let tigerReaction = readlineSync.question( "Options: 1-run, 2-scream, 3-nothing\n" );
          if (tigerReaction=="1") {
            console.log("THE TIGER CHASES YOU AND EATS YOU.");
          }
          else if (tigerReaction=="2") {
            console.log("You scared the tiger and he ran from you.");
          }
          else if (tigerReaction=="3") {
            console.log("The tiger walks up to you, sniffs you and cuddles you.");
          }
          else {
            console.log("Try Again");
          }
        }
    else if (doorChoice=="2") {
        console.log("You are now outside, where do you go next?\n" );
        let outside = readlineSync.question( "Options: 1-beach, 2-forest, 3-street\n" );
          if (outside=="1") {
            console.log("A killer whale has miraculously swam up to the shore and eats you.");
          }
          else if (outside=="2") {
            console.log("Congratulations! You're off to see the wonderful wizard of OZ.");
          }
          else if (outside=="3") {
            console.log("I hope you conceal carry, there's a zombieapocalypse.");
          }
          else {
            console.log("Try Again");
          }
        }
    else if (doorChoice=="3") {
        console.log("\nSo now you're in a dark creepy tunnel, what do you do next?");
        let tunnel = readlineSync.question("Options: 1-birdbox, 2-flashlight, 3-walk \n" );
          if (tunnel=="1") {
            console.log("The birds lead you to a safe island away from the zombieapocalypse.");
          }
          else if (tunnel=="2") {
            console.log("You've chosen to grab the flashlight and you turn it on." +
            " You woke a zombie up and he eats you");
          }
          else if (tunnel=="3") {
            console.log("You walk a total of 12 miles, but you finally find freedom");
          }
          else {
            console.log("Try Again");
          }
        }
    else {
        console.log("Try again.\n");
        }
}
else if (answer == "2") {
  console.log("Okay. BYE.")
}
else {
  console.log("Try again.\n");
}
