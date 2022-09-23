let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
changeColor(input1.value, input2.value);

input1.addEventListener("input",() => {
    changeColor(input1.value, input2.value);

});

input2.addEventListener("input",() => {
    changeColor(input1.value, input2.value);

});

function changeColor(color1, color2) {
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  }

