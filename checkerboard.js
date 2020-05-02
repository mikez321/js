length = prompt("How wide should the checkerboard be?")
height = prompt("How tall should the checkerboard be?")

const dot = "# ", dot2 = " #";
const printedHeight = height / 2, remainderHeight = height % 2;

const doubleLine = dot.repeat(length) + "\n" + dot2.repeat(length) + "\n";
const singleLine = dot.repeat(length);

console.log(doubleLine.repeat(printedHeight) + singleLine.repeat(remainderHeight));
