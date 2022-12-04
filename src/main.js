const rotate90Degree = (array) => {
  const ROW = array.length;
  for (let c = 0; c < ROW; c++) {
    if (array[c].length !== ROW) {
      throw new Error("The array is not a square matrix");
    }
  }
  const COL = array[0].length;
  const col = COL - 1;
  const newArray = [];
  for (let c = 0; c < COL; c++) {
    newArray[c] = [];
    for (let r = 0; r < ROW; r++) {
      newArray[c][r] = array[r][col - c];
    }
  }
  console.log("newArray", newArray);
  return newArray;
};

let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotate90Degree(a));

module.exports = { rotate90Degree };
