console.log("Hola holita");

function popPrompt() {
  let valueOne = prompt("Escriba un numero del 1 al 50");
  let valueTwo = prompt("Escriba otro numero del 1 al 50");

  if (valueOne >= 1 && valueOne <= 50 && valueTwo >= 1 && valueTwo <= 50) {
    valueOne = Number(valueOne);
    valueTwo = Number(valueTwo);

    let onePlusTwo = valueOne + valueTwo;

    //---------------CHECK: PRIME AND EVEN-------------------
    const primeNumbersList = [2, 3, 5, 7];

    let primeCheckValueOne = "";

    for (let i = 0; i < primeNumbersList.length; i++) {
      if (valueOne === primeNumbersList[i]) {
        primeCheckValueOne = "primo";
        break;
      } else if (valueOne % primeNumbersList[i] === 0) {
        primeCheckValueOne = "no es primo";
        break;
      } else if (valueOne === 1) {
        primeCheckValueOne = "no es primo";
        break;
      } else {
        primeCheckValueOne = "primo";
      }
    }

    let primeCheckValueTwo = "";

    for (let i = 0; i < primeNumbersList.length; i++) {
      if (valueTwo === primeNumbersList[i]) {
        primeCheckValueTwo = "es primo";
        break;
      } else if (valueTwo % primeNumbersList[i] === 0) {
        primeCheckValueTwo = "no es primo";
        break;
      } else if (valueTwo === 1) {
        primeCheckValueTwo = "no es primo";
        break;
      } else {
        primeCheckValueTwo = "es primo";
      }
    }

    let evenCheckValueOne = valueOne % 2;
    let evenCheckValueTwo = valueTwo % 2;

    if (evenCheckValueOne === 0) {
      evenCheckValueOne = "es par";
    } else {
      evenCheckValueOne = "es impar";
    }

    if (evenCheckValueTwo === 0) {
      evenCheckValueTwo = "es par";
    } else {
      evenCheckValueTwo = "es impar";
    }

    //----------------CHECK: VALUEONE < VALUETWO-------------------

    let valueOneToValueTwoNumbersList = [];

    if (valueOne < valueTwo) {
      for (let i = valueOne + 1; i < valueTwo; i++) {
        valueOneToValueTwoNumbersList.push(i);
      }
    }

    let valueOneToValueTwoEvenNumbersList = [];

    for (
      let i = valueOneToValueTwoNumbersList[0];
      i <= valueOneToValueTwoNumbersList.length;
      i++
    ) {
      if (i % 2 === 0) {
        valueOneToValueTwoEvenNumbersList.push(i);
      }
    }

    console.log(valueOneToValueTwoNumbersList);
    console.log(valueOneToValueTwoEvenNumbersList);

    alert(
      `La suma es: ${onePlusTwo}\n\nEl ${valueOne} ${primeCheckValueOne} i el ${valueTwo} ${primeCheckValueTwo}\nEl ${valueOne} ${evenCheckValueOne} i el ${valueTwo} ${evenCheckValueTwo}\n\n${valueOneToValueTwoEvenNumbersList}`
    );
  } else {
    alert("numero invalido");
  }
}

alert("hola");
