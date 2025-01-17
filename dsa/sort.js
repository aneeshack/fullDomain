// // ================binary search-==========================
// // let arr= [-4,5,8,10,56]
// // let target = 10
// // function binarySearch(arr,t){

// const { stat } = require("fs")

    
// //     let leftIndex =0;
// //     let rightIndex =arr.length-1
// //     while(leftIndex<= rightIndex){
// //         let mid=Math.floor((leftIndex+rightIndex)/2)
// //         if(t=== arr[mid]){
// //             return mid
// //         }
// //         if(t>arr[mid]){
// //             leftIndex = mid+1
// //         }
// //         if(t<arr[mid]){
// //             rightIndex = mid-1

// //         }
// //     }
// //     return -1
// // }
// // console.log(binarySearch(arr,target))

// // ====================binary search using recursion=================
// // let arr=[-2,3,4,7,9,18]
// // let t= 7

// // function binarySearch(arr,t,leftIndex,rightIndex){
// //     if(leftIndex>rightIndex){
// //         return
// //     }

// //     let mid = Math.floor((leftIndex+rightIndex)/2)
// //     if(t=== arr[mid]){
// //         return mid
// //     }
// //     if(t<arr[mid]){
// //         rightIndex = mid-1
// //         return binarySearch(arr,t, leftIndex,rightIndex)
// //     }
// //     if(t>arr[mid]){
// //         leftIndex = mid+1
// //         return binarySearch(arr,t,leftIndex,rightIndex)
// //     }
// // }
// // function search(arr,t){
// //     let leftIndex =0;
// //     let rightIndex = arr.length-1
// //     return binarySearch(arr,t,leftIndex,rightIndex)
// // }
// // console.log(search(arr,t))

// ======================linkedlist============================
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size=0
//     }

//     isEmpty(){
//         return this.size===0
//     }
//     prepend(value){
//         let newNode = new Node(value)

//         if(this.isEmpty()){
//             this.head = newNode
//         }else{
//             newNode.next = this.head
//             this.head = newNode
//         }
//         this.size++
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('list is empty')
//         }else{
//             let listView =''
//             let curr = this.head
//             while(curr){
//                 listView +=`${curr.value},`
//                 curr = curr.next
//             }
//             console.log(listView)
//         }
//     }
//     append(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.head = newNode
//         }else{
//         let prev = this.head
        
//         while(prev.next){
//             prev= prev.next
//         }
//         prev.next = newNode
//     }
//     this.size++
//     }

//     inserValue(value,index){
//        if(index<0 || index>this.size){
//         return 
//        }
//        if(index=== 0){
//         this.prepend(value)
//        }else{
//         const newNode = new Node(value)
//         let prev = this.head
//         for(let i=0;i<index-1;i++){
//             prev= prev.next
//         }
//         newNode.next = prev.next
//         prev.next = newNode
//        }
//        this.size++
//     }

//     removeFrom(index){
//         if(index<0|| index>this.size){
//             return
//         }
//         let removenode;
//         if(index===0){
//             removenode = this.head
//             this.head= this.head.next
//         }else{
//             let prev = this.head
//             for(let i=0;i<index-1;i++){
//                 prev = prev.next
//             }
//             removenode = prev.next
//             prev.next = removenode.next
//         }
//         this.size--
//         console.log('removed value by index is:',removenode.value)
//     }

//     getSize(){
//         console.log('the size of the linked list is:',this.size)
//     }

//     removeValue(value){
//        if(this.isEmpty()){
//         return null;
//        }
//        let remove ;
//        if(this.head.value === value){
//         remove = this.head.value
//         this.head = this.head.next;
//         this.size--
//         console.log('removed value:',remove)
//         return remove
//        }else{
//         let prev = this.head
//         while(prev && prev.next){
//             if(prev.next.value === value){
//                 remove = prev.next.value
//                 prev.next = prev.next.next
//                 this.size--
//                 console.log('removed value:',remove)
//                 return remove
//             }
//             prev = prev.next
//         }
//        }
//        return null
//     }

 // removeDuplicate(){
    //     let curr = this.head
    //     let prev = null
    //     let set = new Set()
    //     while(curr){
    //         if(set.has(curr.value)){
    //             prev.next = curr.next
    //             this.size--
    //         }else{
    //             set.add(curr.value)
    //             prev = curr
    //         }
    //         curr = curr.next
    //     }
    // }

    // removeDuplicate() {
    //     if (this.isEmpty()) {
    //         return;
    //     }
    
    //     // First pass: Count occurrences of each value
    //     let valueCounts = new Map();
    //     let current = this.head;
    
    //     while (current) {
    //         valueCounts.set(current.value, (valueCounts.get(current.value) || 0) + 1);
    //         current = current.next;
    //     }
    
    //     // Second pass: Remove nodes with duplicate values
    //     current = this.head;
    //     let prev = null;
    
    //     while (current) {
    //         if (valueCounts.get(current.value) > 1) {
    //             // If duplicate, remove the node
    //             if (prev) {
    //                 prev.next = current.next;
    //             } else {
    //                 // Update head if the first node is a duplicate
    //                 this.head = current.next;
    //             }
    //             this.size--;
    //         } else {
    //             prev = current; // Move prev only if the current node is not deleted
    //         }
    //         current = current.next;
    //     }
    // }
    
//     search(value){
//         if(this.isEmpty()){
//             return null
//         }
//         let i=0
//         let curr = this.head
//         while(curr){
//             if(curr.value === value){
//                 console.log('value found',i)
//                 return i
//             }
//             curr = curr.next
//             i++
//         }
//         console.log('no value found in search')
//         return null
//     }

//     reverse(){
//         if(this.isEmpty()){
//             return null
//         }
//         let prev = null
//         let curr = this.head
//         while(curr){
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }
//     removeDuplicate(){
//                 let set = new Set()
//                 let curr = this.head 
//                 let prev = null
//                 while(curr){
//                     if(set.has(curr.value)){
//                         prev.next = curr.next
//                     }else{
//                         set.add(curr.value)
//                         prev = curr
//                     }
//                     curr = curr.next
//                 }
//             }
//     middle(){
//         if(this.isEmpty()){
//             return null
//         }
//         let slow = this.head
//         let fast = this.head
//         while(fast && fast.next){
//             slow = slow.next
//             fast = fast.next.next
//         }
//         console.log('middle element :',slow.value)
//         return
//     }
// }
// const link = new LinkedList()
// link.prepend(5)
// link.prepend(2)
// link.prepend(7)
// link.append(10)
// link.append(18)
// link.inserValue(67,2)
// link.print()
// link.middle()
// link.reverse()
// link.print()
// link.search(657)
// link.removeFrom(1)
// link.removeValue(67)
// link.print()
// link.getSize()


// =============bubblesort========================================
// let arr =[4,9,-5,7,28]
// function bubblesort(arr){
//     let swapped = true
//     while(swapped){
//          swapped = false
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i]= arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     }
//     return arr
// }

// console.log(bubblesort(arr))

// =================insertion sort ============================
// let arr =[-2,4,5,-5,9,8]
// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let key = arr[i]
//         let j= i-1
//         while(j>=0 && arr[j]>=key){
//             arr[j+1]= arr[j]
//             j=j-1
//         }
//         arr[j+1]=key
//     }
//     return arr
// }

// console.log(insertionSort(arr))

// ===================quickSort  o(n2)==================================
// let arr =[4,2,3,5,6,10]
// function quickSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let right =[]
//     let left =[]
//     let pivot = arr[arr.length-1]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] > pivot){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }      
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// console.log(quickSort(arr))

// =================merge sort==========================----
// let arr =[-2,4,5,-5,9,8]

// function mergeSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let middle = Math.floor(arr.length/2)
//     let left = arr.slice(0,middle)
//     let right = arr.slice(middle)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//     let current =[]
//     while(left.length && right.length){
//         if(left[0]<= right[0]){
//             current.push(left.shift())
//         }else{
//             current.push(right.shift())
//         }
//     }
//     return [...current,...left,...right]
// }

// console.log(mergeSort(arr))

// =======================selection sort=============================
// const arr = [4,3,6,23,1]
// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let minIndex = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex=j
//             }
//         }
//         if(minIndex !==i){
//             [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
//         }
//     }
//     console.log(arr)
// }

// selectionSort(arr)


// =========================heapsort ============================

// function heapSort(arr){
//     let n = arr.length;
//     for(let i= Math.floor((n/2)-1);i>=0;i--){
//         heapify(arr,n,i)
//     }
//     for(let i =n-1;i>0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//         heapify(arr,i,0)
//     }
// }
// function heapify(arr,n,i){
//     let largest = i;
//     let left = 2*i+1
//     let right = 2*i+2

//     if(left<n && arr[left]>arr[largest]){
//         largest = left
//     }
//     if(right<n && arr[right]>arr[largest]){
//         largest=right
//     }
//     if(largest !==i){
//         [arr[i],arr[largest]] =[arr[largest],arr[i]]
//         heapify(arr,n,largest)
//     }
// }
// let arr = [12,7,4,23,8]
// console.log(arr)
// heapSort(arr)
// console.log(arr)
// =========================stack implementation=============================
// class Stack{
//     constructor(){
//         this.item =[]
//     }

//     getSize(){
//         console.log('size of stack:',this.item.length)
//         return this.item.length
//     }

//     push(value){
//         this.item.push(value)
//     }
//     pop(){
//         if(this.item.length===0){
//             return null
//         }
//         return this.item.pop()
//     }
//     peek(){
//         if(this.item.length===0){
//             return null
//         }
//         return this.item[this.item.length-1]
//     }
//     print(){
//         if(this.item.length===0){
//             return null
//         }
//         console.log(this.item)
//         return this.item
//     }
   
// }
// function reverseString(str){
//     let stack = new Stack()
//     let reversedStr =''
//     for(let char of str){
//         stack.push(char)
//     }
//     while(stack.getSize()>0){
//         reversedStr +=stack.pop()
//     }
//     console.log(reversedStr)
// }
// reverseString('hello')

// // const stack = new Stack()
// // stack.push(8)
// // stack.push(5)
// // stack.push(9)
// // stack.pop()
// // console.log(stack.print())
// // console.log(stack.peek())

// =====================queue with stack========================
// class QueueWithStack{
//     constructor() {
//         this.stack1 = [];
//         this.stack2 = [];
//     }
//     enqueue(value){
//         this.stack1.push(value)
//     }
//     isEmpty(){
//         return this.stack1.length===0 && this.stack2.length===0
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         if(this.stack2.length===0){
//             while(this.stack1.length>0){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
       
//         this.stack2.pop()
//     }
//     print(){
//         console.log(this.stack2, this.stack1)
//     }
//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         if(this.stack2.length===0){
//             while(this.stack1.length>0){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         let value =this.stack2[this.stack2.length-1]
//         console.log(value)
//     }
// }
// let stack = new QueueWithStack()
// stack.enqueue(1)
// stack.enqueue(2)
// stack.enqueue(3)
// stack.enqueue(4)
// stack.print()
// stack.dequeue()
// stack.print()
// stack.peek()
// console.log(stack.isEmpty())
// =====================stack with queue==============================
// class StackWithQueue{
//     constructor(){
//         this.queue1 = [];
//         this.queue2 =[]
//     }

//     push(value){
//         this.queue2.push(value)
//         while(this.queue1.length>0 ){
//             this.queue2.push(this.queue1.shift())
//         }
//         [this.queue1,this.queue2]=[this.queue2,this.queue1]
//     }
//     pop(){
//         console.log(this.queue1.shift())
//         return this.queue1.shift()
//     }
// }

// const queue = new StackWithQueue()
// queue.push(5)
// queue.push(9)
// queue.push(6)
// queue.pop()

// let arr =[5,6,7,3]
// function sum(arr){
//     if(arr.length===1)return arr[0]||0
//     let sums = arr.shift()
//     return sums+sum(arr)

// }
// console(sum(arr))
