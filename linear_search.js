const array = [1, 5, 8, 4, 6, 9, 3, 2, 7];

// Time: O(n)
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }

  return null;
}

console.log(linearSearch(array, 6)) // 4
