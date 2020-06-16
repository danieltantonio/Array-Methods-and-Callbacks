import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
console.log(fifaData[fifaData.length - 1]["Home Team Name"]);
console.log(fifaData[fifaData.length - 1]["Away Team Name"]);
console.log(fifaData[fifaData.length - 1]["Home Team Goals"]);
console.log(fifaData[fifaData.length - 1]["Away Team Goals"]);
console.log("Germany National Football Team");


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  return data.filter(times => times["Stage"].includes('final'));
};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
  let times = callback(fifaData);
  return times.map(obj => obj["Year"]);
};

console.log(getYears(getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(callback) {
  let winners = callback(fifaData);
  return winners.filter(obj => obj["Win conditions"] !== "")
};

console.log(getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!"

Parameters:
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(year, country) {
    const winners = getWinners(getFinals);
    const winByYear = winners.filter(obj => obj["Year"]  === year);
    for(let i = 0; i < winByYear.length; i++) {
        if(winByYear[i]["Win conditions"].split(" ")[0].toLowerCase() === country.toLowerCase()) {
            return `In ${year}, ${country} won the world cup!`;
        };
    }

    return "Cannot find country that won within that year.";
};

console.log(getWinnersByYear(2014, "Argentina"));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const homeTeam = Math.round(data.reduce((total, num) => num["Home Team Goals"] + total, 0) / data.length);
    const awayTeam = Math.round(data.reduce((total, num) => num["Away Team Goals"] + total, 0) / data.length);
    return { "Home Team Average": homeTeam, "Away Team Average": awayTeam };
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had.

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
