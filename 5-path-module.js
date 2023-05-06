

const path = require('path')
 
const file = path.join('/content','subfolder','test.txt')


console.log(file)

const base = path.basename(file)
console.log(base)

const res = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(res)