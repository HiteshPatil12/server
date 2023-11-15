
const { readFileSync } = require("fs")

const readme = readFileSync('./readme.txt', 'UTF8')
result = readme;
console.log(result)


const http = require('http')
const server = http.createServer((req, res)=>{

    if(req.url === '/'){
        res.end(result);
    }
})
server.listen(5000)