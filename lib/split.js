export const rsplit = (str, split) => {
  var p, suffix;
  p = str.lastIndexOf(split);
  if (p >= 0) {
    suffix = str.slice(p + 1);
    str = str.slice(0, +(p - 1) + 1 || 9e9);
  } else {
    suffix = '';
  }
  return [str, suffix];
};

export const split = (str, split) => {
  var p, suffix;
  p = str.indexOf(split);
  if (p >= 0) {
    suffix = str.slice(p + 1);
    str = str.slice(0, +(p - 1) + 1 || 9e9);
  } else {
    suffix = '';
  }
  return [str, suffix];
};

export default split;
