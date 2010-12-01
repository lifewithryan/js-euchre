function Player(options) {
    var myTeam = options.team;
    var myName = options.name;
    var myCards = options.cards; // should be an array of cards
    
    this.name = function(newName) {
        if(newName) {
            myName = newName;
        } else {
            return myName;
        }
    };
    
    this.addCards = function(cards) {
        if(cards) {
            for(var card in cards) {
                myCards.push(cards[card]);
            }
        }
    };
    
    this.playCard = function(card) {
        //remove said card from myCards
        //find the index of the card being played
        //remove it via splice
    }
}

function Team(options) {
    var myName = options.name; // NorthSouth or EastWest
    var wonTricks;
    var calledTrump; // true or false
    
    this.tricks = function(increment) {
        if(increment) {
            wonTricks += increment;
        } else {
            return wonTricks;
        }
    };
    
    this.calledTrump = function(caller) {
        if(caller) {
            calledTrump = true;
        } else {
            calledTrump = false;
        }
    };
}