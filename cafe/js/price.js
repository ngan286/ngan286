// var number = document.querySelector(".number");
// function goup(){
//     var tmp = +number.textContent + 1
//     if (tmp > 10) tmp = 10;
//     number.textContent = tmp;
// }

// function godown(){
//     var tmp = +number.textContent - 1
//     if (tmp < 1) tmp = 1;
//     number.textContent = tmp;
// }

var price = document.querySelector(".price span");
var total = document.querySelector(".subtotal_price span");
var number = document.querySelector(".number");

function goup() {
  var tmp = +number.textContent + 1;
  if (tmp > 69) tmp = 69;
  number.textContent = tmp;
  total.textContent = +price.textContent * number.textContent;
}

function godown() {
  var tmp = +number.textContent - 1;
  if (tmp < 1) tmp = 1;
  number.textContent = tmp;
  total.textContent = +price.textContent * number.textContent;
}

