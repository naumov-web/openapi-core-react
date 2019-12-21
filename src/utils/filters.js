export const removeUndefined = (obj) => {
  const result = {};

  const keys = Object.keys(obj);
  for(let i = 0, len = keys.length; i < len; i += 1) {
    if (typeof obj[keys[i]] !== 'undefined') {
      result[keys[i]] = obj[keys[i]];
    }
  }

  return result;
};