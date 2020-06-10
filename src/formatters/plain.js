import { isObject } from '../utils.js';

const formatValue = (value) => {
  if (isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};


const makePlain = (diffs, depth) => {
  const parent = depth ? `${depth}.` : '';
  const result = diffs
    .filter(({ status }) => status !== 'unmodified')
    .map(({
      status, key, oldValue, newValue, children,
    }) => {
      switch (status) {
        case 'new':
          return `Property '${parent}${key}' was added with value: ${formatValue(newValue)}`;
        case 'deleted':
          return `Property '${parent}${key}' was deleted`;
        case 'modified':
          return `Property '${parent}${key}' was changed from ${formatValue(oldValue)} to ${formatValue(newValue)}`;
        case 'nested':
          return `${makePlain(children, parent + key)}`;
        default:
          throw new Error(`${status} is incorrect status of the key: ${key}`);
      }
    });

  return `${result.join('\n')}`;
};

export default makePlain;
