function User (name, surname, age, city) {

    this.first_name = name;

    this.secon_name = surname;

    this.age = age;

    this.city = city;

}

let user1 = new User (`Alina`, `Korzik`, 26, `Minsk`);

let user2 = new User (`Andrey`, `Ivanov`, 25, `Moskow`);

console.log (user1);

console.log (user2);