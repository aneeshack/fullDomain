// let name = 'rahul ranjan';

// class Stack{
//     constructor() {
//         this.item =[]
//     }
//     push(value){
//         this.item.push(value)
//     }
//     pop(){
//         return this.item.pop()
//     }
//     print(){
//         console.log(this.item)
//     }
//     length(){
//         return this.item.length
//     }
// }
// function isBalanced(parantheses){
//     const stack = new Stack()
//     const matching ={
//         ')':'(',
//         '}':'{',
//         ']':'['
//     }
//     for(let para of parantheses){
//         if(para ==='(' || para ==='{'|| para ==='['){
//             stack.item.push(para)
//         }else if(para ===')' || para ==='}'|| para ===']'){
//             if(stack.item.length ===0 || stack.item.pop() !==matching[para]){
//                 return false
//             }
//         }
        
//     }
//     return stack.item.length ===0
// }
// console.log(isBalanced('()[]'))

// function reverse(word){
//     const stack = new Stack()
//     for(let w of word){
//         stack.push(w)
//     }

//     let reversedStr =''
//     while(stack.item.length>0){
//         reversedStr +=stack.pop()
//     }
//     return reversedStr
// }
// let word = name.split(' ')
// let reversed = word.map(reverse).join(' ')
// console.log(reversed)

// ==========string reverse using stack=============================
// function reverse(word){
//     let stack = []
//     for(let char of word){
//         stack.push(char)
//     }

//     let reverse =''
//     while(stack.length>0){
//         reverse +=stack.pop()
//     }
//     return(reverse)

// }
// console.log(reverse('word'))

// ============