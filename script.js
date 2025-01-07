const makeChange = (c) => {
  // Initialize the result object with coin counts
  let result = { q: 0, d: 0, n: 0, p: 0 };

  // Calculate the number of quarters
  result.q = Math.floor(c / 25);
  c %= 25;

  // Calculate the number of dimes
  result.d = Math.floor(c / 10);
  c %= 10; 

  // Calculate the number of nickels
  result.n = Math.floor(c / 5);
  c %= 5;

  // Remaining amount is the number of pennies
  result.p = c;

  return result;
};

// Do not change the code below
const c = parseInt(prompt("Enter c: "), 10);
alert(JSON.stringify(makeChange(c)));
