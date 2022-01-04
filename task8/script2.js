let arr = [1, "str", 24, {name: "Ivan"}, 89, `undeifined`, "10"];

let [firstElement, secondElement, , , fifthElement, ...otherElements] = arr;

console.log (firstElement);

console.log (secondElement);

console.log (fifthElement);

console.log (otherElements);