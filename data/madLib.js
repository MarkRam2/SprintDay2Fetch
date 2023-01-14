// inputs
let FadjectiveInput = document.getElementById("FadjectiveInput");
let EventInput = document.getElementById("EventInput");
let FverbInput = document.getElementById("FverbInput");
let SadjectiveInput = document.getElementById("SadjectiveInput");
let GenderInput = document.getElementById("GenderInput");
let creatureInput = document.getElementById("creatureInput");
let FnounInput = document.getElementById("FnounInput")
let SverbInput = document.getElementById("SverbInput");
let TadjectiveInput = document.getElementById("TadjectiveInput");
let SnounInput = document.getElementById("SnounInput");
let LadjectiveInput = document.getElementById("LadjectiveInput");
let TverbInput = document.getElementById("TverbInput");
// sub btn
let madSubBtn = document.getElementById("madSubBtn");
// return text
let madReturn = document.getElementById("madReturn");
// yada daba doo
let response = "";
let madUrl = "";

madSubBtn.addEventListener("click", function () {
    helloApi(FadjectiveInput, EventInput, FverbInput, SadjectiveInput, GenderInput, creatureInput,FnounInput,SverbInput,TadjectiveInput,SnounInput,LadjectiveInput,TverbInput)
    madReturn.textContent = response
    // withCors()
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            madReturn.textContent = data
            console.log(data)
        }
    )
}

function helloApi(FadjectiveInput, EventInput, FverbInput, SadjectiveInput, GenderInput, creatureInput,FnounInput,SverbInput,TadjectiveInput,SnounInput,LadjectiveInput,TverbInput){
    // var letters = /^[A-Za-z]+$/;
    // if(nameInput.value.match(letters)){
        savedInput1 = FadjectiveInput.value;
        savedInput2 = EventInput.value;
        savedInput3 = FverbInput.value;
        savedInput4 = SadjectiveInput.value;
        savedInput5 = GenderInput.value;
        savedInput6 = creatureInput.value;
        savedInput7 = FnounInput.value;
        savedInput8 = SverbInput.value;
        savedInput9 = TadjectiveInput.value;
        savedInput10 = SnounInput.value;
        savedInput11 = LadjectiveInput;
        savedInput12 = TverbInput;
        madUrl = "https://markallforone.azurewebsites.net/madLib/Mad/" + savedInput1 + "/" + savedInput2 + "/" + savedInput3 + "/" + savedInput4 + "/" + savedInput5 + "/" + savedInput6 + "/" + savedInput7 + "/" + savedInput8 + "/" + savedInput9 + "/" + savedInput10 + "/" + savedInput11 + "/" + savedInput12;
        urlCall(madUrl)
    // }else{
        // sayHelloReturn.textContent = "Enter a valid respsonse";
    // }
}