function Player(options) {
    var myTeam = options.team;
    var myName = options.name;
    var myCards = options.cards; // should be an array of cards
    var hasLead = options.lead;
    var isDealer = options.dealer;
    
    this.name = function(newName) {
        if(newName) {
            myName = newName;
        } else {
            return myName;
        }
    };
    
    this.hasLead = function(has_lead) {
        if(has_lead == true) {
            hasLead = true;
        } else if(has_lead == false){
            hasLead = false;
        } else {
            return hasLead;
        }
    };
    
    this.isDealer = function(is_dealer) {
        if(is_dealer == true) {
            isDealer = true;
        } else if(is_dealer == false) {
            isDealer = false;
        } else {
            return isDealer;
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
    var myName = options.name; // NorthSouth | EastWest
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
        if(caller == true) {
            calledTrump = true;
        } else if(caller == false) {
            calledTrump = false;
        } else {
            return calledTrump;
        }
    };
}