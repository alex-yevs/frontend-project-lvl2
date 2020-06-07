import yaml from 'js-yaml';
import ini from 'ini';

const parse = (data, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(data);
    case '.yaml' || '.yml':
      return yaml.safeLoad(data);
    case '.ini':
      return ini.parse(data);
    default:
      throw new Error(`${format} is unsupported format`);
  }
};

export default parse;
