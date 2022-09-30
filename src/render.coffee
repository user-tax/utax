String.prototype.interpolate = (dict) =>
  new Function(
    ...Object.keys(dict)
    `return \`${this}\`;`
  )(
    ...Object.values(dict)
  )
