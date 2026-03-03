function getInfo(){
    if ((!document.getElementById("firstName").value) || (!document.getElementById("lastName").value) || (!document.getElementById("age").value)){
        document.getElementById("instructions").innerHTML = "Please fill out all required fields"
    }
    else {
        var obj = {
            "firstName" : document.getElementById("firstName").value,
            "lastName" : document.getElementById("lastName").value,
            "age" : document.getElementById("age").value,
            "attempts" : "0"
        }
        localStorage.setItem("userInfo", JSON.stringify(obj));
        window.location = "gamePage.html";
    }
}