options = ["YES","RED","GREEN","SILVER","YELLOW","PURPLE","NO"];
function getCase() {
    var choice = document.getElementById("choice").value;
    for (let i = 0; i < options.length; i++){
        if (choice == options[i]){
            return i;
        }
    }
    return 7
}

function update(CASE){
    document.getElementById("choice").value = "";
    switch (CASE){
        case 0 :
            document.body.style.backgroundColor = "rgb(30, 15, 0)";
            document.getElementById("header").src = "media/vendor.jpg";
            document.getElementById("narration").innerHTML = "You are approached by a charming but shifty goblin in an alley way. He offers you one of his potions for just 2 gold pieces. The catch? He doesn't know what they do. But he can assure you they won't bring you any harm.";
            document.getElementById("prompt").innerHTML = "Will you choose the RED, GREEN, SILVER, YELLOW, or PURPLE potion?";
            document.getElementById("confirm").style.backgroundColor = "rgb(0, 4, 53)";
            document.getElementById("confirm").innerHTML = "CONFIRM";
            document.getElementById("choice").placeholder = "Enter potion color";
            break;
        case 1 :
            document.body.style.backgroundColor = "rgb(42, 1, 14)";
            document.getElementById("header").src = "media/chicken.png";
            document.getElementById("narration").innerHTML = "You take the red potion and you can BOK BOK almost feel like you're growing feathers, and BOK BOK your postures changing and is that a.... a bea- BOK BOK....... You've been turned into a chicken. ";
            document.getElementById("prompt").innerHTML = "Would you like to play again? YES or NO?";
            document.getElementById("confirm").style.backgroundColor = "rgb(53, 0, 0)";
            document.getElementById("confirm").innerHTML = "RESTART";
            document.getElementById("choice").placeholder = "Answer";
            break;
        case 2 :
            document.body.style.backgroundColor = "rgb(0, 30, 5)";
            document.getElementById("header").src = "media/poison.png";
            document.getElementById("narration").innerHTML = "You gulp down the green potion and.... yike sthat did not taste good. Wait is it just you or is everything spinning a lot? Oh you don't look so good. OHHHHHH yeah that green one was totally poison.";
            document.getElementById("prompt").innerHTML = "Would you like to play again? YES or NO?";
            document.getElementById("confirm").style.backgroundColor = "rgb(53, 0, 0)";
            document.getElementById("confirm").innerHTML = "RESTART";
            document.getElementById("choice").placeholder = "Answer";
            break;
        case 3 :
            document.body.style.backgroundColor = "rgb(29, 32, 34)";
            document.getElementById("header").src = "media/fly.jpg";
            document.getElementById("narration").innerHTML = "The silver potion goes down smooth. That silver one gives quite the pep in ones step. In fact you feel more light footed than ever before. So light footed in almost feels like you could just...fly. OMG you're flying!";
            document.getElementById("prompt").innerHTML = "Would you like to play again? YES or NO?";
            document.getElementById("confirm").style.backgroundColor = "rgb(53, 0, 0)";
            document.getElementById("confirm").innerHTML = "RESTART";
            document.getElementById("choice").placeholder = "Answer";
            break;
        case 4 :
            document.body.style.backgroundColor = "rgb(43, 42, 3)";
            document.getElementById("header").src = "media/shrunk.png";
            document.getElementById("narration").innerHTML = "The yellow potion tastes very bizarre. It kind of makes your tummy upset, your head spins a little bit, and it seems like everything around you gets bigger, and bigger.... and BIGGER. You're so tiny! Those rats look a lot scarier when you're the same size.";
            document.getElementById("prompt").innerHTML = "Would you like to play again? YES or NO?";
            document.getElementById("confirm").style.backgroundColor = "rgb(53, 0, 0)";
            document.getElementById("confirm").innerHTML = "RESTART";
            document.getElementById("choice").placeholder = "Answer";
            break;
        case 5 :
            document.body.style.backgroundColor = "rgb(19, 0, 30)";
            document.getElementById("header").src = "media/Invisible.jpg";
            document.getElementById("narration").innerHTML = "The mysterious purple potion flows down your gullot...and nothing happens. hm? Well guess you should just go about your day now. What time is it? Wait where's your hand? Where are your feet? Where's YOU? You're invisible!";
            document.getElementById("prompt").innerHTML = "Would you like to play again? YES or NO?";
            document.getElementById("confirm").style.backgroundColor = "rgb(53, 0, 0)";
            document.getElementById("confirm").innerHTML = "RESTART";
            document.getElementById("choice").placeholder = "Answer";
            break;
        case 6 :
            document.getElementById("prompt").innerHTML = "Thank you for playing. Have a great day!";
            document.getElementById("choice").placeholder = "";
            break;
        case 7 :
            document.getElementById("prompt").innerHTML = document.getElementById("prompt").innerHTML + " (Please enter a valid answer, signified by all-caps)"
    }
}