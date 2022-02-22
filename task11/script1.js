const users = [{name: `Ivan`, age: 18}, {name: `Petr`, age: 12}, {name: `Sidor`, age: 25}, {name: `Pavel`, age: 16}, {name: `Sasha`, age: 29}];

for (let i = 0; i < users.length; i++) {

    let div = document.createElement('div');

    div.innerHTML = `User № ${i+1}: name ${users[i].name}, age ${users[i].age} `;

    document.body.append (div)
}