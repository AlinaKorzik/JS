var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];

let newArr = arr.reduce ((start, current) => {

    if (start.indexOf(current) == -1) {

    start.push(current)
   }

   return start

}, [])

console.log (newArr)