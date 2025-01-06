// let obj = {
//     name:'aneesha',
//     age:20,
//     greet:function(value){
//         console.log(`hello from ${this.name}, ${value}`)
//     }
// }
// let person ={
//     name:'vinisha',
//     age:22
// }
// const persons =obj.greet.bind(person,'hey')
// persons()
// function addition(callback){
//     callback()
// }
// function add(){
//     console.log('from callback')

// }
// addition(add)

// function* print(){
//     for(let i=100;i>=1;i--){

//         yield i
//     }
// }
// let answer =print()
// console.log(answer.next().value)
// console.log(answer.next().value)
// console.log(answer.next().value)
// console.log(answer.next().value)
// function* addition(){
//     for(let i=100;i>=1;i--){
//         yield i
//     }
// }
// let gen= addition()

// let timer =setInterval(() => {
//     let ans = gen.next()
//     if(ans.done){
//         console.log('stopped')
//         clearInterval(timer)
//     }else{
//     console.log(gen.next().value)
//     }
// }, 10);

// let step1 = function ({new Promise((resolve,reject)=>{
//     resolve('from step1')

// })}
// let step2 = function(ans){new Promise((resolve,reject)=>{
//     resolve('from step2')
// })}
// step1()
// .then((result)=>step2(result))
// .then((result)=>console.log(result))

// function addition(a){
//     return function(b){
//         return a+b
//     }
// }
// console.log(addition(2)(3))

// let arr =[4,5,6,8,10,7,3]

// let ans = arr.reduce((acc,curr)=>{
//     let  value =1
//     if(curr%2){
//     acc = curr
//     }
//     return acc
// })

// console.log(ans)

// const { error } = require('console')
// const express = require('express')
// // const event = require('events')
// const fs = require('fs')
// const app = express()



// app.use((req,res,next)=>{
//     let error = new Error('something went wrong')
//     next(error)
// })
// app.use((err,req,res,next)=>{
//     console.log(err)
// })
    

// app.get('/',(req,res)=>{
//     const readFile = fs.createReadStream('example.txt','utf-8')
//     readFile.on('data',chunk=>{
//         console.log(chunk)
//     })    

// })

// let port =3000
// app.listen(port,()=>console.log('server is running'))

let arr =[6,5,3,7,9]
function heapSort(arr){
    let n = arr.length;
    for(let i= Math.floor((n/2)-1);i>=0;i--){
        heapify(arr,n,i)
    }
    for(let i=n;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
           heapify(arr,i,0)
    }
}
function heapify(arr,n,i){
    let largest =i;
    let left = i*2+1
    let right= i*2+2
    if(left<n &&arr[left]>arr[largest]){
        largest= left
    }
    if(right<n &&arr[right]>arr[largest]){
        largest= right
    }
    if(largest !==i){
        [arr[i],arr[largest]]=[arr[largest],arr[i]]
        heapify(arr,n,largest)
    }
}

heapSort(arr)
console.log(arr)