function cleanRoomsAll (dirtyLevel1, dirtyLevel2, dirtyLevel3) {

    let promise_1 = new Promise (function (resolve, reject) {

        let cleaningTime = dirtyLevel1 * 1000

        if (dirtyLevel1 > 0 && dirtyLevel1 <= 10) {

            setTimeout(() => resolve(`Уборка первой комнаты завершена`), cleaningTime)
        } else {

            reject(new Error('Уборка первой комнаты невозможна, проверяем остальные!'))
        }
    });

    let promise_2 = new Promise (function (resolve, reject) {

        cleaningTime = dirtyLevel2 * 1000

        if(dirtyLevel2 > 0 && dirtyLevel2 <= 10) {

            setTimeout(() => resolve(`Уборка второй комнаты завершена`), cleaningTime)
        } else{
                   
            reject(new Error('Уборка второй комнаты невозможна, проверяем остальные!'))
        }
    });

    let promise_3 = new Promise (function (resolve, reject) {

        cleaningTime = dirtyLevel3 * 1000
    
            if(dirtyLevel3 > 0 && dirtyLevel3 <= 10) {
    
                setTimeout(() => resolve(`Уборка третьей комнаты завершена`), cleaningTime)
            } else {
    
                reject(new Error('Уборка третьей комнаты невозможна!'))
            }                  
    });

    Promise.allSettled([promise_1, promise_2, promise_3])

    .then(result => {

        console.log(result)
    })
}

cleanRoomsAll(3,12,4)