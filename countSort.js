function countSort(arr) {
  let n = arr.length;
  for(let i = 0; i < n / 2; i++) {
    arr[i][1] = "-"
  }

  let menorValor = 100 // 0 < x < 100
  arr.forEach(([x, s]) => {
    if(x < menorValor)
      menorValor = x;
  });

  let helperArray = []
  let aux = false
  arr.forEach(([x, s]) => {
    helperArray[x] = (helperArray[x] || '') + `${(x == menorValor && aux == false) ? '' : ' '}` + s;
    if(x == menorValor && aux == false) {
      aux = true;
    }
  });
  console.log(helperArray.join(''));
}

countSort([[1,'a'],[0,'b'],[1,'c'],[0,'d']])