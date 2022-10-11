import split from './split.js';

export default (cookie) => {
  var i, k, r, v;
  cookie = cookie.split(';');
  r = {};
  for (i of cookie) {
    [k, v] = split(i.trim(), '=');
    r[k] = v;
  }
  return r;
};
