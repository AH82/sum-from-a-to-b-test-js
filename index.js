/* AH82:
  * W01D5 - (14) "Sum From a to b Recursively" (STRETCH)
  * https://web.compass.lighthouselabs.ca/activities/572
  *
  * Originally implemented during bootcamp on 2020-02-07
  * Remote repo created post-bootcamp on 2020-11-20 (due forgotton forking error and time constrains)
  * linted post-bootcamp on 2020-11-20
*/

function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN === toN) {
    return fromN;
  }

  return fromN + sum(fromN + 1, toN);
}
console.log(sum(3,7));
module.exports = sum;
