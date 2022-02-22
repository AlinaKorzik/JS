let array = [1, 2, 3, 4, 5];

let string = 'Alina Korzik';

function arrayReverse (array) {

    for (let i = 0; i < Math.floor(array.length/2); i++) {

        let temp = array[i]

        array[i] = array[array.length - 1 - i]

        array[array.length - 1 - i] = temp

    }
}

function invert (data) {

    if (Array.isArray(data)) {

        arrayReverse(data)  
        
        return data

    } else if (typeof data == 'string') {

        let stringToArray = data.split('')

        arrayReverse(stringToArray)

        let arrayToString = stringToArray.join('')
        
        return arrayToString

    } else {

        console.log('Недопустимое значение!')

    }
}

console.log (invert (array));

console.log (invert(string));