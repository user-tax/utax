String.prototype.render = function(dict) {
  return new Function(...Object.keys(dict), `return \`${this}\``)(...Object.values(dict));
};
