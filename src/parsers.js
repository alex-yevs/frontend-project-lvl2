import yaml from 'js-yaml';
import ini from 'ini';

const parse = (data, dataFormat) => {
  switch (dataFormat) {
    case 'json':
      return JSON.parse(data);
    case 'yaml' || 'yml':
      return yaml.safeLoad(data);
    case 'ini':
      return ini.parse(data);
    default:
      throw new Error(`'${dataFormat}' is unsupported file format`);
  }
};

export default parse;
