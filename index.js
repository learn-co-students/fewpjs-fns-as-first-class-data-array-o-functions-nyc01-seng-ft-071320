// function wakeDog(name="Byron", breed="poodle") {
//     console.log(`Wake ${name} the ${breed}`);
//     return `Wake ${name} the ${breed}`;
// }

// function leashDog(name="Byron", breed="poodle") {
//     console.log(`Leash ${name} the ${breed}`);
//     return `Leash ${name} the ${breed}`;
// }

// function walkToPark(name="Byron", breed="poodle") {
//     console.log(`Walk to the park with ${name} the ${breeed}`);
//     return `Walk to the park with ${name} the ${breeed}`;
// }

// function throwFrisbee(name="Byron", breed="poodle") {
//     console.log(`Throw the frisbee for ${name} the ${breed}`);
//     return `Throw the frisbee for ${name} the ${breed}`;
// }

// function walkHome(name="Byron", breed="poodle") {
//     console.log(`Walk home with ${name} the ${breed}`);
//     return `Walk home with ${name} the ${breed}`;
// }

// function unleashDog(name="Byron", breed="poodle") {
//     console.log(`Unleash ${name} the ${breed}`);
//     return `Unleash ${name} the ${breed}`;
// }

// let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

// function exerciseDog(dogName, dogBreed) {
//   return routine.map(fn => fn(dogName, dogBreed))
// }

var wakeDog = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
  }
  
  var leashDog = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
  }
  
  var walkToPark = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`
  }
  
  var throwFrisbee = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
  }
  
  var walkHome = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`
  }
  
  var unleashDog = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`
  }
  
  const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
  
  function exerciseDog(dog, breed) {
    return routine.map(fn => fn(dog, breed))
  }