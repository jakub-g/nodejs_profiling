#!/usr/bin/env node
let nodeFolder = require('path').dirname(process.execPath)
let invocation = process.argv.join(' ')
  .replace(nodeFolder, `C:\\NODE_DIR`)
  .replace(nodeFolder, `C:\\NODE_DIR`)
let now = Date.now()
let time = `[${String(now - parseInt(process.env.START_TIME)).padStart(5)}]`
let fileName = `tmp_${now}`

console.log(`${time} ${fileName}: ${invocation}`)
require('fs').writeFileSync(__dirname + '/' + fileName, `${time} ${invocation}\r\n`)
