const display = document.querySelector(".display");
const keypad = document.querySelector(".keypad");
const clearDel = document.querySelector(".clearDel");

function add(int1, int2) {
  return Number(int1) + Number(int2);
}
function subtr(int1, int2) {
  return Number(int1) - Number(int2);
}
function multiply(int1, int2) {
  int1 = Number(int1) * Number(int2);
  return Math.round(int1 * 100) / 100;
}
function divide(int1, int2) {
  int1 = Number(int1) / Number(int2);
  return Math.round(int1 * 100) / 100;
}

let num = "";
let num2 = "";
let operand = "";
let disable = true;

keypad.addEventListener("click", (e) => {
  e.preventDefault();
  switch (e.target.textContent) {
    case "1":
      num += "1";
      display.textContent = num;
      break;
    case "2":
      num += "2";
      display.textContent = num;
      break;
    case "3":
      num += "3";
      display.textContent = num;
      break;
    case "4":
      num += "4";
      display.textContent = num;
      break;
    case "5":
      num += "5";
      display.textContent = num;
      break;
    case "6":
      num += "6";
      display.textContent = num;
      break;
    case "7":
      num += "7";
      display.textContent = num;
      break;
    case "8":
      num += "8";
      display.textContent = num;
      break;
    case "9":
      num += "9";
      display.textContent = num;
      break;
    case "0":
      num += "0";
      display.textContent = num;
      break;
    case "+":
      operand = "+";
      display.textContent = "";
      if (num2.length == 0) {
        num2 = num;
        num = "";
      } else if (num.length == 0) {
        return;
      } else {
        display.textContent = add(num2, num);
        num2 = add(num2, num);
        num = "";
      }
      break;
    case "-":
      operand = "-";
      display.textContent = "";
      if (num2.length == 0) {
        num2 = num;
        num = "";
      } else if (num.length == 0) {
        return;
      } else {
        display.textContent = subtr(num2, num);
        num2 = subtr(num2, num);
        num = "";
      }
      break;
    case "*":
      operand = "*";
      display.textContent = "";
      if (num2.length == 0) {
        num2 = num;
        num = "";
      } else if (num.length == 0) {
        return;
      } else {
        display.textContent = multiply(num2, num);
        num2 = multiply(num2, num);
        num = "";
      }
      break;
    case "/":
      operand = "/";
      display.textContent = "";
      if (num2.length == 0) {
        num2 = num;
        num = "";
      } else if (num.length == 0) {
        return;
      } else {
        display.textContent = divide(num2, num);
        num2 = divide(num2, num);
        num = "";
      }
      break;
    case ".":
      num += ".";
      display.textContent = num;
      break;
    case "=":
      display.textContent = "";
      if (num2.length == 0) {
        num2 = num;
        num = "";
      } else {
        switch (operand) {
          case "+":
            display.textContent = add(num2, num);
            num2 = add(num2, num);
            num = "";
            break;
          case "-":
            display.textContent = subtr(num2, num);
            num2 = subtr(num2, num);
            num = "";
            break;
          case "*":
            display.textContent = multiply(num2, num);
            num2 = multiply(num2, num);
            num = "";
            break;
          case "/":
            display.textContent = divide(num2, num);
            num2 = divide(num2, num);
            num = "";
            break;
          case "":
            display.textContent = num2;
        }
        operand = "";
      }
      break;
  }
});

clearDel.addEventListener("click", (e) => {
  e.preventDefault();

  switch (e.target.classList.value) {
    case "clear":
      num = "";
      num2 = "";
      display.textContent = num;
      disable = true;
      break;
    case "delete":
      num = num.substr(0, num.length - 1);
      display.textContent = num;
      break;
  }
});
