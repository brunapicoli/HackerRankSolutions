function jumps(flagHeight, bigJump) {
  let totalJumps = 0;
  if(bigJump > flagHeight) {
    totalJumps = flagHeight;
  } else if(flagHeight % bigJump == 0) {
    totalJumps = Math.floor(flagHeight / bigJump);
  } else {
    let remainder = flagHeight - ((Math.floor(flagHeight / bigJump))*bigJump);
    totalJumps = (Math.floor(flagHeight / bigJump)) + remainder;
  }

  return totalJumps
}

console.log(jumps(3,30))