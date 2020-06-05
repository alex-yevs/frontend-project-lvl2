import path from 'path';
import fs from 'fs';
import gendiff from '../src/index.js';

const getFixturePath = (filename) => path.join(path.resolve(), '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

let json;

beforeAll(() => {
  json = readFile('json.txt');
});

test('Flat JSON files test', () => {
  expect(gendiff(getFixturePath('before.json'), getFixturePath('after.json'))).toBe(json);
});
