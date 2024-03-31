function reverse(array) {
  for (let i = 0; i < Math.floor((array.length - 1) / 2); i++) {
    let first = array[i];
    let last = array[array.length - 1 - i];
    array[i] = last;
    array[array.length - 1 - i] = first;
  }
  return array;
}

console.log(reverse([1, 2, 3, 4, 5]));
