require('fs').writeFileSync(`${__dirname}/tmp_${Date.now()}`, `${process.argv.join(' ')}\r\n`)
