import makeStylish from './stylish.js';
import makePlain from './plain.js';

const buildResult = (diffs, outputFormat) => {
  switch (outputFormat.toLowerCase()) {
    case 'stylish':
      return makeStylish(diffs);
    case 'plain':
      return makePlain(diffs);
    case 'json':
      return JSON.stringify(diffs);
    default:
      throw new Error(`'${outputFormat}' is unsupported output format`);
  }
};

export default buildResult;
