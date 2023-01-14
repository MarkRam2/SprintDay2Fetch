let sayHelloInput = document.getElementById("sayHelloInput");
let sayHelloSubBtn = document.getElementById("sayHelloSubBtn");
let sayHelloReturn = document.getElementById("sayHelloReturn");

let response = "";
let sayHelloUrl = "";

sayHelloSubBtn.addEventListener("click", function () {
    helloApi(sayHelloInput)
    sayHelloReturn.textContent = response
    // withCors()
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            sayHelloReturn.textContent = data
            console.log(data)
        }
    )
}

function helloApi(sayHelloInput){
    // var letters = /^[A-Za-z]+$/;
    // if(nameInput.value.match(letters)){
        savedInput = sayHelloInput.value;
        sayHelloUrl = "https://markallforone.azurewebsites.net/SayHello/Hello/" + savedInput;
        urlCall(sayHelloUrl)
    // }else{
        // sayHelloReturn.textContent = "Enter a valid respsonse";
    // }
}


// function withCors() {
//     fetch('https://markallforone.azurewebsites.net/SayHello/Hello/Mark').then(
//         responce => responce.text()
//     ).then(
//         data => console.log(data)
//     )

// }


// withCors()