#!/usr/bin/env node
// Prints a compact colour sample of the pmndrs theme: 80 columns, 24 rows.
// Usage: node preview.mjs [theme.json]
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const file = process.argv[2] ?? resolve(here, 'pmndrs.json')

const raw = JSON.parse(readFileSync(file, 'utf8'))
const mode = raw.dark ?? raw.light ?? {}
const tree = { ...raw.base, ...mode }
for (const group of ['hue', 'text', 'background', 'border', 'scrollbar', 'diff', 'syntax', 'markdown', '@dialog']) {
  if (raw.base?.[group]) tree[group] = { ...raw.base[group], ...(mode[group] ?? {}) }
}

// alias chains: `$hue.neutral` -> `$hue.gray` -> { 100: "#e4f0fb", ... }
function deref(value, depth = 0) {
  if (depth > 12 || typeof value !== 'string' || !value.startsWith('$')) return value
  let node = tree
  for (const part of value.slice(1).split('.')) {
    node = deref(node, depth + 1)
    node = node?.[part]
    if (node === undefined) return undefined
  }
  return deref(node, depth + 1)
}

const colour = (path) => {
  const value = deref(`$${path}`)
  if (typeof value !== 'string' || !/^#[0-9a-f]{6}$/i.test(value)) {
    if (value !== 'transparent') process.stderr.write(`no colour for ${path}: ${value}\n`)
    return undefined
  }
  const n = parseInt(value.slice(1), 16)
  return `${(n >> 16) & 255};${(n >> 8) & 255};${n & 255}`
}

const fg = (path) => {
  const c = colour(path)
  return c ? `\x1b[38;2;${c}m` : ''
}
const bg = (path) => {
  const c = colour(path)
  return c ? `\x1b[48;2;${c}m` : ''
}

const R = '\x1b[0m'
const B = '\x1b[1m'
const ink = (text, path) => `${fg(path)}${text}${R}`
const pad = (text, width) => text + ' '.repeat(Math.max(0, width - text.length))
const band = (text, path, bgPath, width = 80) => `${bg(bgPath)}${fg(path)}${pad(text, width)}${R}`

const lines = [
  `${ink(B + 'pmndrs' + R, 'text.base')}${' '.repeat(46)}${ink('text.base', 'text.base')}  ${ink('text.muted', 'text.muted')}  ${ink('faint', 'text.muted')}`,
  ink('─'.repeat(80), 'border.base'),
  `${ink('The quick brown fox jumps over the lazy dog', 'text.base')}`,
  `${ink('secondary annotation', 'text.muted')}  ${ink('faint hint', 'hue.neutral.400')}  ${ink('disabled', 'hue.neutral.400')}`,
  '',
  ink('syntax', 'syntax.comment'),
  `  ${ink('function', 'syntax.keyword')} ${ink('greet', 'syntax.function')}${ink('(', 'syntax.punctuation')}${ink('name', 'syntax.variable')}${ink(') {', 'syntax.punctuation')}`,
  `    ${ink('const', 'syntax.keyword')} ${ink('msg', 'syntax.variable')} ${ink('=', 'syntax.operator')} ${ink('"hello, world"', 'syntax.string')} ${ink('// string', 'syntax.comment')}`,
  `    ${ink('// comment in neutral.400', 'syntax.comment')}`,
  `    ${ink('return', 'syntax.keyword')} ${ink('msg', 'syntax.variable')}${ink('.', 'syntax.punctuation')}${ink('length', 'syntax.function')} ${ink('+', 'syntax.operator')} ${ink('42', 'syntax.number')} ${ink('// number', 'syntax.comment')}`,
  `  ${ink('}', 'syntax.punctuation')}`,
  '',
  band('@@ -1,4 +1,5 @@', 'hue.neutral.400', 'diff.background.context'),
  band('  context line kept as is', 'hue.neutral.400', 'diff.background.context'),
  band('- removed line  red.200 on #2f1f28', 'diff.text.removed', 'diff.background.removed'),
  band('+ added line    green.200 on #1f2f34', 'diff.text.added', 'diff.background.added'),
  `${bg('diff.lineNumber.background.removed')}${fg('diff.highlight.removed')}${pad(' highlight removed', 40)}${R}${bg('diff.lineNumber.background.added')}${fg('diff.highlight.added')}${pad(' highlight added', 40)}${R}`,
  '',
  `${ink('# markdown heading', 'markdown.heading')}  ${ink('[link]', 'markdown.link')}  ${ink('`code`', 'markdown.code')}  ${ink('> quote', 'markdown.blockQuote')}  ${ink('**strong**', 'markdown.strong')}`,
  `${bg('background.raised.base')}${fg('text.base')} 800 raised ${R}${bg('background.raised.high')}${fg('text.base')} 700 hover ${R}${bg('background.raised.max')}${fg('text.base')} 600 max ${R} ${ink('menus, dialogs, toasts, prompt', 'text.muted')}`,
  `${ink('error', 'text.feedback.error.base')}  ${ink('warning', 'text.feedback.warning.base')}  ${ink('success', 'text.feedback.success.base')}  ${ink('info', 'text.feedback.info.base')}  ${ink('feedback', 'text.muted')}`,
  '',
  ink('─'.repeat(80), 'border.base'),
  `${ink('background.base transparent over your terminal · raised 800/700/600 solid', 'hue.neutral.400')}`,
]

process.stdout.write(lines.map((l) => `${l}${R}\r\n`).join('').slice(0, -2))
