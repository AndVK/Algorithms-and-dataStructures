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

// Обход в глубину через рекурсию
const dfsRecursive = (tree) => {
  let sum = 0;

  tree.forEach((node) => {
    sum += node.value;

    if (!node.children) return;

    sum += dfsRecursive(node.children);
  });

  return sum;
};

console.log(dfsRecursive(tree)); // 52

// Обход в глубину через Стек
const dfsIteration = (tree) => {
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

console.log(dfsIteration(tree)); /// 52

// Обход в ширину через рекурсию
function bfsRecursive(nodes) {
  let sum = 0;

  const recursive = (nodes) => {
    if (nodes.length === 0) {
      return;
    }

    const nextNodes = [];
    for (const node of nodes) {
      sum += node.value;

      if (node.children) {
        nextNodes.push(...node.children);
      }
    }

    recursive(nextNodes);
  };

  recursive(nodes);

  return sum;
}

console.log(bfsRecursive(tree));

// Обход в ширину через Стек
function bfsIteration(tree) {
  let sum = 0;
  let stack = [];
  let childNodes = [];

  if (tree) stack.push(...tree);

  while (stack.length) {
    const { children, value } = stack.pop();

    sum += value;

    if (children) {
      childNodes.push(...children);
    }

    if (!stack.length && childNodes.length) {
      stack = childNodes;
      childNodes = [];
    }
  }

  return sum;
}

console.log(bfsIteration(tree)); // 52

// Обход в ширину через Очередь
function bfsIteration(tree) {
  const queue = [...tree];

  while (queue.length) {
    const element = queue.shift();

    console.log(element.value);

    element?.children?.forEach((node) => {
      queue.push(node);
    });
  }
}
