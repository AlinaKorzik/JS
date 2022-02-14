let string = '[ {"car": "BMW", "model": "5-series e39"}, {"car": "Honda", "model":  "Civic (5G)"}, {"car": "Nissan", "model": "Silvia (S14)"}, {"car": "Volkswagen", "model": "Golf MK 3"}]';

let arr = JSON.parse(string);

console.log(arr)

let germanCars = ["BMW", "Volkswagen"];

let japanCars = ["Honda", "Nissan"]

let germanCarsArr = arr.filter((item) => {

    for(let i = 0; i<germanCars.length; i++) {

        if(item.car == germanCars[i]) {

            return item
        }
    }
})

let japanCarsArr = arr.filter((item) => {

    for(let j = 0; j<japanCars.length; j++) {

        if(item.car == japanCars[j]) {

            return item
        }
    }
})

console.log(germanCarsArr, japanCarsArr)

let germanCarsString = JSON.stringify(germanCarsArr)

let japanCarsString = JSON.stringify(japanCarsArr)

console.log(germanCarsString, japanCarsString)



   