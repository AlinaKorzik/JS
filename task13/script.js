function getDateAgo(date, days) {

    let enterDate = Date.parse(date.split('-').reverse().join('-'))

    let ms = days * 24 * 60 * 60 *1000

    let dateAgo = new Date(enterDate - ms)

    console.log(dateAgo)    
    
}

getDateAgo('05-01-2021', 6)