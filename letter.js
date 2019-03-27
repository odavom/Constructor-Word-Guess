// Letter constructor

let Letter = function(string) {
    // string value to store underlying letter
    this.string = string;
    // string = "A"
    // console.log(string)
    // determines if underlying letter is guessed 
    this.boolean = false;
    // //  will return underlying letter if guessed === true else an __ if letter guessed === false
    // this.guessCheck = function() {
    //     if (this.letter === " ") {
    //         this.guessed = true;
    //         return " ";
    //     } else {
    //         if (this.guessed === false)
    //     }
    // }
    // change value and parameters to reflect the instructions use string and boolean
};

// let letter = new Letter("A");
// console.log(letter.string + letter.boolean);


// using prototype to add methods to letter constructor
// returns string if guessed otherwise returns _
Letter.prototype.guessed = function() {
    if (this.boolean === true) {
        return this.string;
    } else {
        return "_";
    }
};

// takes a character parameter and checks against underlying string and if correct then this boolean updated to true
Letter.prototype.takeCharacter = function(character) {
    if (character === this.string) {
        this.boolean = true;
    }
};





module.exports = Letter;