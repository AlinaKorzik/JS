let expectedColor = prompt(`Загадайте цвет:`);

let attemptNumber = prompt(`Введите кол-во попыток:`);

let color = prompt(`Угадайте цвет:`);

let counter = 1;

while (color!=expectedColor && counter<attemptNumber) {

    alert (`Вы не угадали`);
    counter++;
    color = prompt(`Угадайте цвет:`);
}

if (counter>=attemptNumber){

    alert(`Попытки закончились, вы не угадали`)

} else {
    
    alert (`Вы угадали!`);
}

