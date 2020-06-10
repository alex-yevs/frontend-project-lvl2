import { isObject } from '../utils.js';

const makeBlank = (depth) => '    '.repeat(depth);


const formatValue = (value, depth) => {
  if (!isObject(value)) {
    return value;
  }
  const blank = makeBlank(depth + 1);
  const result = Object.entries(value)
    .map(([key, keyValue]) => {
      const calcValue = isObject(keyValue) ? formatValue(keyValue, depth + 1) : keyValue;
      return `${blank}    ${key}: ${calcValue}`;
    });
  return `{\n${result.join('\n')}\n${blank}}`;
};


const makeStylish = (diffs, depth = 0) => {
  const blank = makeBlank(depth);

  const result = diffs.map(({
    status, key, oldValue, newValue, children,
  }) => {
    switch (status) {
      case 'new':
        return `${blank}  + ${key}: ${formatValue(newValue, depth)}`;
      case 'deleted':
        return `${blank}  - ${key}: ${formatValue(oldValue, depth)}`;
      case 'unmodified':
        return `${blank}    ${key}: ${formatValue(oldValue, depth)}`;
      case 'modified':
        return `${blank}  + ${key}: ${formatValue(newValue, depth)}\n${blank}  - ${key}: ${formatValue(oldValue, depth)}`;
      case 'nested':
        return `${blank}    ${key}: ${makeStylish(children, depth + 1)}`;
      default:
        throw new Error(`${status} is incorrect status of the key: ${key}`);
    }
  });

  return `{\n${result.join('\n')}\n${blank}}`;
};

export default makeStylish;
