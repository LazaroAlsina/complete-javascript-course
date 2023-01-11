/*
The Complete JavaScript Course 7

Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:

§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// This obj will keep score of the teams in an array.
const scoreBoard = {
    dolphins: [97, 112, 101],
    koalas: [109, 95, 106]
};

//These are used for the announctmentFunc to know the names of the teams.
let team1 = "Dolphins";
let team2 = "Koalas";


//This var will be used to have a min set score in which it can be reassign when needed.
let minScore = 100

//Avg score function will take an array and interate them to get the avg score.
function avgScore (scoreInput) {
    let cal = 0;
    let i;
    for (i = 0; i < scoreInput.length; i++) {
        cal += scoreInput[i];
    }
    let avg = cal / i;
    return avg;
};

//Winner function will compare two teams if they win and will use a global var called min that is the min score to win or be set as draw
function winnerFunc (teamA, teamB){
    let winner = "No winner"
    if (teamA > teamB){
        if (teamA > minScore){
            return winner = "Team A wins";
        };
    };

    if (teamB > teamA){
        if (teamB > minScore){
            return winner = "Team B wins";
        };
    };

    if (teamA === teamB && teamA > minScore && teamB > minScore) {
        return winner = "Draw!";
    };
    return winner;
};

//announcements is a function that will tell the user who won and will display detail inforamtion about it base on the outcome of the winnerFunc.
function announcements (winner) {
    let announcements;
    let winningTeam = "The match is a Draw!";
    if(winner === "Team A wins"){
        winningTeam = `Winner is ${team1}!`;
    };
    
    if(winner === "Team B wins"){
        winningTeam = `Winner is ${team2}!`;
    };
    announcements = `We have a conclusion to the match! The ${winningTeam}`;
    return announcements;   
};

let dolphinsScore = avgScore(scoreBoard.dolphins);
let koalasScore = avgScore(scoreBoard.koalas);
let winner = winnerFunc(dolphinsScore, koalasScore);
let boradcastWinner = announcements(winner);

// console.log(dolphinsScore)
// console.log(koalasScore)
// console.log(winner)
console.log(boradcastWinner)