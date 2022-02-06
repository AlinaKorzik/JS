new Promise (function cleanRoom (resolve, reject) {

    setTimeout(() => resolve(), 5000)

})
.then (() => {

    console.log("Команата убрана")
})

