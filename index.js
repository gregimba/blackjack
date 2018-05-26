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

class Deck {
  constructor() {
    const suits = ['heart', 'club', 'diamond', 'spade'];
    const names = [
      'ace',
      'king',
      'queen',
      'jack',
      'ten',
      'nine',
      'eight',
      'seven',
      'six',
      'five',
      'four',
      'three',
      'two',
      'one'
    ];
    this.cards = [];
    for (let suit of suits) {
      for (let name of names) {
        let card = new Card(name, suit);
        this.cards.push(card);
      }
    }
  }
  show() {
    return this.cards;
  }
  shuffle() {
    let array = this.cards;
    let m = array.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    this.cards = array;
    return array;
  }
}

let deck = new Deck();
console.log(deck.show());
deck.shuffle();
console.log(deck.show());
