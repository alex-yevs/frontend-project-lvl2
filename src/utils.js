
const makeUnion = (...rest) => {
  const unitedItems = [...rest].reduce(
    (acc, item) => [...acc, ...item],
    [],
  );
  const uniqueItems = new Set(unitedItems);
  return [...uniqueItems];
};

const has = (object, key) => object != null && ({}).hasOwnProperty.call(object, key);

export {
  makeUnion, has,
};
