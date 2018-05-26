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
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    this.cards = array;
    return array;
  }

  deal() {
    return this.cards.pop();
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }
  draw(deck) {
    this.hand.push(deck.deal());
  }
  inital(deck) {
    this.draw(deck);
    this.draw(deck);
  }
  hit(deck) {
    this.draw(deck);
  }
  show() {
    return this.hand;
  }
  toValue() {
    let total = 0;
    for (let card of this.hand) {
      if (Array.isArray(card.toValue())) {
        if (total === 0) {
          if (this.hand.length === 2) {
            return [this.hand[1].toValue() + 11, this.hand[1].toValue() + 1];
          }
        } else {
          if (total + 11 <= 21) {
            return [total + 11, total + 1];
          } else {
            return (total += 1);
          }
        }
      } else {
        total += card.toValue();
      }
    }
    return total;
  }
}

let deck = new Deck();
deck.shuffle();
let player = new Player('grant');
player.inital(deck);
console.log(player.show());
console.log(player.toValue());
