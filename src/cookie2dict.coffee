> ./split.js

< (cookie)=>
  cookie = cookie.split(';')
  r = {}
  for i from cookie
    [k,v] = split i.trim(),'='
    r[k]=v
  r
