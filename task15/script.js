function cleanRoom(dirtyLevel) { 

    return new Promise((resolve, reject) => {

        if(dirtyLevel <=0) {

            reject('Все чисто, уборка не требуется!')
        } else if (dirtyLevel > 10) {

            reject('Комната слишком грязная! Вызывайте клининг!')
        } else {

            setTimeout(()=> resolve(dirtyLevel), dirtyLevel * 1000)
        }
    })

    .catch((err) => {

        console.error(err)
    })
 }

function cleanRoomsStepByStep(dirtyLevel1, dirtyLevel2, dirtyLevel3) {

    return cleanRoom(dirtyLevel1)

        .then((result) => {

            if(result) {

                console.log(`Уборка первой комнаты проведена за ${result} секунд.`)
            }

            return cleanRoom(dirtyLevel2)
        })    

        .then((result)=> {

            if(result) {

                console.log(`Уборка второй комнаты проведена за ${result} секунд.`)
            }

            return cleanRoom(dirtyLevel3)
        })    

        .then((result) => {

            if(result) {

                console.log(`Уборка третьей комнаты проведена за ${result} секунд.`)
            }            
        })
} 

cleanRoomsStepByStep(5,12,2)
