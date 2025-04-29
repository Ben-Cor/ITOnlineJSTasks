document.addEventListener("DOMContentLoaded", function () {

    const calculate = document.getElementById("calculate");
    calculate.addEventListener("click", function () {
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        const num3 = parseFloat(document.getElementById("num3").value);
        const num4 = parseFloat(document.getElementById("num4").value);
        const num5 = parseFloat(document.getElementById("num5").value);

        const sum = document.getElementById("sum");
        sum.innerHTML = `Sum: ${num1 + num2 + num3 + num4 + num5}`;
        const average = document.getElementById("average");
        average.innerHTML = `Average: ${(num1 + num2 + num3 + num4 + num5) / 5}`;
        const max = document.getElementById("max");
        max.innerHTML = `Max: ${Math.max(num1, num2, num3, num4, num5)}`;
        const min = document.getElementById("min");
        min.innerHTML = `Min: ${Math.min(num1, num2, num3, num4, num5)}`;
    })
});