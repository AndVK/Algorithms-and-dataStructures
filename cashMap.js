function factorial(num) {
  let result = 1;

  while (num > 1) {
    result = result * num;
    num = num - 1;
  }

  return result;
}

console.log(factorial(10));

function cacheFunction(fn) {
  const map = new Map();

  return function (x) {
    if (map.has(x)) {
      console.log('returned from cache');
      return map.get(x);
    }

    let result = fn(x);
    map.set(x, result);

    console.log('function counted');
    return result;
  };
}

let cachedFactorial = cacheFunction(factorial);

cachedFactorial(5);
cachedFactorial(4);
cachedFactorial(3);
cachedFactorial(4);
cachedFactorial(2);
cachedFactorial(1);
cachedFactorial(3);
