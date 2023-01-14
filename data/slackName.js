let slackInput = document.getElementById("slackInput")
let slackSubBtn = document.getElementById("slackSubBtn")

let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let slackName = document.getElementById("slackName")
let email = document.getElementById("email")
let hobby = document.getElementById("hobby")

let studentInfo = []

function getJson(){
    fetch('https://markallforone.azurewebsites.net/StudentDirectory/StudentList/studentList').then(
        response => response.json()
    ).then(
        //Forgot to data to the Array we declared
        // data => studentNames = data.studentNames
        data => console.log(data)
    )
}

function getJson() {
    fetch('https://markallforone.azurewebsites.net/StudentDirectory/StudentList/studentList').then(
        responce => responce.json()
    ).then(
        data => console.log(data)
    )

}


