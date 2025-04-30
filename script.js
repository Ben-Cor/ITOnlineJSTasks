document.addEventListener("DOMContentLoaded", function () {
    const calculate = document.getElementById("calculate");

    function maths() {
        // Dynamically retrieve input values on each button press
        const num1 = parseFloat(document.getElementById("num1").value) || 0;
        const num2 = parseFloat(document.getElementById("num2").value) || 0;
        const num3 = parseFloat(document.getElementById("num3").value) || 0;
        const num4 = parseFloat(document.getElementById("num4").value) || 0;
        const num5 = parseFloat(document.getElementById("num5").value) || 0;
        const numbers = [num1, num2, num3, num4, num5];

        // Perform calculations
        const sumText = document.getElementById("sum");
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        sumText.innerHTML = `Sum: ${sum}`;

        const averageText = document.getElementById("average");
        let average = Math.round((sum / numbers.length)*100)/100;
        averageText.innerHTML = `Average: ${average}`;

        const maxText = document.getElementById("max");
        const max = Math.max(...numbers);
        maxText.innerHTML = `Max: ${max}`;

        const minText = document.getElementById("min");
        const min = Math.min(...numbers);
        minText.innerHTML = `Min: ${min}`;
    }

    calculate.addEventListener("click", function () {
        maths(); // Recalculate on button press
    });
});

// Example of a shopping list
let shoppingList = ["Bread", "Milk", "Eggs", "Butter", "Cheese"];

function addItem(item) {
    shoppingList.push(item);
    console.log(`Added ${item} to the shopping list.`);
    console.log(`Current shopping list: ${shoppingList}`);
}
function removeLastItem() {
    shoppingList.pop();
    console.log(`Removed last from the shopping list.`);
    console.log(`Current shopping list: ${shoppingList}`);
}
function removeFirstItem() {
    shoppingList.shift();
    console.log(`Removed first from the shopping list.`);
    console.log(`Current shopping list: ${shoppingList}`);
}
function addToStart(item) {
    shoppingList.unshift(item);
    console.log(`Added ${item} to the start of the shopping list.`);
    console.log(`Current shopping list: ${shoppingList}`);
}function removeSpecificItem(item) {
    const index = shoppingList.indexOf(item);
    if (index > -1) {
        shoppingList.splice(index, 1);
        console.log(`Removed ${item} from the shopping list.`);
    } else {
        console.log(`${item} not found in the shopping list.`);
    }
    console.log(`Current shopping list: ${shoppingList}`);
}