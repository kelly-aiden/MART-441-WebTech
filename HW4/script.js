function storyFunction(choice) {
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