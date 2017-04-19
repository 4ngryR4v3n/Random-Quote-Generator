var box = 0;
var deckTypes = ["nextLeaderCard", "nextLoveCard", "nextWiseCard"];
var deckOrder = []; //Holds the shuffled order of decks to randomize placement on the page. 
var leaderCount = 999, loveCount = 999, wiseCount = 999; //High values ensures an initial shuffle.
var cardInfo = {};
var tweetPhrase = [];
var boxNum = 0;


function dealDeck() {

    //create the deckOrder array
    for (x = 0; x < deckTypes.length; x++) {
        deckOrder[x] = x;
    }

    //shuffle the deckOrder array
    deckOrder.sort(function (a, b) {
        return 0.5 - Math.random();
    });

    /*
     * Deals a card from each deck.  The case statement allows the correct type of card to be dealt
     * into each card box area.  The objects of shuffle and cardInfo both pass variables to be used
     * into the shuffleDeck() and dealCard() functions.
     */
    for (x = 0; x < deckTypes.length; x++) {
        box = x;
        y = deckOrder[x];
            switch (y) {
            case 0:
                if (leaderCount >= leaderQuotes.length) {
                                        
                    leaderCount = 0;
                    shuffle = {
                        quotes: leaderQuotes,
                        deck: leaderDeck        
                    };    
                    
                    shuffleDeck(); 
                    leaderDeck = shuffle.deck;
                }
                cardInfo = {
                    quote: leaderQuotes[leaderDeck[leaderCount]][0],
                    author: leaderQuotes[leaderDeck[leaderCount]][1],
                    deckClass: "leaderbox",
                    deckStyle: "Leader",
                    cardCount: leaderCount
                };
                dealCard();
                leaderCount++;
                break;

            case 1:
                if (loveCount >= loveQuotes.length) {
                    
                    loveCount = 0;
                    shuffle = {
                        quotes: loveQuotes,
                        deck: loveDeck        
                    };    
                    
                    shuffleDeck();
                    loveDeck = shuffle.deck;
                }
                cardInfo = {
                    quote: loveQuotes[loveDeck[loveCount]][0],
                    author: loveQuotes[loveDeck[loveCount]][1],
                    deckClass: "lovebox",
                    deckStyle: "Love",
                    cardCount: loveCount
                };
                dealCard();
                loveCount++;
                break;
  
            case 2:
                if (wiseCount >= wiseQuotes.length) {
                
                    wiseCount = 0;
                    shuffle = {
                        quotes: wiseQuotes,
                        deck: wiseDeck        
                    };    
                    
                    shuffleDeck();
                    wiseDeck = shuffle.deck;
                }
                
                cardInfo = {
                    quote: wiseQuotes[wiseDeck[wiseCount]][0],
                    author: wiseQuotes[wiseDeck[wiseCount]][1],
                    deckClass: "wisebox",
                    deckStyle: "Wise",
                    cardCount: wiseCount
                };                
                dealCard();
                wiseCount++;
                break;
            default:
                break;
        }
    }
}


function dealCard() {
    //Sets the class of the box.
    document.getElementById(box + "myBox").className = cardInfo.deckClass;
    //Sets a phrase to tweet.
    tweetPhrase[box] = cardInfo.quote + " --" + cardInfo.author;
    //Outputs quote into box.
    document.getElementById(box + "Quoteline").innerHTML =
            cardInfo.quote + "</br><p style = 'text-align:right'> --" +
            cardInfo.author + "</p>";
    //Outputs card deal count for "About" section.
    document.getElementById("cardCount" + box).innerHTML = cardInfo.deckStyle + " Deck Count = " + (cardInfo.cardCount + 1);
}


function shuffleDeck() {
    //Creates array.
    for (z = 0; z < shuffle.quotes.length; z++) {
        shuffle.deck[z] = z;
    }
    //Shuffles array.
    shuffle.deck.sort(function (a, b) {
        return 0.5 - Math.random();
    });
    return shuffle.deck;
}


function tweetQuote(boxNum) {
    x = boxNum;
    phrase = tweetPhrase[x].replace(";", "%3B"); //The Twitter function was truncating any input after a semi-colon.  This is the hack.
    window.open("https://twitter.com/intent/tweet?text=" + phrase, "myWin", "scrollbars=yes,width=550,height=420");
    return false;
}


//Toggles the "About" section.
function showAbout() {
    document.getElementById("info").innerHTML = '<button class="btn btn-primary btn-xs" style="float: right" onclick="hideAbout()">Hide</button>';
    document.getElementById("infoContent").style.display = "block";
}


function hideAbout() {
    document.getElementById("info").innerHTML = '<button class="btn btn-primary btn-xs" style="float: right" onclick="showAbout()">About</button>';
    document.getElementById("infoContent").style.display = "none";
}

