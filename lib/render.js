var render;

export default render = (str, ...args) => {
  return new Function(...args, `return \`${str}\``);
};

String.prototype.render = function(dict) {
  return render(this, ...Object.keys(dict))(...Object.values(dict));
};
