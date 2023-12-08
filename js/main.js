const cards = [
    { name: "gun", emoji: "🔫" },
    { name: "fish", emoji: "🐟" },
    { name: "pizza", emoji: "🍕" },
    { name: "dynamite", emoji: "🧨" },
    { name: "balloon", emoji: "🎈" },
    { name: "dice", emoji: "🎲" },
    { name: "pig", emoji: "🐷" },
    { name: "poo", emoji: "💩" },

  ];

  const doubledCards = cards.concat(cards);
  const game = document.getElementById("game");
  const winner = document.querySelector("winner");

  
  let card1 = null;
  let card2 = null;
  let p = document.createElement("p");
  if (p.classList.contains("winner")) {
    p.classList.remove("winner");
  } else {
    p.classList.add("winner");
  } 

  
  
  function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;
  
        for (let i = 0; i < array.length; i++) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
  
            temporaryValue = array[i];
            array[i] = array[randomIndex];
            array[randomIndex] = temporaryValue;
               }
  
    return array;
  }
  
  const shuffledCards = shuffle(doubledCards);

  function createBoard() {
    for (let card of shuffledCards) {
      let cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.dataset.name = card.name;
      cardElement.textContent = "☺️";
      cardElement.addEventListener("click", flipCard);
      game.appendChild(cardElement);
    }
  }
  
  function flipCard() {
    this.classList.add("flip");
    this.textContent = cards.find(
      (card) => card.name === this.dataset.name
    ).emoji;
  
    if (!card1) {
      card1 = this;
    } else if (!card2) {
      card2 = this;
      checkForMatch();
    }
  }
  
  function checkForMatch() {
    if (card1.textContent === card2.textContent) {

      setTimeout(() => {
        p.classList.add("winner");
        p.textContent = "You won!";
      game.appendChild(p);
      }
      , 1000);
      setTimeout(() => {
        card1.classList.remove("flip");
        card2.classList.remove("flip");

        card1.textContent = "";
        card2.textContent = ""; 
        card1.removeEventListener("click", flipCard); 
        card2.removeEventListener("click", flipCard); 
        card1 = null;
        card2 = null;
      }, 1000);
    } else {
    
      setTimeout(() => {
        card1.classList.remove("flip");
        card2.classList.remove("flip");
        card1.textContent = "☺️"; 
        card2.textContent = "☺️"; 
        card1 = null;
        card2 = null;
      }, 1000);
    }
  }
  


function resetGame() {
    game.innerHTML = "";
    createBoard();
    }


  createBoard();