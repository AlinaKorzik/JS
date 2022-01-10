function houseBuilder (width, length, numberOfFloors) {

    if(typeof width == "number" && typeof length == "number" && typeof numberOfFloors == "number") {

    this.width = width;
    this.length = length;
    this.numberOfFloors = numberOfFloors;
    } else {

        console.log ("Допустимы только числовые значения!")
    }
}

firstHouse = new houseBuilder (10, 10, 3);

secondHouse = new houseBuilder (10, 15, 2);

console.log (firstHouse);

console.log (secondHouse);
