///Write a function that will allow you to calculate how many slices of pizza x each person y would get if they shared evenly. The function should return an interpolated string like Each person gets 4.00 slices of pizza; from our 8-slice pizza x being a decimal in case there is no way to split the pizza evenly.

function slicesPerPerson(x, y) {
        const totalSlices = 8; 
        const personSlices = x / y; 

        switch (true) {

          case personSlices >= 1:

            return `Each person get: ${personSlices.toFixed(2)} slices of pizza.`;

          default:
            
            return "Cannot divide the pizza.";
        }
      }
      
      console.log(slicesPerPerson(8, 1)); 
      console.log(slicesPerPerson(8, 2)); 
      console.log(slicesPerPerson(8, 3)); 
      console.log(slicesPerPerson(8, 6)); 
      console.log(slicesPerPerson(8, 10));