import path from 'path';
import fs from 'fs';
import gendiff from '../src/index.js';

const getFixturePath = (filename) => path.join(path.resolve(), '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

describe('Different files format testing', () => {
  test.each([
    ['before.json', 'after.json', 'stylish', 'result.txt'],
    ['before.yaml', 'after.yaml', 'stylish', 'result.txt'],
    ['before.ini', 'after.ini', 'stylish', 'result.txt'],
  ])('gendiff <%s> <%s>', (filename1, filename2, format, expected) => {
    expect(gendiff(
      getFixturePath(filename1),
      getFixturePath(filename2),
      format,
    )).toBe(readFile(expected));
  });
});
