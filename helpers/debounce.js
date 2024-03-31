function laught() {
  console.log('Ha-ha!');
}

function debounce(callback, delay) {
  let timer;

  return function () {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      callback.apply(this, arguments);

      timer = null;
    }, delay);
  };
}

const debouncedLaught = debounce(laught, 1000);

debouncedLaught();
debouncedLaught();
debouncedLaught();
debouncedLaught();
debouncedLaught();
