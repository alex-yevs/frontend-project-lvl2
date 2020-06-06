import path from 'path';
import fs from 'fs';
import gendiff from '../src/index.js';

const getFixturePath = (filename) => path.join(path.resolve(), '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');


describe('Flat files testing', () => {
  test.each([
    ['before.json', 'after.json', 'result.txt'],
    ['before.yaml', 'after.yaml', 'result.txt'],
  ])('gendiff <%s> <%s>', (filename1, filename2, expected) => {
    expect(gendiff(getFixturePath(filename1), getFixturePath(filename2))).toBe(readFile(expected));
  });
});
