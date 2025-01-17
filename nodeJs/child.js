
// child.js
process.on('message',(msg)=>{
    console.log('from child:',msg)
    process.send('it is child')
})
