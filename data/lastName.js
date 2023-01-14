// last name
function withCors() {
    fetch('https://markallforone.azurewebsites.net/StudentDirectory/GetStudentByLastName/Gowen').then(
        responce => responce.json()
    ).then(
        data => console.log(data)
    )

}


withCors()