import path from 'path';
import fs from 'fs';
import gendiff from '../src/index.js';

const getFixturePath = (filename) => path.join(path.resolve(), '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

describe('Different files format testing', () => {
  test.each([
    ['before.json', 'after.json', 'stylish', 'stylish.txt'],
    ['before.json', 'after.json', 'plain', 'plain.txt'],
    ['before.json', 'after.json', 'json', 'json.txt'],
    ['before.yaml', 'after.yaml', 'stylish', 'stylish.txt'],
    ['before.yaml', 'after.yaml', 'plain', 'plain.txt'],
    ['before.yaml', 'after.yaml', 'json', 'json.txt'],
    ['before.ini', 'after.ini', 'stylish', 'stylish.txt'],
    ['before.ini', 'after.ini', 'plain', 'plain.txt'],
    ['before.ini', 'after.ini', 'json', 'json.txt'],
  ])('gendiff <%s> <%s> to output format: "%s"', (filename1, filename2, format, expected) => {
    expect(gendiff(
      getFixturePath(filename1),
      getFixturePath(filename2),
      format,
    )).toBe(readFile(expected));
  });
});

describe('Testing exceptions', () => {
  test.each([
    ['before.json', 'after.json', 'unknown'],
    ['json.txt', 'plain.txt', 'stylish'],
  ])('gendiff <%s> <%s> to output format: "%s"', (filename1, filename2, format) => {
    expect(() => gendiff(getFixturePath(filename1), getFixturePath(filename2), format)).toThrow();
  });
});
