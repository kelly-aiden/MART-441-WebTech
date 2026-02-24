var clickCounter = 0;

var activeDeck = new Array(12).fill("media/back.png");
var imageDeck = ["media/ace.jpg","media/five.png","media/ten.jpg","media/king.png","media/queen.jpg","media/jack.png","media/ace.jpg","media/five.png","media/ten.jpg","media/king.png","media/queen.jpg","media/jack.png"];
var shuffledDeck = new Array;

shuffle();
createGrid();

function shuffle(){
     var tracker = [0,1,2,3,4,5,6,7,8,9,10,11]
     for (let i = 0; i < 12; i++){
        let randomNum = Math.floor(Math.random() * tracker.length);
        let index = tracker[randomNum];
        tracker.splice(randomNum,1);
        shuffledDeck.push(imageDeck[index]);
     }
}

function flip(index){
    clickCounter += 1;
    if (clickCounter == 1){
        clearSolos();
        setCard(index);
        createGrid();
    }
    if (clickCounter == 2){
        setCard(index);
        createGrid();
        checkPairs();
        clickCounter = 0;
    }
}

function setCard(index){
    for (let i = 0; i < 12; i++){
        if (index == i){
            activeDeck[i] = shuffledDeck[i];
        }
    }
}

function createGrid(){
    for (let i = 0; i < 12; i++){
        if (activeDeck[i] == "media/back.png"){
            document.getElementById(i).src = activeDeck[i];
        }
        else if (activeDeck[i] == "paired"){
            document.getElementById(i).src = shuffledDeck[i];
        }
        else {
            document.getElementById(i).src = shuffledDeck[i];
        }
    }
}

function clearSolos(){
    for (let i = 0; i < 12; i++){
        if (activeDeck[i] != "media/back.png" && activeDeck[i] != "paired"){
            activeDeck[i] = "media/back.png";
        }
    }
}

function checkPairs(){
    for (let i = 0; i < 12; i++){
        if (activeDeck[i] != "media/back.png" && activeDeck[i] != "paired"){
            for (let j = 1 + i; j < 12; j++){
                if (activeDeck[i] === activeDeck[j]){
                    activeDeck[i] = "paired"
                    activeDeck[j] = "paired"
                }
            }
        }
    }
}
