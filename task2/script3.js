let age = +prompt(`Сколько вам лет?`);

if (age>18) {

    console.log (`Здравствуйте, мне ` + age + ` лет.`)

} else if (age<=18 && age>0) {

    console.log (`Привет, мне ` + age + ` лет.`)
} else {

    console.log (`Неверно указан возраст`)
}

switch (true) {

    case (age>18): 
        console.log (`Здравствуйте, мне ` + age + ` лет.`);
        break;

    case (age<=18 && age>0):
        console.log (`Привет, мне ` + age + ` лет.`);
        break;

    default: 
    console.log (`Неверно указан возраст`)
}