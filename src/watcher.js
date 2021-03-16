const fs = require('fs')
const filewatcher = require('filewatcher')

const watcher = filewatcher()
watcher.add('src/theme.js')

watcher.on('change', function (file, stat) {
  console.log(`${file} modified`)
  fs.readFile('src/theme.js', 'utf8', function (err, data) {
    if (err) return console.log(err)
    const italics = eval(`${data};schema(italics)`)
    const noitalics = eval(`${data};schema(noitalics)`)
    fs.writeFile('themes/poimandres-color-theme.json', italics, (err) => err && console.log(err))
    fs.writeFile('themes/poimandres-noitalics-color-theme.json', noitalics, (err) => err && console.log(err))
    console.log('themes written ...')
  })
})
