const { readFile,writeFile} = require('fs')
console.log('start');
readFile('./Content/first.txt',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./Content/second.txt',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second=result
        writeFile('./content/result-async.txt',
        `here is the rsult :   ${first} ,${second}`,
        (err,result)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log('done with this task')
        }
        //{flag :'a'}
        )
    })
})
console.log('starting with the new task')