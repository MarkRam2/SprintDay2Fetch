// email
function withCors() {
    fetch('https://markallforone.azurewebsites.net/StudentDirectory/GetStudentByEmail/Egarcia@codestack.co').then(
        responce => responce.json()
    ).then(
        data => console.log(data)
    )

}


withCors()