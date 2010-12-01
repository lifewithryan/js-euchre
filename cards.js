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
    /* these will be moved to a Round function but for 
       the sake of testing I have them here as well as 
       their accessors */
    var northCards;
    var eastCards;
    var southCards;
    var westCards;

    var deck = [];
    
    this.northHand = function() {
        return northCards;
    };
    
    this.eastHand = function() {
        return eastCards;
    };
    
    this.southHand = function() {
        return southCards;
    };
    
    this.westHand = function() {
        return westCards;
    }; 
    
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
    
    this.deal = function() {
        /*
          deliver cards to each player in the form:
          two to left three across, two to right, three to dealer
          three to left, two across, three to right, two to dealer
          set turned up card.  this will need to be modified to find
          who has the deal, etc...
        */
        eastCards = [deck[0], deck[1], deck[10], deck[11], deck[12]];
        southCards = [deck[2], deck[3], deck[4], deck[13], deck[14]];
        westCards = [deck[5], deck[6], deck[15], deck[16], deck[17]];
        northCards = [deck[7], deck[8], deck[9], deck[18], deck[19]];
    };
}

    

var euchreDeck = new Deck({
    suits : ["Hearts", "Diamonds", "Spades", "Clubs"],
    cards : ["Nine", "Ten", "Jack", "Queen", "King", "Ace "]
});

