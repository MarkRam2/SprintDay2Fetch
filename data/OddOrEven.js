let oodInput = document.getElementById("oodInput");
let oodSubBtn = document.getElementById("oodSubBtn");
let oodReturn = document.getElementById("oodReturn");

let response = "";
let oodUrl = "";

oodSubBtn.addEventListener("click", function () {
    helloApi(oodInput)
    oodReturn.textContent = response
    // withCors()
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            oodReturn.textContent = data
            console.log(data)
        }
    )
}

function helloApi(oodInput){
    // var letters = /^[A-Za-z]+$/;
    // if(nameInput.value.match(letters)){
        savedInput = oodInput.value;
        oodUrl = "https://markallforone.azurewebsites.net/OodOrEven/EvenOrOod/" + savedInput;
        urlCall(oodUrl)
    // }else{
        // sayHelloReturn.textContent = "Enter a valid respsonse";
    // }
}