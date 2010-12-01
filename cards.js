function randomize(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function Card(options) {
    var mySuit = options.suit;
    var myValue = options.value;
    
    this.suit = function (newSuit) {
        if (newSuit) {
            mySuit = newSuit;
        } else {
            return mySuit;
        }
    };

    this.value = function (newValue) {
        if (newValue) {
            myValue = newValue;
        } else {
            return myValue;
        }
    };
}

function Deck(options) {
    var suits = options.suits;
    var cards = options.cards;

    var deck = [];
    
    for(var suit in suits) {
        for(var card in cards) {
            c = new Card({suit:suits[suit], value:cards[card]});
            deck.push(c);
            console.log("added " + c.value() + " of " + c.suit());
        }
    }
    
    this.shuffle = function() { 
        console.log('shuffling');
        return randomize(deck);
    };
    
    this.deck = function() {
        return deck;
    };
}
    

var euchreDeck = new Deck({
    suits : ["Hearts", "Diamonds", "Spades", "Clubs"],
    cards : ["Nine", "Ten", "Jack", "Queen", "King", "Ace "]
});

