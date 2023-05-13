const UpperCaser = function (words) {
    this.words = words
}

UpperCaser.prototype.toUpperCase = function () {
    const uppers = this.words.map((word) =>{
        return word.toUpperCase()
    });
    return uppers;
}

module.exports = UpperCaser;
