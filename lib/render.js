String.prototype.interpolate = (dict) => {
  return new Function(...Object.keys(dict), return `${this}`;)(...Object.values(dict));
};
