// const firstArr = [1, 2, 3, 5, -10, 6, 90, 23, -8];
// const secondArr = [1, -2, 50, 9, 8, 15, 2];
// const thirdArr = [1, 2, 3, 5, 19, 76, -67, 78];

// let firstSum;
// let secondSum;
// let thirdSum;


// function sum(arr) {

//     let result = 0;

//     for (let i = 0; i < arr.length; i++) {
    
//         if (arr[i] > 0 && arr[i] % 2 == 1) {
    
//             result += arr[i]
//         } 
//       }


    
//     return result
// }

// firstSum = sum(firstArr);
// secondSum = sum (secondArr);
// thirdSum = sum (thirdArr);

// console.log (firstSum);
// console.log (secondSum);
// console.log (thirdSum)

// ...

// [0, 1, 2, 3];

const array = [1, 2, 3, 4, 5, 1, 8, 3, 1]; // -1;

function secondIndexOf (x){

    for (let i = 0; i <= array.length; i++) {


        for (let j = 0; j <= array.length; j++) {

            if (array[i] == array[j]) {            

                console.log(array[j])

            }
        }
    }
}

secondIndexOf(array);

