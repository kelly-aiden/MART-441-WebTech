var question = 0;
var firstChoice = "";
function choose(choice) {
    question += 1;
    if (question == 1){
        if (choice == 1){
            document.getElementById("narration").innerHTML = "You and your party dart behind some rocks, hidden. The dragon begins sniffing around looking for its prey...";
            document.getElementById("left").innerHTML = "Run away";
            document.getElementById("right").innerHTML = "Sneak attack the Dragon";
            firstChoice = "hide"
        }
        else if (choice == 2){
            document.getElementById("narration").innerHTML = "You and your party square up and prepare for battle. The dragon snarls and furls,beginning to charge up a powerful beam attack...";
            document.getElementById("left").innerHTML = "Shield yourself and your allies";
            document.getElementById("right").innerHTML = "Attack it before it can attack you";
            firstChoice = "fight"
        } 
    }

    else if (question == 3){
        if (firstChoice == "hide"){
            if (choice == 1){
                document.getElementById("narration").innerHTML = "You raise your blade to pierce through the eye of the titan, but you see a pupil as large as you whips around training on you. A massive maw opens and your vision is filled with the inside of a dragon's mouth...";
                document.getElementById("left").innerHTML = "RESTART";
                document.getElementById("right").innerHTML = "END GAME";
                document.getElementById("prompt").innerHTML = "YOU HAVE DIED" + "<br>GAME OVER";
            }
            else if (choice == 2){
                document.getElementById("narration").innerHTML = "You raise your blade and charge, the dragon's massive eye turns to spot you, but it is too late for it. plunge the sword into it's neck, delivering a powerful blow directly in its weak spot. The dragon screeches in pain before it's head collapses to the ground... DEAD";
                document.getElementById("left").innerHTML = "RESTART";
                document.getElementById("right").innerHTML = "END GAME";
                document.getElementById("prompt").innerHTML = "YOU HAVE SLAYED THE BEAST" + "<br>CONGRADULATIONS!";
            }
        }
        if (firstChoice == "fight"){
            if (choice == 1){
                document.getElementById("narration").innerHTML = "The dragon stands there spent after its powerful attack. You raise your blade and charge, leaping to pierce through the eye of the titan, but you see a pupil as large as you whips around and training on you. A massive maw opens and your vision is filled with the inside of a dragon's mouth...";
                document.getElementById("left").innerHTML = "RESTART";
                document.getElementById("right").innerHTML = "END GAME";
                document.getElementById("prompt").innerHTML = "YOU HAVE DIED" + "<br>GAME OVER";
            }
            else if (choice == 2){
                document.getElementById("narration").innerHTML = "The dragon stands there spent after its powerful attack. You raise your blade and charge, leaping up and plunging the sword into it's neck, delivering a powerful blow directly in its weakest point. The dragon screeches in pain before it's head collapses to the ground... DEAD";
                document.getElementById("left").innerHTML = "RESTART";
                document.getElementById("right").innerHTML = "END GAME";
                document.getElementById("prompt").innerHTML = "YOU HAVE SLAYED THE BEAST" + "<br>CONGRADULATIONS!";
            }
        }
    }

    else if (question == 2){
        if (firstChoice == "hide"){
            if (choice == 1){
                document.getElementById("narration").innerHTML = "As you and your allies attempt to flee, the dragon spots you, unleashing a powerful ice beam attack! The beam carves into the snowy cliffs, eliminating you and your party...";
                document.getElementById("left").innerHTML = "RESTART";
                document.getElementById("right").innerHTML = "END GAME";
                document.getElementById("prompt").innerHTML = "YOU HAVE DIED" + "<br>GAME OVER";
                question = 3;
            }
            else if (choice == 2){
                document.getElementById("narration").innerHTML = "You wait for the perfect opportunity to strike. You hear the dragon's head approach you behind your rock. Its breathing echoing through your ears. Right next to appears the head of the beast...";
                document.getElementById("left").innerHTML = "Go for the eye";
                document.getElementById("right").innerHTML = "Go for the neck";
            }
        }
        if (firstChoice == "fight"){
            if (choice == 1){
                document.getElementById("narration").innerHTML = "You raise your shield, its ancient runes wrapping you and your allies in an arcane shield. The beam strikes the shield, and you plant your feet into the snow, standing your ground. The beam dissapates. As you observe the beast, you notice its eyes and throat glow and appear to weaken...";
                document.getElementById("left").innerHTML = "Go for the eye";
                document.getElementById("right").innerHTML = "Go for the neck";
            }
            else if (choice == 2){
                document.getElementById("narration").innerHTML = "You muster the courage and bravery to charge the fearsome beast, it was ready. The dragon bats you away with a swift flap of its wing, before unleashing its devestating beam attack, eliminating you and your party";
                document.getElementById("left").innerHTML = "RESTART";
                document.getElementById("right").innerHTML = "END GAME";
                document.getElementById("prompt").innerHTML = "YOU HAVE DIED" + "<br>GAME OVER";
                question = 3;
            }
        }
    }

    else if (question == 4){
        if (choice == 1){
            document.getElementById("narration").innerHTML = "On your travels through the snowy peaks, you and your adventuring party have unknowingly wandered into the domain of a powerful ice dragon... and it is angry!";
            document.getElementById("left").innerHTML = "Try to hide";
            document.getElementById("right").innerHTML = "Fight the dragon";
            document.getElementById("prompt").innerHTML = "WHAT WILL YOU DO?";
            firstChoice = ""
            question = 0;
        }
        else if (choice == 2){
            document.getElementById("narration").innerHTML = "Thank you for playing. Have a great day and watch out for wild dragons!";
            document.getElementById("left").innerHTML = "";
            document.getElementById("right").innerHTML = "";
            document.getElementById("prompt").innerHTML = "";
            firstChoice = ""
        } 
    }
}