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

 cleanRoom(9)

    .then((result) => {
        
        console.log(`Уборка проведена за ${result} секунд `)
    })














