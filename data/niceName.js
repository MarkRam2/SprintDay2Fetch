
function withCors() {
    fetch('https://markallforone.azurewebsites.net/askingQuestions/Naming/Mark').then(
        responceAdd => responceAdd.text()
    ).then(
        data => console.log(data)
    )

}


withCors()