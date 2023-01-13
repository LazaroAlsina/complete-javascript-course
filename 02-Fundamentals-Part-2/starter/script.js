'use strict'

/*
Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).

A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
*/

//This object keeps track of the names of the teams and their score. Each element within an array is a match that the teams had.
const scoreBoard = {
    team1: {
        name: "Dolphins",
        score1: [44,23,71],
        score2: [85,54,41]
    },
    team2: {
        name: "Koalas",
        score1: [65,54,49],
        score2: [23,34,27]
    }
};

//This function is able to take an input from an array and average out the numbers.
const calcAverage = (inputScore) => {
    let i = 0;
    let averageScore = 0;
    let answer = 0;
    for(i; i < inputScore.length; i++){
        averageScore += inputScore[i];
    };
    answer = averageScore / i;
    return answer;
};

//This function is able to compare two inputs and see which one is double the value of the other. If true, a winner won.
const checkWinner = (team1, team2) => {
    let winner = "Draw"
    team1 > team2 * 2 ? winner = `Winner is ${scoreBoard.team1.name}` : 1;
    team2 > team1 * 2 ? winner = `Winner is ${scoreBoard.team2.name}` : 1;
    console.log(`The match is over. ${winner}. ${scoreBoard.team1.name} (${team1}) vs. ${scoreBoard.team2.name} (${team2})`)
}

//Avg score of the teams. Change score[x] for a different set of scores.
let avgDolhins = calcAverage(scoreBoard.team1.score2)
let avgKoalas = calcAverage(scoreBoard.team2.score2)
checkWinner(avgDolhins,avgKoalas);
