let GreaterInput = document.getElementById("GreaterInput");
let LessInput = document.getElementById("LessInput")
let GreaterSubBtn = document.getElementById("GreaterSubBtn");
let GreaterReturn = document.getElementById("GreaterReturn");

let response = "";
let GreaterUrl = "";

GreaterSubBtn.addEventListener("click", function () {
    helloApi(GreaterInput, LessInput)
    GreaterReturn.textContent = response
    // withCors()
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            GreaterReturn.textContent = data
            console.log(data)
        }
    )
}

function helloApi(GreaterInput, LessInput){
    // var letters = /^[A-Za-z]+$/;
    // if(nameInput.value.match(letters)){
        savedInput = GreaterInput.value;
        savedInput2 = LessInput.value;
        GreaterUrl = "https://markallforone.azurewebsites.net/GTOLT/Greater/" + savedInput + "/" + savedInput2;
        urlCall(GreaterUrl)
    // }else{
        // sayHelloReturn.textContent = "Enter a valid respsonse";
    // }
}