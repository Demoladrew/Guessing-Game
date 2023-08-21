var game1 = function() {
  alert("Demoladrew is on a quest to find a new planet.  He jumps into his Xwing and flies off.")
  var demola = prompt("If he heads to the Milky Way galaxy press1.  If he heads to the My Little Pony galaxy press2.  If he runs out of gas press 3.")
  if (demola == "1")
    alert("Demoladrew flies to Mars and dies because there is no oxygen.")
  else if (demola == "2")
    alert("Demoladrew dies of pink and cuteness overload.")
  else if (demola == "3")
    alert("demola gets towed for parking in an illegal spot at the fuel station.")
  else
    alert("We don't understand your answer so demola wins.")
}

var pirate = function() {
  var answer = Math.floor(Math.random() * 20);
  counter = 0;
  do {
    counter++;
    var guess = prompt("Arrgh.  This is a very hard guessing game.  Guess a number between 0 and 20.");
    guess = parseInt(guess);
    if (guess == answer) {
      alert("OUCH, That was fast! you won my game!  Now you won all my money, i must go in search of more money!");
    } else {
      if (guess < answer) {
        alert("SORRY!  Your guess is too low.");
      } else if (guess > answer) {
        alert("EASY!.  Your guess is too high.");
      }
    }
  } while (counter < 3 && guess != answer);
  if (guess != answer) {
    alert("lol! I fooled you 3 times - the number was " + answer + ".");
  }
}