
// var value = 45
// function hello(cleas){
//  let value=88
//   console.log('fn',value)
// }
// console.log(value)
// hello()

// let i=1
// do{
//   console.log(i)
//   i++
// }while(i<9)
//   console.log('ls',i)

// console.log(x)
// let x=9

// let x=null
// console.log(x)
// let x =7
// while(true){
//  console.log(x)
//  x++
// }

// var b=9
// function hello(){
//   var b=3
//   console.log(b)
// }
// hello()
// console.log(b)

// let arr =[4,7,8,9]
// let sort=(x)=>{
//     return x.toString()

// }
// let value = arr.map(sort)
// console.log(value)

// ===================filter===========================
// let arr = [5,7,2,4,9,10]
// function odd(x){
//     return x%5===0
// }
// let result = arr.filter(odd)
// console.log(result)

// ========================reduce===========================
// let arr =[3,8,4,5,1,3,9]
// let ans = arr.reduce((acc,curr)=>{
//     acc =acc+curr
//     return acc
// },1000)
// console.log(ans)
// let result = arr.reduce((max,curr)=>{
//     if(curr>max){
//         max= curr
//     }
//     return max
// },0)
// console.log(result)
// ================callback=========================
// function greet(name) {
//     return function(callback) {
//       console.log("Hello, " + name);
//       callback();  // Executes the passed callback function
//     };
//   }
  
//   function farewell() {
//     console.log("Goodbye!");
//   }
  
//   const greetUser = greet("John");
//   greetUser(farewell);  // 

// function higherOrder(callback){
//     console.log('before executing callback')
//     callback()
//     console.log('aftre call back')
// }

// function callbackfn(){
//     console.log('inside callback function')
// }
// higherOrder(callbackfn)
// ===============ternary==================

// let x =9
// let result =x>9?true:false
// console.log(result)

// =============option chaiing====================
// let data = {
//     user:'aneesha',
//     age:20
// }
// console.log(data?.user)
// console.log(data?.admin?.admin)
// =============currying==============================
// function currying(a){
//     return function(b){
//         return function(c){
//         return a+b+c
//         }
//     }
// }
// let ans =currying(5)(4)(6)
// // console.log(ans(4,3))
// console.log(ans)


// ==============Object========================
// let obj ={
//     name:'aneesha',
//     age:20
// }
// obj.city = 'kozhikode'
// console.log(obj)
// Object.freeze(obj)
// obj.name='vini'
// Object.seal(obj)
// obj.age=22
// delete obj.age
// console.log(obj)

// for(let key in obj){
//     if(key ==='age'){
//         obj[key]++
        
//     }
//     obj.city ='calicut'
//     console.log(key,':',obj[key])
 
// }

// console.log(obj)

// ================date===========================
// let dt = new Date()
// console.log(dt)
// for(let i=0;i<100;i++){
//     console.log(i)
// }
// console.log('end')
// let diff = new Date()-dt
// console.log(diff)



// let dob = '2000-12-06'
// let dateOb = new Date(dob)
// let age = new Date().getFullYear()-dateOb.getFullYear()
// console.log(dateOb.getDate())
// console.log(age)

// ================reverse string=====================
// function reverseString(str){
    // let ans =''
    // for(let i=str.length-1;i>=0;i--){
    //     ans +=str[i]
    // }   
   
//     const ans =str.split('').reverse().join('')
//  console.log(ans)
// }
// reverseString('hello')

// ===============frequency of each character in string===================
// function charFrequency(str){
//     let map = new Map()
//     for(let i=0;i<str.length;i++){
//        if(map.has(str[i])){
//         map.set(str[i],map.get(str[i])+1)
//        }else{
//         map.set(str[i],1)
//        }
//     }

//     console.log(map)
//     let result ={}
//     map.forEach((value,key)=>{
//         result[key]=value
//     })
//     console.log(result)
// }
// charFrequency('malayalee')

// =========first non repeating char in string=============
// function nonRepeat(str){
//     let map = new Map()
//     for(let char of str){
//         if(map.has(char)){
//             map.set(char,map.get(char)+1)
//         }else{
//             map.set(char,1)
//         }
//     }
//     for(let char of str){
//         if(map.get(char)===1){
//             return char
//         }
//     }
//     return null
// }
// console.log(nonRepeat('swiss'))

// =====================longest substring===========================
// function longestSubstring(str){
//     let map = new Map()
//     let start =0;
//     let maxLength =0;
//     for(let i =0;i<str.length;i++){
//         if(map.has(str[i])){
//             start = Math.max(map.get(str[i])+1,start)
//         }else{
//             map.set(str[i],i)
//             maxLength = Math.max(maxLength, i-start+1)
//         }
//     }
//     console.log(maxLength)
// }
// longestSubstring('abcabcbb')

// ================delete object key value of last one====================
// let obj ={
//     name:'aneesha',
//     age:22
// }
// delete obj.age
// console.log(Object.entries(obj))


const values = [4,6,8,2,9]
const ans = values.reduce((acc,curr)=>{
     
    if(acc<curr){
        acc=curr
    }
    return acc
},{max:-Infinity,second:-Infinity}).
console.log(ans)