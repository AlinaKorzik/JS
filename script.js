let user = {

    name: prompt(`Введите ваше имя:`),
    surname: prompt(`Введите вашу фамилию:`),
    age: prompt(`Введите ваш возраст:`),
    city: prompt(`В каком городе вы проживаете?`),
    isDriver: confirm(`У вас есть водительское удостоверение?`),
    }

    user.age = Number(user.age);

    if (user.isDriver) {
        
        console.log (`Привет, меня зовут ` + user.name + ` ` + user.surname + `, мне ` + user.age + ` лет, я живу в городе ` + user.city + `. Я вожу машину.`)
    } else {

        console.log (`Привет, меня зовут ` + user.name + ` ` + user.surname + `, мне ` + user.age + ` лет, я живу в городе ` + user.city + `. Я не вожу машину.`)
    }