// worker.js
const {parentPort}= require('worker_threads')
parentPort.on('message',(msg)=>{
    console.log('message on :',msg)
    parentPort.postMessage('form worker')
})
