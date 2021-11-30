let age = +prompt(`Сколько вам лет?`);

if (age>0) {

    console.log (`Привет, мне ` + age + ` лет.`)

} else {

    console.log (`Неверно указан возраст`)
}

let result = age>0 ? console.log (`Привет, мне ` + age + ` лет.`) : console.log (`Неверно указан возраст`)