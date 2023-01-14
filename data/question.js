// asking name

let nameInput = document.getElementById("nameInput");
let nameSubBtn = document.getElementById("nameSubBtn");
let nameReturn = document.getElementById("nameReturn");

let response1 = "";
let nameUrl = "";

nameSubBtn.addEventListener("click", function () {
    helloApi(nameInput)
    // nameReturn.textContent = response1
    // withCors()
})

function urlCall(url) {
    fetch(url).then(
        response1 => response1.text()
    ).then(
        data => {
            nameReturn.textContent = data
            console.log(data)
        }
    )
}

function helloApi(nameInput){
    // var letters = /^[A-Za-z]+$/;
    // if(nameInput.value.match(letters)){
        savedInput = nameInput.value;
        nameUrl = "https://markallforone.azurewebsites.net/askingQuestions/Nameing/" + savedInput;
        urlCall(nameUrl)
    // }else{
        // sayHelloReturn.textContent = "Enter a valid respsonse";
    // }
}

// asking time you woke up


let timeInput = document.getElementById("timeInput");
let timeSubBtn = document.getElementById("timeSubBtn");
let timeReturn = document.getElementById("timeReturn");

let response = "";
let timeUrl = "";

timeSubBtn.addEventListener("click", function () {
    timeApi(timeInput)
    // timeReturn.textContent = response
})

function urlCall2(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            timeReturn.textContent = data
            console.log(data)
        }
    )
}

function timeApi(timeInput){

        savedInput = timeInput.value;
        timeUrl = "https://markallforone.azurewebsites.net/askingQuestions/Responce/" + savedInput;
        urlCall2(timeUrl)

}
