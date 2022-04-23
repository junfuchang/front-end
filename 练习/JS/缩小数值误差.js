//
function add(num1, num2) {
  let maxLength = Math.max(
    num1.toString().split(".")[1].length,
    num2.toString().split(".")[1].length
  );
  const base = 10 ** maxLength;
  const upperNumber1 = base * num1;
  const upperNumber2 = base * num2;
  console.log(upperNumber1, upperNumber2, base);
  return (upperNumber1 + upperNumber2) / base;
}

let myValue = add(0.1, 0.2);
console.log(myValue);
