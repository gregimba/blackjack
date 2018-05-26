class Card {
  constructor(name, suit) {
    this.suit = suit;
    this.name = name;
  }
  toEnglish() {
    return `${this.name} of ${this.suit}s`;
  }
  toValue() {
    const values = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10
    };
    if (this.name === 'king' || this.name === 'queen' || this.name === 'jack') {
      return 10;
    } else if (this.name === 'ace') {
      return [1, 11];
    } else {
      return values[this.name];
    }
  }
}
