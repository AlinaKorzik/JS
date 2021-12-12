const arr1 = [1, 2, 3, 4, 5, -10, 6, 90, 23, -8];

const arr2 = [1, -2, 50, 9, -8, 15, 2];     

const arr3 = [1, 2, 3, 5, 19, -76, -67, 78];

function getNewArrFromGroup () {

    let arrNew = [];

    for (let i = 0; i < arguments.length; i++) {

            for (let j = 0; j < arguments[i].length; j++) {

                if (arguments[i][j] < 0 && arguments[i][j] % 2 == 0) {

                arrNew.push (arguments[i][j])
                } 
            }
    }

    return arrNew
}

