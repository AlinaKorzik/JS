async function cleanRoomsStepByStep(dirtyLevel1, dirtyLevel2, dirtyLevel3) {

    let promise_1 = new Promise (function (resolve, reject) {

        let cleaningTime = dirtyLevel1 * 1000
    
        if (dirtyLevel1 > 0 && dirtyLevel1 <= 10) {
    
            setTimeout(() => resolve(`Уборка первой комнаты завершена`), cleaningTime)
        }
    });
    
    let promise_2 = new Promise (function (resolve, reject) {
    
        cleaningTime = dirtyLevel2 * 1000
    
        if(dirtyLevel2 > 0 && dirtyLevel2 <= 10) {
    
            setTimeout(() => resolve(`Уборка второй комнаты завершена`), cleaningTime)
        }
    });
    
    let promise_3 = new Promise (function (resolve, reject) {
    
        cleaningTime = dirtyLevel3 * 1000
    
            if(dirtyLevel3 > 0 && dirtyLevel3 <= 10) {
    
                setTimeout(() => resolve(`Уборка третьей комнаты завершена`), cleaningTime)
            }               
    });

    if(dirtyLevel1 < 0 || dirtyLevel1 > 10 || dirtyLevel2 < 0 || dirtyLevel2 > 10 || dirtyLevel3 < 0 || dirtyLevel3 > 10) {

        console.error ('Превышен уровень загрязнения! Уборка не проводится!')
    } else {

        const room1 = await promise_1
        console.log(room1)

        const room2 = await promise_2
        console.log(room2)

        const room3 = await promise_3
        console.log(room3)
    }
}

cleanRoomsStepByStep(3,5,4)