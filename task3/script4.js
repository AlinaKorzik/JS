const userPetya = {
    name: "Petya",
    transactions: [123, 123213213, -5, -8],
    sum: 15
};


const userVasya = {
    name: "Vasya",
    transactions: [10, 20, -5, -8],
    sum: 10
};

let arr = [];

console.everyUserName = function (users, prefix) {
    
    for (let i = 0; i < users.length; i++) {

    let result = prefix + users[i].name

        console.log (result)

    }
};

console.everyUserTransactions = function (users, prefix) {
    
    for (let i = 0; i < users.length; i++) {

    let result = prefix + users[i].transactions

        console.log (result)

    }
};

console.everyUserSum = function (users, prefix) {
    
    for (let i = 0; i < users.length; i++) {

    let result = prefix + users[i].sum

        console.log (result)

    }
};

console.everyUserName ([userPetya, userVasya], `Имя пользователя: `);

console.everyUserTransactions ([userPetya, userVasya], `Транзакции пользователя: `);

console.everyUserSum ([userPetya, userVasya], `Сумма пользователя: `);
