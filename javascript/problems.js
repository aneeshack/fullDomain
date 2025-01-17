// ============reverse using slice=========
// const arr = [1,2,3,4,5]
// const result = arr.splice(0,arr.length).reverse()
// console.log(result)
// console.log(arr)

// ==========print even numbers using generator function=-==-================

// function* countNumbers(){
// console.log('inside generator function')
// yield 'heellkldjfjkl'
//     for(let i=0;;i++){
//        if(i%2===0){
//         yield i
//        }
//     }

// }
// const counter = countNumbers()
// console.log(counter.next().value)
// console.log(counter.next().value)
// console.log(counter.next().value)
// console.log(counter.next().value)
// console.log(counter.next().value)

// function* evenNumbers(){
//     let i=1
//     while(true){
//         if(i%2===0){
//             yield i
//         }
//         i++
//     }
// }

// const number = evenNumbers()
// console.log(number.next().value)
// console.log(number.next().value)
// console.log(number.next().value)
// console.log(number.next().value)
// console.log(number.next().value)

// ================nexttick==========================

// console.log("Start");

// process.nextTick(() => {
//   setTimeout(() => {
//     console.log('inside set time out')
   
//     console.log('after bnext tick')
//   }, 0);
//   console.log("process.nextTick after synchronous work");
// });


// console.log("End");


// =====================string question==========================

// let problem = 'A1B2C3'
// let result =''
// for(let i=0;i<problem.length;i++){
    
//     let char = problem[i]
//     let num = parseInt(problem[i+1])
//     // result += char.repeat(num)
//     for(let i=0;i<num;i++){
//       result +=char
//     }
//     i++
// }
// console.log(result)


// ==================object problems======================
// const arrObj = [{a:1,b:[2,3,4,5]},{a:2,b:[3,2,4,6]}]
// let ans = 0
// for(let val of arrObj){
//   ans+=val.a
//         for(let num of val.b){
        
//             ans += num
//         }
  
  
// }
// console.log(ans)

// ============object array problem===================
// 1. find the sum of even numbers

// const data = {
//     group1: [10, 15, 20],
//     group2: [5, 18, 9],
//     group3: [22, 33, 8, 5],
//   };

// function sumEven(obj){
// let sum =0
// for(let key in obj){
//     let group = obj[key]
//     console.log(group)
//     for(let val of group){
//         if(val%2===0){
//             sum += val
//         }
//     }
// }
// console.log(sum)
// }
// sumEven(data)

// 2.flaten nested array

// const nestedArray = [
//     [1, 2, 3],
//     [4, 5],
//     [6, 7, 8]
//   ];
// function flattenArray(arr){
//     const ans =arr.flat()
//     console.log(ans)
// }
// flattenArray(nestedArray)

// 3. find the count of number of occurence of num in the object

// const data = {
//     a: [1, 2, 3],
//     b: [2, 3, 2],
//     c: [3, 4, 2]
//   };
//   function countOccurrences(obj, num) {
//     let sum =0;
//     for(let key in obj){
        
//         let values = obj[key]
//         for(let val of values){
//             if(val=== num){
//                 sum++
//             }
//         }
//     }
//     return sum
//   }
  
//   console.log(countOccurrences(data, 2));  


// 4. get the multiplication of each array
  // const data = {
  //   group1: [1, 2, 3],
  //   group2: [4, 5],
  //   group3: [6, 7, 8]
  // };
  
  // function multiplyArrays(obj) {
  //   let newObj = {}
  //   let index = 1
  //   for(let key in obj){
        
  //       let values = obj[key]
  //       let mul =1
  //       for(let val of values){
            
  //           mul*= val
  //       }

  //       newObj['key'+index]= mul
  //       index++
  //   }
  //   return newObj
  // }
  
  // console.log(multiplyArrays(data));  
//   console.log(data)

// or
// const data = {
//   group1: [1, 2, 3],
//   group2: [4, 5],
//   group3: [6, 7, 8]
// };

// function multiplyArrays(obj) {
//  let map = {}

//  for(let key in obj){
//   let mul =1
//   for(let val of obj[key]){
//       mul *= val
//   }
//   map[key] = mul
//  }
//  return map
// }

// console.log(multiplyArrays(data));  

// or
// let arr =[8,6,7,8,0]
// arr.forEach((num,index)=>{
//   console.log(num,index)
// })

  // const data = {
  //   group1: [1, 2, 3],
  //   group2: [4, 5],
  //   group3: [6, 7, 8]
  // };

  // function multiply(data){
  //   let obj ={}
   
  //   for(let key in data){
  //      let sum =0
  //     for(let num of data[key]){
  //       sum +=num
        
  //     }
  //     obj[key]=sum
  //   }
  //   console.log(obj)
  // }
  // multiply(data)
  
  // function multiplyArrays(obj) {
  //   let newObj = {}

  //   for(let key in obj){
        
  //       let values = obj[key]
  //       let mul =1
  //       for(let val of values){
            
  //           mul*= val
  //       }

  //       newObj[key]= mul
  //   }
  //   return newObj
  // }
  
  // console.log(multiplyArrays(data));  
  
// Set a timeout
// const timeoutId = setTimeout(() => {
//     console.log('This will not be logged');
//   }, 3000);
  
  // Clear the timeout before it runs
//   clearTimeout(timeoutId);


  // Set an interval
// const intervalId = setInterval(() => {
//     console.log('This will not be logged repeatedly');
//   }, 2000);
  
//   // Clear the interval after 5 seconds
//   setTimeout(() => {
//     clearInterval(intervalId);
//   }, 5000);
  
// ==================================================
// console.log('Start');
// setImmediate(() => {
//     console.log('This runs immediately after the current event loop phase.');
// });

// setTimeout(() => {
//     console.log('set time out')
// });
// console.log('End');
// =================use strict=========================
// "use strict"
// function example() { 
//     let name='anee'
//     console.log(name);
//   }
//   example(); // In non-strict mode, this refers to the global object.

// "use strict"  
// x=10
// console.log(x)

// =======================reverse an arrray=============================
// let arr = [4,9,8,23,9]
// let start =0
// let end = arr.length-1
// while(start<end){
//   [arr[start],arr[end]]= [arr[end],arr[start]]
//   start++
//   end--
// }
// console.log(arr)

// for(let i =0;i<Math.floor(arr.length/2);i++){
//   let temp = arr[i]
//   arr[i]= arr[arr.length-1-i]
//   arr[arr.length-1-i]= temp
// }
// console.log(arr)

// ============reverse String=========================
// let str ='aneesha'
// let newStr =''
// for(let i= str.length-1;i>=0;i--){
//   newStr +=str[i]
// }
// console.log(newStr)

// =================reverse array and reverse each element==================
// let arr = [456,679,778,293,956]
// for(let i=0;i<Math.floor(arr.length/2);i++){
//     let temp = arr[i]
//     arr[i]= arr[arr.length-1-i]
//     arr[arr.length-1-i]=temp
// }
// for(let i=0;i<arr.length;i++){
//   let num = arr[i]
//   let reversedNum = 0
//   while(num>0){
//     let digit = num%10
//     reversedNum = reversedNum*10+digit
//     num = Math.floor(num/10)
//   }
//   arr[i]= reversedNum
// }
// console.log(arr)

// ================object questions=========================
// const ab =[
//   {a:3,pl:[4,34,2,324,2]},
//   {a:233,pl:[4,2334,2,34,2,777]},
//   {a:3,pl:[4,34,2,34,2]},
//   {a:3,pl:[4,34,2,334,2]}
// ]
// let largest =0
// let arr=[]
// for(let obj of ab){
//   arr.push(obj.a)
//   if(obj.a>largest){

//     largest =obj.a
//   }
//   for(let num of obj.pl){
//     arr.push(num)
//     if(num>largest){
   
//       largest = num
//     }
//   }
// }
// let ans = arr.sort((a,b)=>a-b)
// console.log(arr[arr.length-2])
// console.log(largest)

// let sum =0
// for(let val of ab){
//   if(val.a%2 && val.a>99 &&val.a<1000){
//     sum +=val.a
//   }
//   for(let key of val.pl){
//   if(key%2 &&key>99 && key<1000){
//     sum += key
//   }
//   }
// }


// console.log(sum)

// let sum =0
// let arr =[]
// for(let obj of ab){
//   if(obj.a%2 !==0){

//     sum +=obj.a
//   }

//   for(let num of obj.pl){
//     // if(num %2 !==0){

//     //   sum  +=num
//     // }
// if(num>=100 && num<=999){
//   arr.push(num)
// }
//   }
// }

// // console.log(sum)
// console.log(arr)
// ======================longest sub string=======================
// let str ='hello world permutaion day'
// console.log(str.slice(1))
// let arr = str.split(' ')
// for(let i=0;i<arr.length;i++){
//   arr.push()
// }
// console.log(arr)

// reverse array and first half multiply by 4 and next by 2=========================
// let arr=[1,2,3,4,5,6]
// for(let i=0;i<arr.length;i++){
//   if(i<arr.length/2){
//     arr[i]=arr[i]*4
//   }else{
//     arr[i]=arr[i]*2
//   }
// }
// let ans = arr.reverse()
// console.log(ans)

// =============print multiple of 5 infinite by generator=====================
// function* generate(n){
//   let num =0
// while(true){
//     yield n*(num+1)
//     num++
// }
  
// }
// const ans =generate(5)
// console.log(ans.next().value)
// console.log(ans.next().value)
// console.log(ans.next().value)
// console.log(ans.next().value)
// console.log(ans.next().value)

// ================print 1 to 10 in setinterval then stop==================
// let count =1; 
// const interval = setInterval(() => {
   
// console.log(count);

//   if (count>=10) {
//     console.log('end')
//     clearInterval(interval)
//   }
//   count++

// }, 1000); // 1000ms = 1 second

// setTimeout(() => {
//     clearInterval(interval); // Stop the interval
// }, 11000); // Stops after 11 seconds (to print numbers from 1 to 10)


// =======================find prime numbers and delete=======================
// let values=[5,3,4,68,9,2]
// let arr =[]
// for(let i=0;i<values.length;i++){
//   let isPrime=true
//     for(let j=2;j<=Math.sqrt(values[i]);j++){

//       if(values[i]%j===0){
//         isPrime = false
//         break
//       }
      
//     }
//     if(isPrime){
//       // arr.push(values[i])
//       values.splice(i,1)
//       i--
//     }
// }
// console.log(values)

// for(let i=0;i<values.length;i++){
//   if(values[i]%2===0){
//     values.splice(i,1)
//     i--
//   }
// }
// console.log(values)

// =================object destructure=================
// let obj ={
//   name:'aneesha',
//   age:20,
//   greet:function(){
//     console.log(`it is greet,${obj.name}`)
//   }
// }
// const {name, greet}=obj
// greet()
// console.log(name)

// =====================find indices with sum is the target===========================
// let array =[4,7,2,8,7]
// function target(arr,t){
//   for(let i=0;i<arr.length;i++){
//     let complement = t-arr[i]
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[j]===complement){
//         return [i,j]
//       }
//     }
//   }
// }
// console.log(target(array,14))

// function target(arr,t){
//   let map = new Map()
//   for(let i=0;i<arr.length;i++){
//     let complement = t-arr[i]
//     if(map.has(complement)){
//       return [map.get(complement),i]
//     }
//     map.set(arr[i],i)
//   }
//   return false
// }
// console.log(target(array,14))


// let map = new Map()
// map.set(5,'aneesha')
// map.set('vini','aneha')
// console.log(map.get(5))
// map.delete(5)
// console.log(map.has('vini'))
// console.log(map.size)

// ==================frequency of each element===============

// const array = [4, 7, 2, 8, 7, 4, 2, 2]
// function frequency(arr){
// let map = new Map()
//   for(let i=0;i<arr.length;i++){
//     if(map.has(arr[i])){
//       map.set(arr[i],map.get(arr[i])+1)
//     }else{
//     map.set(arr[i],1)
//     }
//   }
//   console.log(map)
//   // for(let [key,value] of map){
//   //   console.log(`${key}`,':',`${value}`)
//   // }
//   map.forEach((value,key)=>{
//     console.log(`${key}`,':',`${value}`)
//   })
// }
// frequency(array)

// ===============longest word in the sentence==========================
// let str ='india is independant'
// let words =str.split(' ')
// let longest =''
// let maxLength =0
// for(let word of words){
//   if(word.length>maxLength){
//     longest=word
//     maxLength= word.length
//   }
// }
// console.log(longest)
// ==================generator function upto 100 with 1sec delay=========================

// function* generator(){

//   for(let i=1;i<=100;i++){
//     yield i
//   }
// }
// let ans = generator()

// function printNext(){
//   let result = ans.next()
//   if(result.value){
//     console.log(result.value)
//   }else{
//     clearInterval(intervalId)
//   }
// }

// const intervalId = setInterval(printNext,1000)

// =============================infinte numbers stop at 10sec each takes 1 sec to execute=============
// let i =1
// while(true){
//   if(i===10){
//     break;
//   }else{
//   console.log(i++)
//   }
// }

// const value =setInterval(() => {
//   if(i===10){
//     clearInterval(value)
//   }else {
//   console.log(i++)
//   }
// }, 1000);


// =======================print 100 to 1 which are multiples of 5=============
// function* generator(){
//   for(let i=100;i>=1;i--){
//     if(i%5===0){
//       yield i
//     }
//   }
// }
// const ans = generator()
// function values(){
//   let result = ans.next()
//   if(!result.done){
//     console.log(result.value)
//   }else{
//     clearInterval(time)
//   }
// }
// const time = setInterval(values,1000)

// ===========pattern print =======================
// 1
// 12
// 123
// 1234
// 12345
// for(let i=1;i<=10;i++){
//   let line =''
//   for(let j=1;j<=i;j++){
//     line +=j
//   }
//   console.log(line)
// }

// 1
// 23
// 456
// 78910
// 1112131415
// let num =1
// for(let i=1;i<=5;i++){
//   let line =''
//   for(let j=1;j<=i;j++){
//     line += num
//     num++
//   }
//   console.log(line)
// }

// ================================
// let str = '4,7,7,8'
// let ans = str.split(',').join('[.]')
// console.log(ans)
// ======================
// function* addition(){
//   for(let i=100;i>=1;i--){
//       yield i
//   }
// }
// let gen= addition()

// let timer =setInterval(() => {
//   let sum = gen.next()
//   if(sum.done){
//       console.log('stop')
//       clearInterval(timer)
//   }else{
//       console.log(gen.next().value)
//   }
// }, 1);

// ===========pattern aabbcccccc-======================
// let value ='a1b2c4'
// function pattern(input){
//     let result =''
//     let count =0
//     let wordSoFar =''
//     for(let i=0;i<input.length;i++){
//         if(isNaN(input[i])){
//             if(wordSoFar && count>0){
//                 result += wordSoFar.repeat(count)
//             }
//             wordSoFar = input[i]
//             count = 0;
//         }else{
//             count = count*10+ parseInt(input[i],10)
//         }
//     }
//     if(wordSoFar && count>0){
//         result += wordSoFar.repeat(count)
//     }
//     return result
// }
// console.log(pattern(value))

// ==========sum using recursion========================
// let arr =[4,6,3,7]
// function sum(arr){
//     if(arr.length<=1)return arr[0]||0
//     return arr.shift()+sum(arr)
// }
// console.log(sum(arr))

// ===============palindrom using recursion=====================
// let str ='malayalam'
// function palindrom(str){
// if(str.length===1)return true;
// if(str[0] !==str[str.length-1]){
//     return false
// }
// return palindrom(str.slice(1,-1))
// }
// console.log(palindrom(str))


// let str='hello aneesha its me rish!'
// let largest =''
// let large =''
// for(let i=0;i<str.length;i++){
//     if(str[i]===' '){
//         if(largest.length>large.length){
//             large=largest
//         }
//         largest= ''
        
//     }else{
//         largest +=str[i]
//     }
// }
// console.log(large)


// largest of the number======================
// let num=987654
// let value = num.toString()
// let largest =0
// console.log(typeof(value))
// for(let i=0;i<value.length;i++){
//     if(Number(value[i])>largest){
//         largest= value[i]
//     }
// }
// console.log(largest)

// ===============second largest repeating number-=====================
// let arr=[1,1,1,2,3,2,5]
// let map = new Map()
// for(let i=0;i<arr.length;i++){
//     if(map.has(arr[i])){
//         map.set(arr[i],map.get(arr[i])+1)
//     }else{
//         map.set(arr[i],1)
//     }
// }
// let large = -Infinity
// let second = -Infinity
// let largekey =0
// let secondkey =0
// for(let [key,value] of map){
//     console.log(key,value)
//     if(value>large){
//         second = large
//         secondkey = largekey
//         large = value
        
//         largekey= key
//     }else if(value>second && value!==large){
//         second = value
//         secondkey = key
//     }
// }
// console.log(largekey,secondkey)


// =======================first unique value in the string aneesha=======================
// let word ='aneesha'

// let map = new Map()
// for(let i=0;i<word.length;i++){
//     if(map.has(word[i])){
//         map.set(word[i],map.get(word[i])+1)
//     }else{
//         map.set(word[i],1)
//     }
// } 
// console.log(map)
// for(let [key, value] of map){
//     if(value===1){
//         console.log(key)
//         return
//     }
// }

// ======================================
// print apple to a-pp-l-e
// let str ='applle'
// let ans=''
// for(let i=0;i<str.length;i++){
//     if(str[i]===str[i+1]){
//         ans+=str[i]
//     }else{
//      ans+= str[i]+'-'
//     }
// }
// console.log(ans)

// ======== input apple output should be a-pp-ppp-llll-eeeee=============================
// let str ='apple'
// let ans =''
// for(let i=0;i<str.length;i++){
//     if(i===str.length-1){
//          ans += str[i].repeat(i+1)
//          break;
//     }
//     ans += str[i].repeat(i+1)+'-'
// }
// console.log(ans)