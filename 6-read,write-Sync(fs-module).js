const { readFileSync,writeFileSync } = require('fs')
const fs = require('fs')

console.log('Start');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')


console.log(first,second)

writeFileSync(
    './content/result-sync.text',
    `here is the result: ${first}`,
    {flag:'a'}
)
console.log('done with the task')
console.log('Starting with the next one')