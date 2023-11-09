/** let's create a small script
 * where users can input two numbers,
 * choose an operation
 * (addition, subtraction, multiplication or division),
 * and see the result.
 */

// Create a function to perform a calculation based on user input

// Add an event listener for the calculate button.

function calculate(onClick) {
  let operand1 = parseFloat(document.getElementById("firstoperand").value);
  let operand2 = parseFloat(document.getElementById("secondoperand").value);
  let operation = document.getElementById("math_operation").value;
  let result = document.getElementById("result");

  if (operation === "addition") {
    result.innerHTML = operand1 + operand2;
  } else if (operation === "subtraction") {
    result.innerHTML = operand1 - operand2;
  } else if (operation === "multiplication") {
    result.innerHTML = operand1 * operand2;
  } else if (operation === "division") {
    result.innerHTML = operand1 / operand2;
  } else {
    result.innerHTML = "Invalid calculation";
  }
  document.getElementById(
    "result"
  ).innerHTML = `Result is ${result.textContent}`;
}

document.getElementById("presmetaj").addEventListener("click", calculate);
