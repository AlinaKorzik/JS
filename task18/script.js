const getPosts = async () => {

    try {

        const getResponse = await fetch('https://jsonplaceholder.typicode.com/posts')

        if(getResponse.ok) {

            const getData = await getResponse.json()

            console.log(getData)
        } else {

            console.log('Not success')
        }

    } catch(err) {

        console.error(err)
    }
}

const postPosts = async () => {

    try {

        const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts', {

            method: 'POST',
            body: JSON.stringify({
                title: 'hello',
                body: 'this is post',
                userId: 1,
            })
        })

        if(postResponse.ok) {

            const postData = await postResponse.json()

            console.log(postData)
        } else {

            console.log('Not success')
        }

    } catch(err) {

        console.error(err)
    }
}

const putPosts = async () => {

    try {

        const putResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1', {

            method: 'PUT',
            body: JSON.stringify({
                title: 'hello',
                body: 'this is post',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })

        if(putResponse.ok) {

            const putData = await putResponse.json()

            console.log(putData)
        } else {

            console.log('Not success')
        }

    } catch(err) {

        console.error(err)
    }
}

const patchPosts = async () => {

    try {

        const patchResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1', {

            method: 'PATCH',
            body: JSON.stringify({
                title: 'hello',
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })

        if(patchResponse.ok) {

            const patchData = await patchResponse.json()

            console.log(patchData)
        } else {

            console.log('Not success')
        }

    } catch(err) {

        console.error(err)
    }
}

const deletePosts = async () => {

    try {

        const deleteResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1', {

            method: 'DELETE',
        })

        if(deleteResponse.ok) {

            const deleteData = await deleteResponse.json()

            console.log(deleteData)
        } else {

            console.log('Not success')
        }

    } catch(err) {

        console.error(err)
    }
}

getPosts()
postPosts()
putPosts()
patchPosts()
deletePosts()
