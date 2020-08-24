

let wakeDog = function(dogName, dogBreed) {
    let wake = `Wake ${dogName} the ${dogBreed}`;
    console.log(wake);
    return wake;
}

let leashDog = function(dogName, dogBreed) {
    let leash = `Leash ${dogName} the ${dogBreed}`;
    console.log(leash);
    return leash;
}

let walkToPark = function (dogName, dogBreed) {
    let walking = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(walking);
    return walking;
}

let throwFrisbee = function (dogName, dogBreed) {
    let frisbee = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(frisbee);
    return frisbee;
}

let walkHome = function (dogName, dogBreed) {
    let walk = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(walk);
    return walk;
}

let unleashDog = function (dogName, dogBreed) {
    let unleash = `Unleash ${dogName} the ${dogBreed}`;
    console.log(unleash);
    return unleash;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed){
   let result = [];
    for(let i = 0; i < routine.length; i++){
        let excercise = routine[i](dogName, dogBreed);
        result.push(excercise);
    }
    return result;
}