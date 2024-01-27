const tree = [
  {
    value: 1,
    children: [
      {
        value: 2,
        children: [{ value: 4 }, { value: 5 }],
      },
      {
        value: 3,
        children: [{ value: 6 }, { value: 7 }],
      },
    ],
  },
  {
    value: 1,
    children: [
      {
        value: 2,
        children: [{ value: 4 }, { value: 5 }],
      },
      {
        value: 3,
        children: [{ value: 6 }, { value: 7 }],
      },
    ],
  },
];

const recursive = (tree) => {
  let sum = 0;

  tree.forEach((node) => {
    sum += node.value;

    if (!node.children) return node.value;

    sum += recursive(node.children);
  });

  return sum;
};

console.log(recursive(tree));

const iteration = (tree) => {
  if (!tree.length) {
    return 0;
  }

  let sum = 0;
  let stack = [];

  tree.forEach((node) => stack.push(node));

  while (stack.length) {
    const { value, children } = stack.pop();

    sum += value;

    if (children) {
      stack.push(...children);
    }
  }

  return sum;
};

console.log(iteration(tree));
