document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("calculator-form");
    const resultDisplay = document.getElementById("result");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const operand1 = parseFloat(document.getElementById("operand1").value);
        const operand2 = parseFloat(document.getElementById("operand2").value);
        const operation = document.querySelector('input[name="operation"]:checked').value;

        let result;

        switch (operation) {
            case "add":
                result = operand1 + operand2;
                break;
            case "subtract":
                result = operand1 - operand2;
                break;
            case "multiply":
                result = operand1 * operand2;
                break;
            case "divide":
                result = operand2 !== 0 ? operand1 / operand2 : "Cannot divide by zero";
                break;
            default:
                result = "Invalid operation";
        }

        resultDisplay.textContent = "Result: " + result;
    });
});