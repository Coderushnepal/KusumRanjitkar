var container = document.createElement('div');
document.body.appendChild(container);

// to put guessed and wrong words
var guessedWords = new Set();
var wrongWords = new Set();
var count = 0;

var words = ["continue","test","describe","common","style","script","slack","what","clash","wrong","kusum","life",];


// random word generate
var randomWord= words[Math.floor(Math.random()*words.length)];
console.log(randomWord);


// div for dash
var dashDiv = document.createElement('div');
dashDiv.classList.add('dashDiv');
container.appendChild(dashDiv);

for (var i = 0; i<randomWord.length; i++) {
    var dash = document.createElement('div');
    dash.classList.add('dash');    
    dashDiv.appendChild(dash);
}


// wrong div
var wrongDiv = document.createElement('div');
wrongDiv.classList.add('wrongDiv');
container.appendChild(wrongDiv);
var wrongTitle = document.createElement('h2');
wrongTitle.classList.add('wrongTitle');
wrongTitle.innerHTML = 'Wrong Letters';
wrongDiv.appendChild(wrongTitle);

var letters = document.querySelectorAll('.dash');

// hangman display 
var counter = 0;
var figures = document.querySelectorAll(".figure-part");
function displayFigureParts() {
  var part = Array.from(figures);
  part[counter].style.display = "block";
  counter++;
}



// event listener to guess the letter
document.addEventListener("keydown", function (e) {
    var alreadyGuessed = document.getElementById('already-guessed');
    document.body.appendChild(alreadyGuessed);

    if( Array.from(guessedWords).includes(event.key)) {
        console.log(alreadyGuessed);
        alreadyGuessed.style.display = 'block';
        alreadyGuessed.innerHTML = event.key +" has already been guessed";
       setTimeout( function(){ 
        alreadyGuessed.style.display = 'none';
       },2000); 
        
    } 
    else {

        alreadyGuessed.style.display = 'none';
        guessedWords.add(event.key);
        
        if (randomWord.includes(e.key)) {
            for (var j = 0; j < randomWord.length; j++) {
                if (randomWord[j] === e.key) {
                letters[j].innerHTML = e.key;
                checkWin();
          
        }
      }
    } 
    
    else {
        
    checklost();
    displayFigureParts();
    var wrongLetterSpan = document.createElement('span');
    wrongLetterSpan.classList.add('wrongLetterSpan')
    wrongLetterSpan.innerHTML = e.key ;
    wrongDiv.appendChild(wrongLetterSpan);
    wrongWords.add(event.key);
    count = count + 1;
   console.log(count)
            } 
        }

});




// message popup

var messageDisplay = document.getElementById('pop-up');
var popUpMsg = document.getElementById('pop-up-message');
function checklost() {

    if (count===5) {
        console.log(count)
		popUpMsg.innerHTML = 'you lost &#128546';
        messageDisplay.style.display = 'block';
        tryButton.addEventListener('click' , function(){
            window.location.reload();
        });
	}
}


function checkWin() {
	
	var valuedash = document.getElementsByClassName('dash');
	var winCase = Array.from(valuedash).every((box) => {
		return box.innerHTML ? true : false;
	});
	// console.log(winCase);
	if (winCase) {
		popUpMsg.innerHTML = 'You Won &#128522';
        messageDisplay.style.display = 'block';
        tryButton.addEventListener('click' , function(){
            window.location.reload();
        });
	}
}