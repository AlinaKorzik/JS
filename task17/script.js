const getAlbums = async () => {

    try {

        const get = await fetch('https://jsonplaceholder.typicode.com/albums')

        if(get.ok) {

            const data = await get.json()

            console.log('Data:', data)

            let albumsArr = []

            for(let i = 0; i < data.length; i++) {

                if(data[i].userId == 1 || data[i].userId == 4) {

                    albumsArr.push(data[i])
                }
            }

            console.log('albumsArr:', albumsArr)


        } else {

            console.log('Error')
        }
    }

    catch(err) {

        console.error(err)
    }
}

getAlbums()