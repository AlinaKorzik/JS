function cleanRoom(dirtyLevel) { 

    if (dirtyLevel > 0 && dirtyLevel <= 10) {

        let cleaningTime = dirtyLevel * 1000

        new Promise (function (resolve, reject) {

            setTimeout(() => resolve(cleaningTime), cleaningTime)

        })

        .then (() => {

            console.log(`Уборка проведена успешно за ${cleaningTime} секунд`)
        })

    } else if (dirtyLevel <= 0) {

        console.log(`Комната чистая, уборка не требуется!`)
    } else {

        console.log(`Комната слишком грязная, вызывайте клининг!`)
    }
 }

 cleanRoom(9)














