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





    /*
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Pugster continues into the park with confidence. Pugster meets another dog. What Pugster do now?";
        document.getElementById("choice1").innerHTML = "Meet others";
        document.getElementById("choice2").innerHTML = "Walk alone";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "Pugster starts to back out, but then something in the back of Pugster's mind says 'Wait!'";
        document.getElementById("choice1").innerHTML = "Go ahead and be brave";
        document.getElementById("choice2").innerHTML = "Scan the situation";
    } else if (choice == 1 && answer1 == "Meet others") {
        document.getElementById("story").innerHTML = "Pugster walks over to a group of dogs and says hello.  Pugster is trying to decide who is genuine or not.";
        document.getElementById("choice1").innerHTML = "Evaluate all dogs";
        document.getElementById("choice2").innerHTML = "Stay clear";
    } else if (choice == 2 && answer2 == "Walk alone") {
        document.getElementById("story").innerHTML = "Pugster starts to walk over to the dogs and then decides to go to the water instead.  Now what?'";
        document.getElementById("choice1").innerHTML = "Go for a swim";
        document.getElementById("choice2").innerHTML = "Get a drink";
    } else if (choice == 1 && answer1 == "Go ahead and be brave") {
        document.getElementById("story").innerHTML = "Pugster decides to go in even with hesitation to make new friends.  Will it work?'";
        document.getElementById("choice1").innerHTML = "Yes it will work";
        document.getElementById("choice2").innerHTML = "No it will not work";
    } else if (choice == 2 && answer2 == "Scan the situation") {
        document.getElementById("story").innerHTML = "Pugster decides to just look around for the moment. What should Pugster do now?";
        document.getElementById("choice1").innerHTML = "Watch from afar";
        document.getElementById("choice2").innerHTML = "Get in closer";
    }
    // need to do these
    else if (choice == 1 && answer1 == "Evaluate all dogs") {
        document.getElementById("story").innerHTML = "Pugster decides that evaluation is the best option." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Stay clear") {
        document.getElementById("story").innerHTML = "Pugster decides staying away is the best option" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Go for a swim") {
        document.getElementById("story").innerHTML = "Pugster decides that swimming sounds most fun" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Get a drink") {
        document.getElementById("story").innerHTML = "Pugster decides it's time to drink" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes it will work") {
        document.getElementById("story").innerHTML = "Pugster thinks, yeah this will work out." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "No it will not work") {
        document.getElementById("story").innerHTML = "Pugster thinks, I don't think this will work out." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Watch from afar") {
        document.getElementById("story").innerHTML = "Pugster decides it's time to just watch from a distance for safety." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Get in closer") {
        document.getElementById("story").innerHTML = "Pugster decides to get just a little closer, but not engage." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes restart") {
        document.getElementById("story").innerHTML = "Our fearless leader, 'Pugster' has entered the dog park for the first time. Scared? Yes, but willing to give it a try. Are you ready to start on adventure with Pugster?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "No quit") {
        document.getElementById("story").innerHTML = "Pugster thanks you!";

    }
    */
}