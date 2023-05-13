const IsogramFinder = function (word) {
    this.word = word
}

IsogramFinder.prototype.isIsogram = function () {
    const letters = this.word.split('');
    return letters.length === new Set(letters).size
}

module.exports = IsogramFinder;
