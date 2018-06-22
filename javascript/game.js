window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var hint;               // Word Hint
  var clue;               // Word Hint
  var word;              // Selected word
  var guess;             // Guess
  var guesses = [ ];      // Stored guesses
  var counter;           // Count wrong guesses
  var wins;              // number of wins
  var losses;             // number of losses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showWins = document.getElementById("Wins");
  var showLosses = document.getElementById("Losses");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("Clue");
  var showClue = document.getElementById("#of guesses");

  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "The Chosen Category Is Historical Figures";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "The Chosen Musicians";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "The Chosen Category Movie Stars";
    }
  }

  // Create guesses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // OnClick Function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
      } else {
        comments();
      }
    }
  }
  
  // Play
  play = function () {
    categories = [
        ["Abraham Licoln", "Martin Luther King Jr.", "Bejamin Franklin"],
        ["Michael Jackson", "Prince", "Madonna"],
        ["Marilyn Monroe", "Brad Pitt", "Jennifer Lawrence"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 10;
    wins = 0;
    losses = 0;
    counter = 0;
    space = 0;
    result();
  }

  play();
  
  // Hint

    hint.onclick = function() {

      hints = [
        ["On the $5 bill", "'I have a dream!'", "Invented the light bulb"]
        ["Thriller", "Purple Rain", "Like a Virgin"],
        ["Diamonds are a Girls Best Friend", "Fight Club", "Hunger Games"]
    ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
  };

   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}


