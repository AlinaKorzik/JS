class User {

    constructor (first_name, second_name, age, city) {

        this.first_name = first_name;
        this.second_name = second_name;
        this.age = age;
        this.city = city;
    }
}

firstUser = new User (`Alina`, `Korzik`, 26, `Minsk`);

secondUser = new User (`Andrey`, `Ivanov`, 35, `Moskow`);

function info () {

    console.log (`Name: ${this.first_name}; Surname: ${this.second_name}; Age: ${this.age}; City: ${this.city}`)
}

info.call(firstUser);

info.call(secondUser);