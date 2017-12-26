# 6kyu - Return 1, 2, 3 randomly

# You have function one_two that returns 1 or 2 with 50% chance.

# Your goal is to create function one_two_three (oneTwoThree for Java) that returns 1, 2 or 3 
# with equal probability using only one_two function.

# Do not try to cheat returning repeating non-random sequences. There is randomness test especially for this case.

function one_two_three() {
  var a = one_two() * ( one_two() + 1 );
  return a === 6? one_two_three(): a - 1;
}
