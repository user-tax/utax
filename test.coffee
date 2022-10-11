#!/usr/bin/env coffee

> ./lib/cookie2dict

console.log cookie2dict 'I=1665481017; test=1665492012'

###
> ./lib/render:

template = 'Example text: ${text}'
result = template.render {
  text: 'Foo Boo'
}
console.log result
###
