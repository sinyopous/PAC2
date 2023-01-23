console.log("Hola holita");

function popPrompt() {
  let valueOne = prompt("Escriba un numero del 1 al 50");
  let valueTwo = prompt("Escriba otro numero del 1 al 50");

  if (valueOne >= 1 && valueOne <= 50 && valueTwo >= 1 && valueTwo <= 50) {
    valueOne = Number(valueOne);
    valueTwo = Number(valueTwo);

    let onePlusTwo = valueOne + valueTwo;

    //-----------------CHECK: PRIME 1.0 (ONLY WORKS WITH NUMBERS UNDER 50)---------------------

    // const primeNumbersList = [2, 3, 5, 7];

    // let primeCheckValueOne = "";

    // for (let i = 0; i < primeNumbersList.length; i++) {
    //   if (valueOne === primeNumbersList[i]) {
    //     primeCheckValueOne = "es primo";
    //     break;
    //   } else if (valueOne % primeNumbersList[i] === 0) {
    //     primeCheckValueOne = "no es primo";
    //     break;
    //   } else if (valueOne === 1) {
    //     primeCheckValueOne = "no es primo";
    //     break;
    //   } else {
    //     primeCheckValueOne = "es primo";
    //   }
    // }

    // let primeCheckValueTwo = "";

    // for (let i = 0; i < primeNumbersList.length; i++) {
    //   if (valueTwo === primeNumbersList[i]) {
    //     primeCheckValueTwo = "es primo";
    //     break;
    //   } else if (valueTwo % primeNumbersList[i] === 0) {
    //     primeCheckValueTwo = "no es primo";
    //     break;
    //   } else if (valueTwo === 1) {
    //     primeCheckValueTwo = "no es primo";
    //     break;
    //   } else {
    //     primeCheckValueTwo = "es primo";
    //   }
    // }

    //----------------CHECK: PRIME 2.0(DONT WORK WITH NUMBER 1)--------------------

    // let primeCheckValueOne = "";

    // for (let i = 2; i <= valueOne; i++) {
    //   if ((valueOne % i === 0) && (valueOne === i)) {
    //     primeCheckValueOne = "es primo";
    //   }
    //   else if ((valueOne % i === 0) && (valueOne !== i)) {
    //     primeCheckValueOne = "no es primo";
    //     break;
    //   }
    // }

    // let primeCheckValueTwo = "";

    // for (let i = 2; i <= valueTwo; i++) {
    //   if ((valueTwo % i === 0) && (valueTwo === i)) {
    //     primeCheckValueTwo = "es primo";
    //   }
    //   else if ((valueTwo % i === 0) && (valueTwo !== i)) {
    //     primeCheckValueTwo = "no es primo";
    //     break;
    //   }
    // }

    //------------------CHECK PRIME 2.1(SIMPLIFICATION + SPECIAL IF FOR NUMBER 1)---------------------

    // let primeCheckValueOne = "es primo";

    // for (let i = 2; i <= valueOne; i++) {
    //   if ((valueOne % i === 0) && (valueOne !== i)) {
    //     primeCheckValueOne = "no es primo";
    //     break;
    //   }
    // }
    // if (valueOne === 1) {
    //   primeCheckValueOne = "no es primo";
    // }

    // let primeCheckValueTwo = "es primo";

    // for (let i = 2; i <= valueTwo; i++) {
    //   if ((valueTwo % i === 0) && (valueTwo !== i)) {
    //     primeCheckValueTwo = "no es primo";
    //     break;
    //   }
    // }
    // if (valueTwo === 1) {
    //   primeCheckValueTwo = "no es primo";
    // }

    //------------------CHEK PRIME 2.2(FOR LOOP CORRECTION)---------------------------------

    let primeCheckValueOne = "es primo";

    for (let i = 2; i < valueOne; i++) {
      if (valueOne % i === 0) {
        primeCheckValueOne = "no es primo";
        break;
      }
    }

    if (valueOne === 1) {
      primeCheckValueOne = "no es primo";
    }

    let primeCheckValueTwo = "es primo";

    for (let i = 2; i < valueTwo; i++) {
      if (valueTwo % i === 0) {
        primeCheckValueTwo = "no es primo";
        break;
      }
    }

    if (valueTwo === 1) {
      primeCheckValueTwo = "no es primo";
    }

    //--------------------CHECK: EVEN------------------------

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
      for (let i = valueOne + 1; i + 1 <= valueTwo; i++) {
        valueOneToValueTwoNumbersList.push(i);
      }
    }

    function evenPusher(value) {
      return value % 2 == 0;
    }

    let valueOneToValueTwoEvenNumbersList =
      valueOneToValueTwoNumbersList.filter(evenPusher);

    //console.log(valueOneToValueTwoNumbersList);
    //console.log(valueOneToValueTwoEvenNumbersList);

    //-----------------CHECK: VALUEONE > VALUETWO----------------

    let valueTwoToValueOneNumbersList = [];

    if (valueOne > valueTwo) {
      for (let i = valueOne - 1; i > valueTwo; i--) {
        valueTwoToValueOneNumbersList.push(i);
      }
    }

    function evenDeleter(value) {
      return value % 2 != 0;
    }

    let valueTwoToValueOneNoEvenNumbersList =
      valueTwoToValueOneNumbersList.filter(evenDeleter);

    //-----------------------ALERT MESSAGES--------------------------

    if (valueOne < valueTwo) {
      alert(
        `La suma es: ${onePlusTwo}\n\nEl ${valueOne} ${primeCheckValueOne} i el ${valueTwo} ${primeCheckValueTwo}\nEl ${valueOne} ${evenCheckValueOne} i el ${valueTwo} ${evenCheckValueTwo}\n\n${valueOneToValueTwoEvenNumbersList}`
      );
    } else if (valueOne > valueTwo) {
      alert(
        `La suma es: ${onePlusTwo}\n\nEl ${valueOne} ${primeCheckValueOne} i el ${valueTwo} ${primeCheckValueTwo}\nEl ${valueOne} ${evenCheckValueOne} i el ${valueTwo} ${evenCheckValueTwo}\n\n${valueTwoToValueOneNoEvenNumbersList}`
      );
    } else if (valueOne === valueTwo) {
      alert(
        `La suma es: ${onePlusTwo}\n\nEl ${valueOne} ${primeCheckValueOne} i el ${valueTwo} ${primeCheckValueTwo}\nEl ${valueOne} ${evenCheckValueOne} i el ${valueTwo} ${evenCheckValueTwo}\n\n${valueOne}`
      );
    }
  } else {
    alert("numero invalido");
  }
}

alert("hola");
