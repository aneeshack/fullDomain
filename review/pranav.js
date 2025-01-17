// let arr=[5,7,3,8,9]
// ==============some method=-===============
// let arr =[7,5,3,7,6]
// let ans = arr.some(num=>num%2===0)
// console.log(ans)

// ==============flat map=======================
// let arr=[5,5,8,9]
// let ans = arr.flatMap(x=>[x,x*2])
// console.log(ans)

// ===================custome map==================
// Array.prototype.customMap =function (callback){

//     let resultantArray =[]
//     for(let i=0;i<this.length;i++){
//         if(Object.prototype.hasOwnProperty.call(this,i)){
//             resultantArray.push(callback(this[i], i, this))
//         }
//     }
//     return resultantArray;
// }
// let arrr =[5,3,6,3]
// let ans = arrr.customMap(num=>num*2)
// console.log(ans)

// ====================-find the longest consecutive character from string ============================
// let str = 'appppleee'
// function longest(str){
//     let currChar =str[0]
//     let currCount =1
//     let maxChar =str[0]
//     let maxCount = 1
//     for(let i=1;i<str.length;i++){
//         if(currChar ===str[i]){
//             currCount++
//         }else{
//             if(currCount>maxCount){
//                 maxCount= currCount
//                 maxChar = currChar

//             }
//             currChar = str[i]
//             currCount =1
//         }
//     }
//     if(currCount>maxCount){
//         maxCount= currCount
//         maxChar = currChar

//     }
//     return maxChar
// }
// console.log(longest(str))

// ====================-find the second longest word in string without using inbuilt split=================
// const sentence = "The umbrella broken";
// function secondLong(str){
//     let word =''
//     let longest= ''
//     let second =''
//     for(let i=0;i<str.length;i++){
//         if( i===str.length-1 || str[i]===' '){
//             if(i===str.length-1 ){
//                 word +=str[i]
//             }
//             if(word.length >longest.length){
//                 second = longest
//                 longest=word
//             }else if(word.length>second.length && word!== longest){
        
//                 second= word
//             }
//             word =''
//         }else{
//             word +=str[i]
//         }
//     }
//     // if(word.length >longest.length){
//     //     second = longest
//     //     longest=word
//     // }else if(word.length>second.length && word!==longest){
//     //     second= word
//     // }
//     return second
// }   
// console.log(secondLong(sentence))

