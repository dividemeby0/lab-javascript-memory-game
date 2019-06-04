class MemoryGame {
  constructor(cards) {
    this.cards = cards; //array
    this.pickedCards = [];//array
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    for (let i = this.cards.length-1; i > 0; i--) { //running through the array
      let j = Math.floor(Math.random()*(i+1)); // on multiplie par i+1 pour être sûrs de couvrir tout le tableau
      let x = this.cards[i]; // x is a placeholder var to keep the value of this.cards[i] at a given moment to use later
      this.cards[i] = this.cards[j]; //shuffling
      this.cards[j] = x; //shuffling still
    }
    //return this.cards
  }
  
  checkIfPair(card1, card2) {
    this.pairsClicked +=1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true
    } else {
      return false
    }
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true
    } else {
      return false
    }
  }
}