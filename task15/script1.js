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
 }

function cleanRoomsAll (dirtyLevel1, dirtyLevel2, dirtyLevel3) {

    let promise_1 = cleanRoom(dirtyLevel1)

    let promise_2 = cleanRoom(dirtyLevel2)

    let promise_3 = cleanRoom(dirtyLevel3)

    return Promise.allSettled([promise_1, promise_2, promise_3])

    .then(result => {

        console.log(`Уборка завершена!`, result)
    })
}

cleanRoomsAll(3,12,4)