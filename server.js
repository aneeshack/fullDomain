


// =============create a server using http==================
// const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'})
//     res.write('hello world \n')
//     res.write('hello00 world')
//     res.end()
// })
// const port =3000;
// server.listen(port,()=>{
//     console.log(`server running at http://localhost:${port}`)
// })

// ========================read file asyncrounously===============
// const fs = require('fs')
// fs.readFile('example.txt','utf-8',(err, data)=>{
//     if(err){
//         console.error('error in reading file',err)
//         return
//     }
//     console.log('data achieved:',data)
// // })


// const fs = require('fs');
// const readStream = fs.createReadStream('example.txt','utf-8')

// readStream.on('data',chunk=>{
// console.log('received chunk of data',chunk)
// })

// readStream.on('end',()=>{
//     console.log('file read completely')
// })

// readStream.on('error',(error)=>{
//     console.log('error in reading',error)
// })


// ==================write in text and read it===============
// const fs = require('fs')
// const writeStream = fs.createWriteStream('oupput.txt')
// writeStream.write('hello world')
// writeStream.end('hello end')
// const read = fs.createReadStream('oupput.txt','utf-8')
// read.on('data',chunk=>{
//     console.log(chunk)
// })


// ===================http server creating routes===============
// const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'})
//     if(req.url==='/user' && req.method ==='GET'){
//         res.write('hello world \n')
//         res.write('hello user user page')
//     }else if(req.url==='/' && req.method =='GET'){
//         res.write('inside login page')
//     }else{
//         res.write('page not found')
//     }
    
//     res.end()
// })
// const port =3000;
// server.listen(port,()=>{
//     console.log(`server running at http://localhost:${port}`)
// })


// ===============create server using express =====================
// const express = require('express')
// const app = express()
// app.get('/',(req,res)=>{
//     res.send('user here')
// })
// app.get('*',(req,res)=>{
//     res.send('page not found')
// })
// port =3000
// app.listen(port, ()=>{
//     console.log(`server is running at http://localhost:${port}`)
// })


// ===============value passed in params and take it for calculation and passed as query==================
const e = require('express')
const express = require('express')
const app = express()
// http://localhost:3000/user/4456
app.get('/user/:number',(req,res)=>{
    const value = parseInt(req.params.number);
    console.log(value)
    if(value %2===0){
        res.send(`it is successful with number ${value}`)
    }else{
        res.send(`it is a failure`)
    }
    
})
// http://localhost:3000/number?name=anee&key=something
app.get('/number',(req,res)=>{
    const name = req.query
    const key = req. query.key
    console.log(key)
    console.log(name)
    res.send(`value is get from the query ${JSON.stringify(name)}`)
})
// app.use((req,res,next)=>{
//     const error =  new Error('something went wrong')
//     next(error)
// })
// app.use((err,req,res,next)=>{
//     // console.log('error is:',err)
//     res.status(500).send({messgae:err.message})
// })

// ============child process, child.js is another file===================
// parent.js
// const {fork }= require('child_process')
// const child = fork('child.js')
// child.on('message',(msg)=>{
//     console.log('from parent',msg)
// })
// child.send('helloooo')

// ================worker thread========================
// parent.js
// const {Worker}= require('worker_threads')
// const worker = new Worker('./worker.js')
// worker.on('message',(msg)=>{
//     console.log('from parent',msg)
// })
// worker.postMessage('it is main')


// ================================

// app.get('*',(req,res)=>{
//     res.send('page not found')
// })


// port =3000
// app.listen(port, ()=>{
//     console.log(`server is running at http://localhost:${port}`)
// })
