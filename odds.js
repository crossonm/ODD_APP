/* for (let current = 0;current < 100 ; current = current + 1) {
    if (current % 2 == 0) {
      console.log(current);
      break;
    }
  }
  
  This was a bad piece of code from 'Essential JavaScript */

  

  

function oddNumbers() {
// If a number is odd, then that number % 2 !=== 0
// If a number is even, then that number % 2 === 0

    var currentNumber = Number(prompt("Enter a number"))

    document.getElementById("num").innerHTML = "Your number is: " + currentNumber;

  if (currentNumber %2 === 0){
    var msgEven = "The number: " + currentNumber + " is even.";
    document.getElementById("result").innerHTML = msgEven;
  } 
  else {
      var msgOdd = "The number: " + currentNumber + " is odd.";
      document.getElementById("result").innerHTML = msgOdd;
    }

}
