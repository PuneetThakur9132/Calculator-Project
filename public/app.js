const buttons = document.querySelectorAll(".buttons");
const clearbtn = document.querySelector("#clear");
const calcbtn = document.querySelector("#calc");
const result = document.querySelector("#result");

for (let button of buttons) {
  button.addEventListener("click", function (e) {
    if (e.target.value !== undefined && e.target.value !== "=") {
      result.value += e.target.value;
    }
  });
}

clearbtn.addEventListener("click", function () {
  result.value = "";
});

calcbtn.addEventListener("click", function () {
  let value = result.value;
  let ans = eval(value);
  result.value = ans;
});
