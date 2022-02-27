let string = '[ {"car": "BMW", "model": "5-series e39"}, {"car": "Honda", "model":  "Civic (5G)"}, {"car": "Nissan", "model": "Silvia (S14)"}, {"car": "Volkswagen", "model": "Golf MK 3"}]';

let arr = JSON.parse(string);

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

let germanCarsString = JSON.stringify(germanCarsArr)

let japanCarsString = JSON.stringify(japanCarsArr)

localStorage.setItem('german', germanCarsString)

localStorage.setItem('japan', japanCarsString)

window.onload = function () {

    let german_cars_arr = JSON.parse(localStorage.getItem('german'))

    let japan_cars_arr = JSON.parse(localStorage.getItem('japan'))

    let title1 = document.createElement('div')

    title1.innerHTML = 'GERMAN CARS'

    document.body.append(title1)

    for (let i = 0; i < german_cars_arr.length; i++) {

        let div1 = document.createElement('div');
    
        div1.innerHTML = `Car: ${german_cars_arr[i].car}, model: ${german_cars_arr[i].model} `;
    
        document.body.append (div1)
    }

    let title2 = document.createElement('div')

    title2.innerHTML = 'JAPAN CARS'

    document.body.append(title2)

    for (let j =0; j < japan_cars_arr.length; j++) {

        let div2 = document.createElement('div');
    
        div2.innerHTML = `Car: ${japan_cars_arr[j].car}, model: ${japan_cars_arr[j].model} `;
    
        document.body.append (div2)
    }
}

   