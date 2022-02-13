function cleanRoom(dirtyLevel) { 

    return new Promise((resolve, reject) => {

        if(dirtyLevel <=0) {

            reject('Все чисто, уборка не требуется!')
        } else if (dirtyLevel > 10) {

            reject('Комната слишком грязная! Вызывайте клининг!')
        } else {

            setTimeout(()=> resolve(`Комната убрана за ${dirtyLevel} секунд.`), dirtyLevel * 1000)
        }
    })
 }

async function cleanRoomsStepByStep(dirtyLevel1, dirtyLevel2, dirtyLevel3) {
    
    try {

        const room1 = await cleanRoom(dirtyLevel1)

        const room2 = await cleanRoom(dirtyLevel2)

        const room3 = await cleanRoom(dirtyLevel3)

        console.log(room1, room2, room3)
    } 
    
    catch(err) {

        console.error(err)
    }
    
}

cleanRoomsStepByStep(3,5,4)