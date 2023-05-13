const PangramFinder = function (phrase) {
  this.phrase = phrase
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  const pangram = this.alphabet.every((letter) => {
    return this.phrase.toLowerCase().includes(letter);
  });
  return pangram;
};

module.exports = PangramFinder;

// pa = new PangramFinder("a")

// console.log(pa.alphabet)