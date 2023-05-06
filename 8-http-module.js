const http = require('http')


const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('Welcome to our homepage');
    }
   if(req.url == '/about')
    {
        res.end('here is about the short history')
    }
res.end(`
    <h1> OOPs!</h1>
     <p>we can't seem to be find the page</p>
     <a href = "/">back home </a>
    `)

})
server.listen(5000)
