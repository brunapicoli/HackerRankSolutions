function plusMinus(arr) {
  let n = arr.length; // size of array
  let positive = 0; // number of positive numbers
  let negative = 0; // number of negative numbers
  let zero = 0; // number of zero numbers

  for(let element of arr) {
    if(element > 0) {
      positive++
    } else if(element < 0) {
      negative++
    } else {
      zero++
    }
  }

  let ratioPositive = positive/n;
  let ratioNegative = negative/n;
  let ratioZero = zero/n;

  console.log(`${ratioPositive.toFixed(6)} \n ${ratioNegative.toFixed(6)} \n ${ratioZero.toFixed(6)}`)
}

const arr = [1,1,0,-1,-1];
plusMinus(arr);