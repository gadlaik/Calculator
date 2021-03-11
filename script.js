const display = document.querySelector(".display");
display.textContent = "0";

function add(nums) {
  return nums.reduce((total, num) => (total += num), 0);
}
function subtr(num) {
  return num[0] - num[1];
}

let num = "";
let arr = [];
window.addEventListener("keyup", (e) => {
  console.log(e);
  switch (e.key) {
    case "Backspace":
      num = num.substr(0, num.length - 1);
      display.textContent = num;
      console.log(num);
      break;
    case "Delete":
      num = "";
      display.textContent = "0";
      arr = [];
      break;
    case "=":
      arr.push(parseInt(num));
      display.textContent = add(arr);
      num = add(arr);
      break;
    case "+":
      arr.push(parseInt(num));
      num = "";
      display.textContent = "+ ";
      break;
    case "0":
      display.textContent = num += "0";
      break;
    case "1":
      display.textContent = num += "1";
      break;
    case "2":
      display.textContent = num += "2";
      break;
    case "3":
      display.textContent = num += "3";
      break;
    case "4":
      display.textContent = num += "4";
      break;
    case "5":
      display.textContent = num += "5";
      break;
    case "6":
      display.textContent = num += "6";
      break;
    case "7":
      display.textContent = num += "7";
      break;
    case "8":
      display.textContent = num += "8";
      break;
    case "9":
      display.textContent = num += "9";
      break;
  }
});
