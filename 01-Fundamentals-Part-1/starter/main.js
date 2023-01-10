/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

const mark = {weight:78, height:1.69}
const john = {weight:92, height:1.95}

function bmiCalulator (mass, height) {
    bmi = mass / (height * height)
    return bmi
};

markbmi = bmiCalulator(mark.weight, mark.height);
johnbmi = bmiCalulator(john.weight, john.height);

let markHigherBMI = markbmi > johnbmi;

let answer;
    if (markHigherBMI){
        answer = 'Mark is fatter'
    } else {
        answer = "John is fatter"
    }


console.log(`Mark's BMI is ${markbmi} and John's BMI is ${johnbmi} ${answer}`)