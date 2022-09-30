String.prototype.render = (dict) ->
  new Function(
    ...Object.keys(dict)
    "return `#{this}`"
  ) ...Object.values(dict)
