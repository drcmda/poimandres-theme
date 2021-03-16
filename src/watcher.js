const fs = require('fs')
const filewatcher = require('filewatcher')
const sharp = require('sharp')

function requireUncached(module) {
  delete require.cache[require.resolve(module)]
  return require(module)
}

function generateTheme() {
  const { italics, noitalics, schema, svg } = requireUncached('./theme')
  fs.writeFile('themes/poimandres-color-theme.json', schema(italics), (err) => err && console.log(err))
  fs.writeFile('themes/poimandres-noitalics-color-theme.json', schema(noitalics), (err) => err && console.log(err))
  sharp(Buffer.from(svg(italics).trim())).png().toFile('assets/dots.png')
  console.log('assets saved ...')
}

const watcher = filewatcher()
watcher.add('src/theme.js')

watcher.on('change', function (file) {
  console.log(`${file} modified`)
  generateTheme()
})

generateTheme()
