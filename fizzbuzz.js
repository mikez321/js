let number = 0;
while (number <= 100) {
  if (number % 3 == 0 && number % 7 == 0) {
    console.log("FizzBuzz");
  }
  else if (number % 3 == 0) {
    console.log("Fizz");
  }
  else if (number % 7 == 0) {
    console.log("Buzz");
  }
  else (console.log(number));
  number += 1
}
