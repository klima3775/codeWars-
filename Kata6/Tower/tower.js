// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number
// of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  // build here
  let tower = [];
  for (let i = 0; i < nFloors; i++) {
    const space = " ".repeat(nFloors - i - 1);
    const stars = "*".repeat(2 * i + 1);
    tower.push(space + stars + space);
  }
  return tower;
}

module.exports = towerBuilder;
