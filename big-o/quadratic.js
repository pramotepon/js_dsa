const matchElement = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] === array[j]) {
                return `Index ${i} is match ${j}`;
            }
        }
    }
    return `Not match`;
}
const fruit = ["Orange", "Papaya", "Queen", "King", "Orange"];

console.log(matchElement(fruit));