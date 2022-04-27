function toRoman(num) {
  const romanNums = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let remaining = num;
  let romanNumeral = "";
  for (key in romanNums) {
    let count = Math.floor(remaining / romanNums[key]);
    remaining = remaining % romanNums[key];
    romanNumeral += key.repeat(count);
  }
  return romanNumeral;
}

console.log(toRoman(99));
