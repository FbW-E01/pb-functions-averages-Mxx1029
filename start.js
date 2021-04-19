/**
 * 1. Declare two functions: calculateRoundAverages and calculateTotalAverages
 */
/**
 * 2. Implement calculateRoundAverages
 * 
 * This function should print out the average score of each round
 * This function should receive the "golfScores" array as a parameter
 * This function should console log the average score of each round in the array
 * Please show only two decimals of accuracy on the averages:
 * 
 * An example of the expected output
 * "The average score for round 4 is 1.33"
*/

const calculateRoundAverages = (golfScores) => {
  for (let i = 0; i < golfScores.length; i++) {
    let sumPerRound = 0;
    const golfScore = golfScores[i];
    for (let j = 0; j < golfScore.length; j++) {
      sumPerRound += golfScore[j];
    };
    console.log("The average score for round " + (i + 1) + " is " + (sumPerRound / golfScore.length).toFixed(2));
  };
};

/**
 * 3. Implement calculateTotalAverages
 * 
 * This function should print out the average of all average scores
 * This function should receive the "golfScores" array as a parameter
 * This function should console log the average of all averages
 * Please show only two decimals of accuracy
 * 
 * An example of the expected output:
 * "The average of averages is 1.39"
 */


 const calculateTotalAverages = (golfScores) => {
  // because I can't access the variable sumPerRound from the calculateRoundAverages() function, I'm repeating the function body here. Tried around a bit, but didn't find another way.
  // Very open for tips here :)
  let averageArr = [];
  for (let i = 0; i < golfScores.length; i++) {
    let sumPerRound = 0;
    const golfScore = golfScores[i];
    for (let j = 0; j < golfScore.length; j++) {
      sumPerRound += golfScore[j];
    };
    averageArr.push((sumPerRound / golfScore.length).toFixed(2));
  };
  let averagesSum = 0;
  for (let k = 0; k < averageArr.length; k++) {
    averagesSum += parseFloat(averageArr[k]);
  };
  console.log("The average of averages is " + (averagesSum / averageArr.length).toFixed(2));
};


///! ----- PLEASE DO NOT EDIT BELOW THIS ---- !///
const golfScores = [
  [1,2,2,-1,5,1,2,1,6,2,1,0,5,3,0,1,1,0],
  [1,1,3,0,3,2,2,1,6,2,1,0,3,1,-1,2,1,0],
  [2,1,2,1,4,1,2,1,6,2,1,0,-1,3,0,2,1,0],
  [0,2,3,0,3,1,1,1,6,2,1,0,0,2,0,1,1,0],
  [0,1,5,-2,3,2,2,1,6,2,1,0,-2,3,0,2,1,0],
  [1,1,3,-1,4,2,1,1,6,2,1,0,-1,4,0,4,1,0],
  [0,2,1,0,3,0,-1,1,6,2,1,0,0,3,-2,2,1,0],
  [0,1,1,0,2,1,-1,1,4,2,1,1,0,2,-1,1,0,0],
];
calculateRoundAverages(golfScores);
calculateTotalAverages(golfScores);