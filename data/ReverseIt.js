let reverseInput = document.getElementById("reverseInput");
let reverseSubBtn = document.getElementById("reverseSubBtn");
let reverseReturn = document.getElementById("reverseReturn");

let response = "";
let reverseUrl = "";

reverseSubBtn.addEventListener("click", function () {
    helloApi(reverseInput)
    reverseReturn.textContent = response
    // withCors()
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            reverseReturn.textContent = data
            console.log(data)
        }
    )
}

function helloApi(reverseInput){
    // var letters = /^[A-Za-z]+$/;
    // if(nameInput.value.match(letters)){
        savedInput = reverseInput.value;
        reverseUrl = "https://markallforone.azurewebsites.net/ReverseIt/Reversed/" + savedInput;
        urlCall(reverseUrl)
    // }else{
        // sayHelloReturn.textContent = "Enter a valid respsonse";
    // }
}