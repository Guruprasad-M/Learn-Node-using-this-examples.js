const _ =  require('lodash')


const items =[1,[2 ,[3,[4]]]]

const newitems = _.flattenDeep(items);
console.log(newitems);


const guru = 'guruprasad'
const g = _.toUpper(guru)
console.log(g)

