import Card from "./card.js";
function button(number) {
    let button = document.createElement("button")

    button.textContent = number;
    document.getElementById("game").append(button);

    button.addEventListener("click", () => {
        newGame(document.getElementById("game"), number);
    })
}

function newGame(container , cardsCount) {
    container.innerHTML = "";
    let cardsNumberArray = [];
    let cardsArray = [];
    let firstCard = null;
    let secondCard = null;
    let timer = 60;      

    for (let i = 1; i <= cardsCount / 2; i++) {
        cardsNumberArray.push(i);
        cardsNumberArray.push(i);
    }
    
    cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);

    for (const cardNumber of cardsNumberArray) {
       cardsArray.push(new Card(container, cardNumber, flip))
    }

    function flip(card) {
        if (firstCard !== null && secondCard !== null) {
            if (firstCard.number !== secondCard.number) {
            firstCard.open = false;
            secondCard.open = false;
            firstCard = null;
            secondCard = null;
        }
    }
        if(firstCard === null) {
            firstCard = card
        } else if (secondCard === null) {
            secondCard = card
    }

        if (firstCard !== null && secondCard !== null) {
            if (firstCard.number === secondCard.number) {
                firstCard.success = true;
                secondCard.success = true;
                firstCard = null;
                secondCard = null;
            }
        }
        if (document.querySelectorAll(".card.success").length === cardsCount) {
            alert("Поздравляю!!! Вы победили!!!")
            container.innerHTML = "";
            let cardsNumberArray = [];
            let cardsArray = [];
            let firstCard = null;
            let secondCard = null; 
            createButton()
        }
    }
}



function createButton() {
    for (let i = 8; i <=30; i = i + 2) {
        button(i);
    }
}

createButton()