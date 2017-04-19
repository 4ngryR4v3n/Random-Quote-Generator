/*
 * This is the complete list of all random quotes.  They are separated into
 * Leadership, Love, and Wisdom categories
 * 
 * Some of the quotes with apostrophes needed to be "escaped" with the "\" key and
 * some others with a semicolon needed a URL safe character code "%3B" to be used due to 
 * Twitter not allowing it as input.  See the tweetQuote() function toward the end of the decks.js file. 
 */


var leaderQuoteNumber = 0;
var leaderCount = 0;
var leaderDeck = [0];
var leaderQuotes = [
    ['"Don\'t follow the crowd, let the crowd follow you."','Margaret Thatcher'],
    ['"The task of the leader is to get their people from where they are to where they have not been."','Henry Kissinger'],
    ['"There are no office hours for leaders."','Cardinal J. Gibbons'],
    ['"Leaders don\'t inflict pain, they share pain."','Max Depree'],
    ['"Management is doing things right; leadership is doing the right thing."','Peter F. Drucker'],
    ['"A good leader takes a little more than his share of the blame, a little less than his share of the credit."','Arnold Glasow'],
    ['"Leadership is the art of getting someone else to do something you want done because he wants to do it."','Dwight D. Eisenhower'],
    ['"A leader is best when people barely know he exists. When his work is done, his aim fulfilled, they will say: we did it ourselves."','Lao Tzu'],
    ['"A leader takes people where they want to go. A great leader takes people where they don\'t necessarily want to go, but ought to be."','Rosalynn Carter'],
    ['"Become the kind of leader that people would follow voluntarily, even if you had no title or position."','Brian Tracy']
];
var loveQuoteNumber = 0;
var loveCount = 0;
var loveDeck = [0];
var loveQuotes = [
    ['"A loving heart is the truest wisdom."','Charles Dickens (1812-1870)'],
    ['"Absence is to love as wind is to fire; it extinguishes the small and enkindles the great."','Comte de Bussy-Rabutin (1618-1693)'],
    ['"Love isn\'t love until you give it away."','John H. MacDonald Jr. 1992'],
    ['"In the arithmetic of love, one plus one equals everything, and two minus one equals nothing."','Mignon McLaughlin'],
    ['"Love is when the other person\'s happiness is more important than your own."','H. Jackson Brown, Jr.'],
    ['"Where there is love there is life."','Mahatma Gandhi'],
    ['"Love is a fire. But whether it is going to warm your hearth or burn down your house, you can never tell."','Joan Crawford'],
    ['"Even when love isn\'t enough, somehow it is."','Stephen King']
];

var wiseQuoteNumber = 0;
var wiseCount = 0;
var wiseDeck = [0];
var wiseQuotes = [
    ['"A blind person who sees is better than a seeing person who is blind."','Iranian (on wisdom)'], 
    ['"Deal with the faults of others as gently as your own."','Chinese Proverb'],
    ['"Even a fish wouldn\'t get into trouble if it kept its mouth shut."','Korean (on common sense)'],
    ['"He who has a why to live can bear almost any how."','Friedrich Nietzsche (1844-1900)'],
    ['"Don\'t let your crastination turn pro"','Joshua Fields Millburn'],
    ['"Just because something is common sense doesn\'t mean it\'s common practice."','unknown'],
    ['"The wise do as much as they should, not as much as they can."','French (on wisdom)']
]; 
