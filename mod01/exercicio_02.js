let x = 10;
let y = 589;
let arrPar = [];
let arrImpar = [];

function pares(x, y) {
  for (x = x; x <= y; x++) {
    if (x % 2 == 0) {
      arrPar.push(x);
    } else {
      arrImpar.push(x);
    }
  }
  return arrPar;
}
console.log("Pares:", pares(32, 321));
