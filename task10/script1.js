class House {

    constructor(width, length, floors) {

        this.width = width;
        this.length = length;
        this.floors = floors;        
    }

    static sortByFloors (array) {

        for (let i=0; i<array.length-1; i++) {
       
            for (let j=0; j<array.length-1; j++) {

                if (array[j].floors > array[j+1].floors) {

                    let temp = array[j+1];

                    array[j+1] = array[j];

                    array[j] = temp;
                }

            }
        }

        return array
    }
}

class Skyscraper extends House {

    constructor(width, length, floors, offices) {

        super (width, length, floors);
        this.offices = offices;
    }
   
}

firstSkyscraper = new Skyscraper (10, 10, 10);

secondSkyscraper = new Skyscraper (10, 15, 20);

thirdSkyscraper = new Skyscraper (10, 9, 15);

let skyscrapers = [firstSkyscraper, secondSkyscraper, thirdSkyscraper];

console.log(Skyscraper.sortByFloors(skyscrapers));


