import fs from 'fs';
import path from 'path';
import { makeUnion, has } from './utils.js';
import parse from './parsers.js';

const buildDiff = (oldData, newData) => {
  const keys = makeUnion(Object.keys(oldData), Object.keys(newData));

  const diffs = keys.map((key) => {
    const oldValue = oldData[key];
    const newValue = newData[key];

    if (!has(oldData, key)) {
      return { status: 'new', key, newValue };
    }
    if (!has(newData, key)) {
      return { status: 'deleted', key, oldValue };
    }
    if (oldValue === newValue) {
      return { status: 'unmodified', key, oldValue };
    }
    return {
      status: 'modified', key, oldValue, newValue,
    };
  });

  return diffs;
};

const buildResult = (diffs) => {
  const result = diffs.map(({
    status, key, oldValue, newValue,
  }) => {
    switch (status) {
      case 'new':
        return `  + ${key}: ${newValue}`;
      case 'deleted':
        return `  - ${key}: ${oldValue}`;
      case 'unmodified':
        return `    ${key}: ${oldValue}`;
      case 'modified':
        return `  + ${key}: ${newValue}\n  - ${key}: ${oldValue}`;
      default:
        throw new Error(`${status} is incorrect status of the key: ${key}`);
    }
  });

  return `{\n${result.join('\n')}\n}`;
};

const genDiff = (filePath1, filePath2) => {
  const data1 = fs.readFileSync(filePath1, 'utf8');
  const data2 = fs.readFileSync(filePath2, 'utf8');

  const data1Format = path.extname(filePath1);
  const data2Format = path.extname(filePath2);

  const parsedData1 = parse(data1, data1Format);
  const parsedData2 = parse(data2, data2Format);

  const diffs = buildDiff(parsedData1, parsedData2);
  const result = buildResult(diffs);

  return result;
};

export {
  genDiff as default,
};
