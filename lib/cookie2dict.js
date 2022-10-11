import split from './split.js';

export default (cookie) => {
  var i, k, r, v;
  r = {};
  if (cookie) {
    cookie = cookie.split(';');
    for (i of cookie) {
      [k, v] = split(i, '=');
      r[k.trimStart()] = v;
    }
  }
  return r;
};
