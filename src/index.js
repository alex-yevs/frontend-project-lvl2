import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parse from './parsers.js';
import buildResult from './formatters/index.js';

const buildDiff = (oldData, newData) => {
  const keys = _.union(Object.keys(oldData), Object.keys(newData));
  const diffs = keys.map((key) => {
    const oldValue = oldData[key];
    const newValue = newData[key];

    if (!_.has(oldData, key)) {
      return { status: 'new', key, newValue };
    }
    if (!_.has(newData, key)) {
      return { status: 'deleted', key, oldValue };
    }
    if (oldValue === newValue) {
      return { status: 'unmodified', key, oldValue };
    }
    if (_.isObject(oldValue) && _.isObject(newValue)) {
      return { status: 'nested', key, children: buildDiff(oldValue, newValue) };
    }
    return {
      status: 'modified', key, oldValue, newValue,
    };
  });

  return diffs;
};

const genDiff = (filePath1, filePath2, outputFormat) => {
  const data1 = fs.readFileSync(filePath1, 'utf8');
  const data2 = fs.readFileSync(filePath2, 'utf8');

  const data1Format = path.extname(filePath1).slice(1);
  const data2Format = path.extname(filePath2).slice(1);

  const parsedData1 = parse(data1, data1Format);
  const parsedData2 = parse(data2, data2Format);

  const diffs = buildDiff(parsedData1, parsedData2);
  const result = buildResult(diffs, outputFormat);

  return result;
};

export default genDiff;
