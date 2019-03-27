// set variable that brings in the letter constructor
const Letter = require('./Letter')

// create constructor Word blueprint that uses guessWord as a parameter and loops through the guessWord and pushes the new Letter objects of the guessWord to the empty array
let Word = function(guessWord) {
    this.guessWord = guessWord;
    this.array = [];
    for (let i = 0; i < guessWord.length; i++) {
        this.array.push(new Letter(guessWord[i]));
    } 
};

// let word = new Word("Anthony")
// console.log(word.array);


// now that the letter objects are in an array we need to loop through that array and pull out the string to second array combining the word and the _
Word.prototype.returnString = function() {
    let secondArray = [];
    for (let i = 0; i < this.array.length; i++) {
        secondArray.push(this.array[i].guessed());
    }
    console.log(secondArray.join(" "))
};

// check to see if input was correct
Word.prototype.checkLetter = function(any) {
    for (let i = 0; i < this.array.length; i++) {
        this.array[i].takeCharacter(any);
    }
};

module.exports = Word;
