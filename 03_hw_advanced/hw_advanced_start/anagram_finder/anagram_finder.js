const AnagramFinder = function (word) {
    this.word = word
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const wordLetters = this.word.toLowerCase().split('')
    const anagrams = []
    otherWords.forEach(element => {
        const allLettersIncluded = wordLetters.every((letter) => {
            return element.toLowerCase().includes(letter)
        });
        if (wordLetters.length !== element.split('').length){
            return;
        } else if (this.word === element) {
            return;
        } else if ( allLettersIncluded === true) {
            anagrams.push(element);
        };
        });
    return anagrams
}

module.exports = AnagramFinder;

