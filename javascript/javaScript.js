
// ---------callback hell--------------
// console.log('start');

// setTimeout(() => {
//   console.log('task 1 completed')
//   setTimeout(() => {
//     console.log('task2 completed')
//     setTimeout(() => {
//       console.log('task3 completed')
//       setTimeout(() => {
//         console.log('task4 completed')
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// -------------------avoiding callback hell but it is not promise chain----------------
// console.log('starting')
// const task=(message,delay)=>{
//   return new Promise((resolve)=>
//   setTimeout(() => {
//     console.log(message)
//     resolve()
//   }, delay))
// }

// task('start',1000)
// .then(()=>task('task1',1000))
// .then(()=>task('task2',1000))
// .then(()=>task('task3',1000))
// .then(()=>task('end',1000))


// ------------------callback hell----------------------
// const step1 = (callback)=>{
//   console.log('step1')
//   callback('result from step1')
// }
// const step2 = (prevResult, callback)=>{
//   console.log('step2:',prevResult)
//   callback('result from step2')
// }
// const step3 = (prevResult, callback)=>{
//   console.log('step3:',prevResult)
//   callback('result from step3')
// }

// step1((result1)=>{
//   step2(result1, (result2)=>{
//     step3(result2,(result3)=>{
//       console.log('final result',result3)
//     })
//   })
// })

// =======================promise chain to solve above callback hell=====================

// const step1 =()=>{
//   return new Promise((resolve)=>{
//     console.log('step 1 started')
//     resolve('result from step1')
//   })
// }

// const step2 = (result1)=>{
//   return new Promise((resolve)=>{
//     console.log('it is step2:',result1)
//     resolve('result from step2')
//   })
// }

// step1()
// .then((result)=>step2(result))
// .then((result)=>console.log('promise return value',result))


// ===============call=============
// const person = {
//   firstName:'aneesha',
//   lastName:'c k',
//   fullName: function(greeting,wish){
//     console.log(`${greeting} ,${wish} my name is ${this.firstName} ${this.lastName}`)
//   }
// }
// const anotherPerson ={
//   firstName: 'vinisha',
//   lastName: 'Pavithran',
// }
// person.fullName.call(anotherPerson, 'hello','goodmorning')


// ===================apply=====================
// const person = {
//   firstName:'aneesha',
//   lastName:'c k',
//   fullName: function(greeting,punctuation){
//     console.log(`${greeting} my name is ${this.firstName} ${this.lastName} ${punctuation}`)
//   }
// }
// const anotherPerson ={
//   firstName: 'vinisha',
//   lastName: 'Pavithran',
// }
// person.fullName.apply(anotherPerson, ['hello','!!!'])


// ================bind================
// const person = {
//   firstName:'aneesha',
//   lastName:'c k',
//   fullName: function(greeting){
//     console.log(`${greeting} my name is ${this.firstName} ${this.lastName}`)
//   }
// }
// const anotherPerson ={
//   firstName: 'vinisha',
//   lastName: 'Pavithran',
// }
// const boundFullName =person.fullName.bind(anotherPerson, 'good morning')
// boundFullName()

// =================generator function=================
// function* countNumbers(){
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const counter = countNumbers()
// console.log(counter.next().value)
// console.log(counter.next().value)
// console.log(counter.next().value)

// function* countNumbers(){
//   let arr =[2,5,6,7]
//   for(let val of arr){
//       yield val
//   }

// }
// const counter = countNumbers()
// console.log(counter.next().value)
// console.log(counter.next().value)
// console.log(counter.next().value)
// console.log(counter.next().value)


// =============currying====================
// function add(a){
//   return function(b){
//     return function(c){
//       return a+b+c
//     }
//   }
// }
// const result =add(3)(5)(7)
// console.log(result)

// const sub = (a)=>(b)=>(c)=> a+b+c;
// const ans = sub(9)(4)(5)
// console.log(ans)

// ==============Factory Function=============
// function createCar(brand,model){
//   return{
//     brand:brand,
//     model:model,
//     greet(){
//       console.log(`the car ${this.brand}'s model is ${this.model}`)
//     }
//   }
// }
// const car1 = createCar('Toyoto','Carmy')
// const car2 = createCar('Honda','Civic')

// car1.greet()
// car2.greet()
// ================constructor function============
// function Car(brand, model){
//   this.brand = brand;
//   this.model = model;

//   this.drive = function(){
//     console.log(`${this.brand} ${this.model} is driving`)
//   }
// }
// const car1 = new Car('toyoto','camry')
// const car2 = new Car('honda','civic')
// console.log(car1)
// car1.drive()
// car2.drive()

// =============default parameter================
// const greet= function(name='aneesha'){
//   console.log('name is:',name)
// }
// greet('amrutha')

// =============rest parameter====================
// const greet =(...number)=>{
//   console.log('number is',number)
// }
// greet(8)
// greet(5,7,8,9)


// ==================promise====================
// let numbers = new Promise((resolve, reject)=>{
//   let success = false;
//   if(success){
//     resolve('successfull login')
//   }else{
//     reject('the login error')
//   }
// })
// numbers
// .then((result)=>{console.log(result)})
// .catch((error)=>console.log(error))

// ===============pending promise==   no resolve or reject ================
// let numbers = new Promise((resolve, reject)=>{
//   console.log('inside pending promise')
// })
// console.log('value after pending promise')


// =====================resolved promise========================
// let resolvedPromise = new Promise((resolve, reject)=>{
//   resolve('value resolved')
// })

// resolvedPromise.then((message)=>console.log(message))

// ================rejected promise=============================
// let rejectPromise = new Promise((resolve, reject)=>{
//   reject('value rejected')
// })

// rejectPromise
// .catch((error)=>console.log(error))

// ===============promise chain =======================
// let chainedPromise = new Promise((resolve, reject)=>{
//   resolve('it is from starting')
// })
// .then((message)=> {
//   console.log('first:',message)
//   return 'it is from second step'
// })
// .then((message)=>{
//   console.log('second:',message)
//   return 'it is from third step'
// })
// .then((result)=>{
//   console.log('from 3rd:',result)
// })


// ====================set timeout===========================
// setTimeout(greet, 1000,'hellofrom settimeout')
// function greet(msg){
//   console.log('messgae',msg)
// }

// ====================promise.all=====================------
// const promise1 = new Promise((resolve)=>setTimeout(resolve,1000,'from the first promise'))
// const promise2 = new Promise((resolve)=>setTimeout(resolve,5000,'from the second promise'))

// Promise.all([promise1,promise2])
// .then((results)=>{
//   console.log('results',results)
// })


// let promise1 = Promise.resolve(1)
// let promise2 = Promise.reject('faliled')
// let promise3 = Promise.resolve(3)
// Promise.all([promise1,promise2,promise3])
// .then((result)=>console.log(result))
// .catch((result)=>console.log(result))



// let promise1 = Promise.resolve(1)
// let promise2 = Promise.reject('faliled')
// let promise3 = Promise.resolve(3)
// Promise.allSettled([promise1,promise2,promise3])
// .then((result)=>console.log(result))
// .catch((result)=>console.log(result))


// ======================promise.race=====================================
// const promise1 = new Promise((resolve)=>setTimeout(resolve,1000,'from the first'))
// const promise2 = new Promise((resolve)=>setTimeout(resolve,1000,'from the second'))
// const promise3 = new Promise((resolve)=>setTimeout(resolve,1000,'from the third'))

// Promise.race([promise3,promise2,promise1])
// .then((result)=>{
//   console.log('result',result)
// })

// let promise1 = Promise.reject('fail')
// let promise2 = Promise.reject('faliled')
// let promise3 = Promise.resolve('afdjk')
// Promise.any([promise1,promise2,promise3])
// .then((result)=>console.log(result))
// .catch((result)=>console.log(result))

// ===================promises.resolve=-================================
// let resloved = Promise.resolve('this is resolved')
// .then((msg)=>console.log(msg))

// ===================comparison of async functions-=======================
// console.log("Start");

// setImmediate(() => {
//   console.log("Inside setImmediate");
// });

// setTimeout(() => {
//   console.log("Inside setTimeout");
// }, 0);

// process.nextTick(() => {
//   console.log("Inside process.nextTick");
// });

// console.log("End");

// ==================promise chain=============================
// const step1 = new Promise((resolve, reject)=>{
//   resolve(8)
// })
// .then((value)=>value*2)
// .then((value)=>value+2)
// .then((value)=>console.log(value))
// ======================proxy object===========================
// const target ={
//   value:'hello',
//   age:4
// }

// const handler ={
//   get: function(target,prop,receiver){
//     if(prop==='value'){
//       return target[prop]+' world'
       
//     }else{
//       return `${prop} does not exist`
      
//     }
//   }
// }
// const proxy = new Proxy(target,handler)
// console.log(proxy)

// ==========================prototype=======================
// const obj = {
//   name:'aneesha'
// }
// console.log(Object.getPrototypeOf(obj))
// console.log(obj.toString())

// function Person(name){
//   this.name = name
// }
// Person.prototype.greet = function(){
//   console.log(`prototype contain ${this.name}`)
// }
// let person1 = new Person('alice')
// person1.greet()


// =====================function composition=====================
// const double = (x)=>{
//   return x*2
// }
// const square = (x)=>{
//   return x*x
// }

// const combine= x=>square(double(x))
// console.log(combine(3))

// =======timer start from 10 to 0 then reset it and again timer on=========================
// let time =10
// function setTimer(){
//   setInterval(()=>{
//     console.log(time)
//     time--
//     if(time===0){
//       console.log('times up,resetting timer....')
//       time =10
//     }
//   },1000)
  
// }
// setTimer()


// ================Map=============================
// let map = new Map()
// map.set('name','aneesha')
// map.set('place','calicut')
// map.set('age',20)
// map.set('age',map.get('age')+2)
// map.delete('name')


// console.log(map)
// console.log(map.keys())
// console.log(map.values())
// console.log(map.entries())

// map.forEach((value,key)=>{
//  console.log('key:',`${key}`,'values:',`${value}`)
// })
// let newValues = map.values()
// console.log(newValues)
// for(let val of newValues){
//     console.log(val)
// }
// console.log(map.entries())
// for(let [key,value] of map.entries()){
//     console.log(`key:${key},values:${value}`)
// }
// console.log([...map])

// let map1 = new Map();
// let objKey = { id: 1 };
// let arrKey = [1, 2, 3];

// map1.set(objKey, 'object value');
// map1.set(arrKey, 'array value');
// map1.set('stringKey', 'string value');

// // Modify the keys
// objKey.id = 2;
// arrKey.push(4);
// console.log(map1)

// // Add a new key
// map1.set([1, 2, 3, 4], 'new array value');

// // Iterate and log
// map1.forEach((value, key) => {
//     console.log(key, value);
// });

// // Accessing the values
// console.log(map1.get(objKey));    // What will this print?
// console.log(map1.get(arrKey));    // What will this print?
// console.log(map1.get('stringKey')); // What will this print?
// console.log(map1.get([1, 2, 3, 4])); // What will this print?

// =================Set=========================
// let set = new Set([2,3,5,6])
// set.add(9)
// set.delete(2)

// console.log(set.has(5))
// console.log(set.size)
// console.log([...set])
// console.log(set.keys())
// console.log(set.values())
// console.log(set.entries())

// for(let char of set){
//     console.log(char)
// }


// let arr =[2,4,2,3,5,4,2]
// let ans = [...new Set(arr)]
// console.log(ans)

// ==========object======================
// let obj ={
//     'name':'aneesha',
//     'age':20,
// }
// obj.place='calicut'


// console.log(obj.name)
// console.log(obj['name'])
// console.log(obj)
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
// console.log(Object.hasOwn(obj,'age'))
// for(let key in obj){
//     console.log(key,obj[key])

// }
// for(let key of Object.entries(obj)){
//     console.log(key)
// }

// ===============arra================
// let arr =[4,6,8,7]
// arr.forEach((val,index)=>{
//     console.log(val,index);
    
// })
// =================filter=============
// const students = [
//     { name: 'Alice', subjects: { Math: 60, English: 70, Science: 80 } },
//     { name: 'Bob', subjects: { Math: 40, English: 60, Science: 70 } },
//     { name: 'Charlie', subjects: { Math: 80, English: 90, Science: 70 } }
//   ];
//   const ans = students.filter(student=>
//      Object.values(student.subjects).every(score=>score>50)
//   )
//   console.log(ans)

// let fruits =['apple','oramge']
// let ans = fruits.filter(fruit=>
// fruit.charAt(0)==='a'
// )
// console.log(ans)

// ===========every in js======================

// let arr =[56,7,8,9]
// const ans = arr.every(x=>typeof(x)==='string')
// console.log(ans)
// ==================map========================
// const products = [
//     { name: 'Laptop', price: 1000 },
//     { name: 'Phone', price: 500 },
//     { name: 'Tablet', price: 300 }
//   ];
// let ans = products.map(product=>{
//   return {name:product.name,price:product.price*0.8}
// })  
// console.log(ans)

// ==================reduce======================
// let num =[1,23,5,7,3,9,12]
// let ans = num.reduce((acc,curr)=>{
//   if(curr>acc.max){
//     acc.second =acc.max;
//     acc.max = curr
//   }else if(curr>acc.second && acc.max !== curr){
//     acc.second = curr
//   }
//   return acc
// },{max:-Infinity,second:-Infinity})
// console.log(ans.max)

// 3rd largest using reduce
// let arr =[4,5,6,7,8,2]
// let ans = arr.reduce((acc,curr)=>{
//    if(curr>acc[0]){
//     [acc[2],acc[1],acc[0]]=[acc[1],acc[0],curr]
//    }else if(curr>acc[1]){
//     [acc[1],acc[2]]=[acc[2],acc[1]]
//    }else if(curr>acc[2]){
//     acc[2]=curr
//    }
//    return acc
// },[-Infinity,-Infinity,-Infinity])
// console.log(ans[2])

// let arr = [4, 5, 6, 7, 8, 2];
// let ans = arr.reduce(
//   (acc, curr) => {
//     if (curr > acc[0]) {
//       // Current value is greater than the largest, update largest and second largest
//       acc[1] = acc[0];
//       acc[0] = curr;
//     } else if (curr > acc[1] && curr !== acc[0]) {
//       // Current value is greater than the second largest but less than the largest
//       acc[1] = curr;
//     }
//     return acc;
//   },
//   [-Infinity, -Infinity] // Initialize largest and second largest
// );

// console.log("Second Largest:", ans[1]);

// =================isNaN================
// let word ='str555'
// let val ='555'
// console.log(isNaN(word))
// console.log(isNaN(val))


// ============pass by value========================
// copy of value is passed to the function
// let x =3
// hello(x)
// function hello(x){
//   x=10
//   console.log('inside function',x)
// }
// console.log('outside',x)

// ===============shallow copy=====================
// let original = {name:'alice',address:{city:'wonderland'}}

// let shallowCopy = Object.assign({},original)
// shallowCopy.address.city='london'
// console.log(original)
// console.log(shallowCopy)

// =================deep copy=======================
// let original = {name:'alice',address:{city:'wonderland'}}

// let deepCopy = JSON.parse(JSON.stringify(original))
// deepCopy.address.city='london'
// console.log(original)
// console.log(deepCopy)


// =================rest parameters suum=============
// let sum =0
// function hello(...args){
//   for(let val of args){
//     sum +=val
//   }

//   return sum
// }
// console.log(hello(5,4,4))

// ==================reverse an array=========================
// let arr =[3,5,12,8,9]
// for(let i=0;i<arr.length/2;i++){

//   [arr[arr.length-1-i],arr[i]]= [arr[i],arr[arr.length-1-i]]

// }
// console.log(arr)
// let arr =[3,5,12,8,9]
// for(let i=0;i<arr.length/2;i++){
//   let temp = arr[i]
//   arr[i]=arr[arr.length-1-i]
//   arr[arr.length-1-i]= temp

// }
// console.log(arr)

// =============nullish qualish ??===================
// let ename=null
// let newName = 'aneesha'
// let ans = ename??newName
// console.log(ans)

// =============second function override the first one================
// function hello(hell){
//     console.log('hi',`${hell}`)
// }
// hello('hi','jo')
// function hello(hi,he){
//     console.log('hello',`${hi}`)
// }
// hello('hee')

// ==============convert to json=================
// let obj ={
//     name:'anee',
  
// }
// let ans = JSON.stringify(obj)
// let anss = JSON.parse(ans)
// console.log(anss)

// ==================impure function========================
// let x =0
// function add(a){
//     x +=a
//     return x
// }
// console.log(add(3))
// console.log(add(3))

// =============Object has own==================
// let obj ={
//     name:'aneesha',
//     age:22,
// }
// let key = Object.keys(obj)
// console.log(key)
// console.log( delete obj[key[key.length-1]])
// console.log(Object.hasOwn(obj,'name'))


// =============print tomarrow date===================
// let today= new Date()
// let tomarrow = new Date(today)
// tomarrow.setDate(today.getDate()+1)
// console.log(tomarrow.toDateString())