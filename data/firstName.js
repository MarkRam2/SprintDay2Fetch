let nameInput = document.getElementById("nameInput");
let studentReturn = document.getElementById("helloReturn");
let studentSubBtn = document.getElementById("helloSubBtn");

//console.log(nameInput, helloReturn, helloSubBtn);
let savedInput = "";
let studentFirstNameUrl = "";



helloSubBtn.addEventListener("click", function () {
helloApi(nameInput)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            helloReturn.textContent = data
            console.log(data)
        }
    )
}

function helloApi(nameInput){
    var letters = /^[A-Za-z]+$/;
    if(nameInput.value.match(letters)){
        savedInput = nameInput.value;
        studentFirstNameUrl = "https://markallforone.azurewebsites.net/StudentDirectory/GetStudentByFirstName/" + savedInput;
        urlCall(sayHelloUrl)
    }else{
        helloReturn.textContent = "Enter a valid respsonse";
    }
}