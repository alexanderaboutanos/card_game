/** @format */

// Part 1: Number Facts //

// Part 2: Deck of Cards

let baseURL2 = "http://deckofcardsapi.com/";

// 1.  Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

axios.get(`${baseURL2}api/deck/new/draw/?count=1`).then((res1) => {
  console.log(`${res1.data.cards[0].value} of ${res1.data.cards[0].suit}`);
});

// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck. Once you have both cards, console.log the values and suits of both cards.

axios
  .get(`${baseURL2}api/deck/new/draw/?count=1`)
  .then((res1) => {
    console.log(`${res1.data.cards[0].value} of ${res1.data.cards[0].suit}`);
    return axios.get(`${baseURL2}api/deck/new/draw/?count=1`);
  })
  .then((res2) => {
    console.log(res2);
    console.log(`${res2.data.cards[0].value} of ${res2.data.cards[0].suit}`);
  });

// 3. Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

// ON OTHER PAGE
