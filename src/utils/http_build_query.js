export const httpBuildQuery = (base, params = {}) => {
  const parts = [];
  const keys = Object.keys(params);

  for(let i = 0, len = keys.length; i < len; i += 1) {
    parts.push(`${keys[i]}=${  params[keys[i]]}`);
  }

  return `${base}?${parts.join('&')}`;
};