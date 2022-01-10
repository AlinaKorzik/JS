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

houseBuilder.prototype.calcArea = function () {

    const {width, length, numberOfFloors} = this; 

    this.totalArea = width * length * numberOfFloors;

}

firstHouse.calcArea ();

secondHouse.calcArea ();

console.log (firstHouse.totalArea);

console.log (secondHouse.totalArea);