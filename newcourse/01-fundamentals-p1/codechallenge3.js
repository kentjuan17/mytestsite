/*
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




// class Teams {
//     constructor(firstScore, secondScore, thirdScore) {
//         this.firstScore = firstScore;
//         this.secondScore = secondScore;
//         this.thirdScore = thirdScore;
//     }

//     averageScore() {
//         return (this.firstScore + this.secondScore + this.thirdScore) / 3;
//     }
// }

// function setOne() {
//     let teamDolphinsSet1 = new Teams(96, 108, 89);
//     let teamKoalasSet1 = new Teams(88, 91, 110);

//     let dolphinsAverage1 = teamDolphinsSet1.averageScore();
//     let koalasAverage1 = teamKoalasSet1.averageScore();

//     let dolphinsWin1 = dolphinsAverage1 > koalasAverage1;

//     if (dolphinsWin1 && dolphinsAverage1 >= 100) {
//         console.log('Dolphins Won!')
//     } else if (!dolphinsWin1 && koalasAverage1 >= 100) {
//         console.log('Koalas Won!')
//     } else if (!dolphinsWin1 && koalasAverage1 < 100) {
//         console.log(`Koalas should have won if their minimum average score reached 100 and above`)
//     } else if (dolphinsAverage1 === koalasAverage1) {
//         console.log('DRAW')
//     } else {
//         console.log(`Dolphins should have won if their minimum average score reached 100 and above`)
//     }
// }

// function setTwo() {
//     let teamDolphinsSet2 = new Teams(97, 112, 101);
//     let teamKoalasSet2 = new Teams(109, 95, 123);

//     let dolphinsAverage2 = teamDolphinsSet2.averageScore();
//     let koalasAverage2 = teamKoalasSet2.averageScore();

//     let dolphinsWin2 = dolphinsAverage2 > koalasAverage2;

//     if (dolphinsWin2 && dolphinsAverage2 >= 100) {
//         console.log('Dolphins Won!')
//     } else if (!dolphinsWin2 && koalasAverage2 >= 100) {
//         console.log('Koalas Won!')
//     } else if (!dolphinsWin2 && koalasAverage2 < 100) {
//         console.log(`Koalas should have won if their minimum average score reached 100 and above`)
//     } else if (dolphinsAverage2 === koalasAverage2) {
//         console.log('DRAW')
//     } else {
//         console.log(`Dolphins should have won if their minimum average score reached 100 and above`)
//     }
// }

// function setThree() {
//     let teamDolphinsSet3 = new Teams(97, 112, 101);
//     let teamKoalasSet3 = new Teams(109, 95, 106);

//     let dolphinsAverage3 = teamDolphinsSet3.averageScore();
//     let koalasAverage3 = teamKoalasSet3.averageScore();

//     let dolphinsWin3 = dolphinsAverage3 > koalasAverage3;


//     if (dolphinsWin3 && dolphinsAverage3 >= 100) {
//         console.log('Dolphins Won!')
//     } else if (!dolphinsWin3 && koalasAverage3 >= 100) {
//         console.log('Koalas Won!')
//     } else if (!dolphinsWin3 && koalasAverage3 < 100) {
//         console.log(`Koalas should have won if their minimum average score reached 100 and above`)
//     } else if (dolphinsAverage2 === koalasAverage2) {
//         console.log('DRAW')
//     } else {
//         console.log(`Dolphins should have won if their minimum average score reached 100 and above`)
//     }
// }



// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy 🏆')
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy 🏆')
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy')
// }



// BONUS 1
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100 ) {
    console.log('Dolphins win the trophy 🏆')
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy 🏆')
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy')
} else {
    console.log('No one wins the trophy')
}