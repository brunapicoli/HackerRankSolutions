function minimumMoves(arr1, arr2) {
  let moves = 0;

  for (let i = 0; i < arr1.length; i++) {
    let newArray1 = arr1[i].toString().split("");
    let newArray2 = arr2[i].toString().split("");

    for (let j = 0; j < newArray1.length; j++) {
      moves += Math.abs(newArray1[j] - newArray2[j]);
    }
  }

  return moves;
}

console.log(minimumMoves([123, 543], [321, 279]))