function cleanRoomsStepByStep(dirtyLevel1, dirtyLevel2, dirtyLevel3) {

    let previousRoomIsCleaned = true

        new Promise (function (resolve, reject) {

            let cleaningTime = dirtyLevel1 * 1000

            if (dirtyLevel1 > 0 && dirtyLevel1 <= 10) {

                setTimeout(() => resolve(), cleaningTime)
            } else {

                reject(new Error('Уборка первой комнаты невозможна, проверяем остальные!'))
            }
        })

        .catch((err) => {

            previousRoomIsCleaned = false
            console.error(err)
        })

        .then(() => {

            if (previousRoomIsCleaned) {

                console.log(`Уборка первой комнаты завершена`)
            }

            return new Promise (function (resolve, reject) {

            cleaningTime = dirtyLevel2 * 1000

            if(dirtyLevel2 > 0 && dirtyLevel2 <= 10) {

                previousRoomIsCleaned = true

                setTimeout(() => resolve( ), cleaningTime)
            } else{
                       
                reject(new Error('Уборка второй комнаты невозможна, проверяем остальные!'))
            }
            })
        })

        .catch((err) => {

            previousRoomIsCleaned = false
            console.error(err)
        })

        .then(() => {

            if(previousRoomIsCleaned) {
                
                console.log(`Уборка второй комнаты завершена`)
            }
            
            return new Promise (function (resolve, reject) {

            cleaningTime = dirtyLevel3 * 1000

                if(dirtyLevel3 > 0 && dirtyLevel3 <= 10) {

                    previousRoomIsCleaned = true

                    setTimeout(() => resolve(), cleaningTime)
                } else {

                    reject(new Error('Уборка третьей комнаты невозможна!'))
                }                  
            })
        })

        .then(() => {

            console.log(`Уборка третьей комнаты завершена. Уборка закончена`)
        })

        .catch((err) => {

            console.error(err)
        })

} 

cleanRoomsStepByStep(5,12,2)
