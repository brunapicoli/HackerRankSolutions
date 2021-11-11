function camelCase(s) {
  let words = 1; // all letters in the first word are lowercase
  let size = s.length;
  for (let i = 0; i < size; i++) {
    if (s.charAt(i) === s.charAt(i).toUpperCase()) {
      words++;
    }
  }
  console.log(`${words}`)
}

camelCase("saveChangesInTheEditor")