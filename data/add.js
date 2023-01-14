// https://markallforone.azurewebsites.net/Add2Numbers/Adding/3/5

let firstInput = document.getElementById("firstInput");
let secondInput = document.getElementById("secondInput")
let subBtn = document.getElementById("subBtn");
let Return = document.getElementById("Return");

let response = "";
let addUrl = "";

subBtn.addEventListener("click", function () {
    addApi(firstInput, secondInput)
    Return.textContent = response
    // withCors()
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            Return.textContent = data
            console.log(data)
        }
    )
}

function addApi(firstInput, secondInput){
    // var letters = /^[A-Za-z]+$/;
    // if(nameInput.value.match(letters)){
        savedInput = firstInput.value;
        savedInput2 = secondInput.value;
        addUrl = "https://markallforone.azurewebsites.net/Add2Numbers/Adding/" + savedInput + "/" + savedInput2;
        urlCall(addUrl)
    // }else{
        // sayHelloReturn.textContent = "Enter a valid respsonse";
    // }
}