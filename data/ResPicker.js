let fastfoodSubBtn = document.getElementById("fastfoodSubBtn");
let resturantSubBtn = document.getElementById("resturantSubBtn");
let dateNightSubBtn = document.getElementById("dateNightSubBtn");
let randomSubBtn = document.getElementById("randomSubBtn");
let Return = document.getElementById("Return");
var Choice = "";
let response = "";
let timeUrl = "";

fastfoodSubBtn.addEventListener("click", function () {
    timeApi(Choice = "fast food")
})

resturantSubBtn.addEventListener("click", function () {
    timeApi(Choice = "resturant")
})

dateNightSubBtn.addEventListener("click", function () {
    timeApi(Choice = "date night")
})

randomSubBtn.addEventListener("click", function () {
    timeApi(Choice = "random")
})

function urlCall2(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            Return.textContent = data
            console.log(data)
        }
    )
}

function timeApi(Choice){

        savedInput = Choice.value;
        timeUrl = "https://markallforone.azurewebsites.net/ResturantPicker/Choice/" + Choice;
        urlCall2(timeUrl)
        
}