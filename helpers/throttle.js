function laugh() {
  console.log('Ha-ha!');
}

function throttle(func, delay) {
  let isThrottle = false;
  let savedArgs;
  let savedThis;

  function wrapper() {
    if (isThrottle) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottle = true;

    setTimeout(() => {
      isThrottle = false;

      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedThis = savedArgs = null;
      }
    }, delay);
  }

  return wrapper;
}

let throlledLaugh = throttle(laugh, 1000);

throlledLaugh();
throlledLaugh();
throlledLaugh();
throlledLaugh();
throlledLaugh();
