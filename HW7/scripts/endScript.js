setInfo();

function setInfo(){
    let obj = JSON.parse(localStorage.getItem("userInfo"));
    document.getElementById("name").innerHTML = "Name: " + obj.firstName + " " + obj.lastName;
    document.getElementById("age").innerHTML = "Age: " + obj.age;
    document.getElementById("attempts").innerHTML = "Total Attempts: " + obj.attempts;
}

function reset(){
    localStorage.removeItem("userInfo");
    window.location = "index.html";
}

function replay(){
    let obj = JSON.parse(localStorage.getItem("userInfo"));
    obj.attempts = 0;
    localStorage.setItem("userInfo", JSON.stringify(obj));
    window.location = "gamePage.html";
}