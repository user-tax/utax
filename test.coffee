#!/usr/bin/env coffee

> ./lib/render:

template = 'Example text: ${text}'
result = template.render {
  text: 'Foo Boo'
}
console.log result
