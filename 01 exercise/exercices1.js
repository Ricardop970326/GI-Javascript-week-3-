/// A local gym wants to implement an "exercise of the day" program where there is a free class that day that promotes a certain exercise. The gym needs some backend logic to update its system to reflect which exercise will be promoted that day. Write a function that will take as an input the name of an exercise and console log a message like Today's exercise: running
//Write one function that can dynamically print the value of the exercise for that day, and it must be closure.


/// tray to use this but didn't work const exercise = (["Running", "switch", "Dancing", "Fencing"])

function getExerciseFunction() {
    let exercise = ''; // initial value in blank
  
    return function(exerciseName) {
      if (exerciseName) {
        exercise = exerciseName;
      }
      console.log(`Today's exercise: ${exercise}`);
    };
  }
  

  const exercise = getExerciseFunction();

// by using exercise here  I could avoid the undefine of the console log

exercise("Running");
exercise("Swimming");
exercise("Dancing");
exercise("Fencing");


// I try this at the beggining but replace it because this because it was giving me undefined after each console.log

//   console.log(exercise("Running")); 
//   console.log(exercise("Swimming")); 
//   console.log(exercise("Dancing")); 
//   console.log(exercise("Fencing")); 