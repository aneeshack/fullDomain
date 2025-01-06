

// let timer = new Promise((resolve,reject)=>{
//     resolve(2)
// })
// .then((result)=>{
//     console.log(result)
//     return result *2
// }).then((result)=>{
//     console.log(result)
//     return result*2
// })
// .catch((error)=>console.log(error))

// function addition(a,b){
//     substraction(c,d)
// }
// function substraction()
// Write a mongodb query to find the 2nd heightest salary of employee in each manager ?

// db.employee.aggregate([{$group:{_id:'$manager',count:{$sum:1}}},{$sort:{manager:-1}},{$skip:1},{$limit:1}])

// const inputRef = userRef(null)

// <input ref={inputRef} / >


// Binary Tree Node class
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// // Binary Tree class
// class BinaryTree {
//     constructor() {
//         this.root = null;
//     }

//     // Insert method to add nodes to the binary tree
//     insert(data) {
//         const newNode = new Node(data);
//         if (this.root === null) {
//             this.root = newNode;
//         } else {
//             this.insertNode(this.root, newNode);
//         }
//     }

//     // Helper function for insertion (recursive)
//     insertNode(node, newNode) {
//         if (newNode.data < node.data) {
//             if (node.left === null) {
//                 node.left = newNode;
//             } else {
//                 this.insertNode(node.left, newNode);
//             }
//         } else {
//             if (node.right === null) {
//                 node.right = newNode;
//             } else {
//                 this.insertNode(node.right, newNode);
//             }
//         }
//     }
//     printTree(){
//         if(!this.root)return
//         let curr = this.root
        
//     }
//   height(root){
//     if(!root)return -1
//     let left = this.height(root.left)
//     let right = this.height(root.right)
//     return Math.max(left,right)+1
//   }

//     // In-order Traversal (left, root, right)
//     inOrderTraversal(node = this.root) {
//         if (node !== null) {
//             this.inOrderTraversal(node.left);

//             console.log(node.data);
//             this.inOrderTraversal(node.right);
//         }
//     }


//     // Pre-order Traversal (root, left, right)
//     preOrderTraversal(node,arr) {
//         if (node !== null) {
//             console.log(node.data);
//             arr.push(node.value)
//             this.preOrderTraversal(node.left);
//             this.preOrderTraversal(node.right);
//         }
//     }

//     // Post-order Traversal (left, right, root)
//     postOrderTraversal(node = this.root) {
//         if (node !== null) {
//             this.postOrderTraversal(node.left);
//             this.postOrderTraversal(node.right);
//             console.log(node.data);
//         }
//     }

//     // Search method to find a node with specific data
//     search(data, node = this.root) {
//         if (node === null) {
//             return false;
//         }
//         if (data === node.data) {
//             return true;
//         }
//         if (data < node.data) {
//             return this.search(data, node.left);
//         } else {
//             return this.search(data, node.right);
//         }
//     }
// }

// // Example usage
// const tree = new BinaryTree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(2);
// tree.insert(7);
// tree.insert(12);
// tree.insert(18);

// console.log(tree.height(tree.root))

// console.log("In-order Traversal:");
// tree.inOrderTraversal();

// // console.log("Pre-order Traversal:");
// // tree.preOrderTraversal();

// // console.log("Post-order Traversal:");
// // tree.postOrderTraversal();

// // console.log("Search for 7:", tree.search(7)); // Should return true
// // console.log("Search for 20:", tree.search(20)); // Should return false


// let arr =[5,3,8,5,4]
// function remove(arr){
//     if(arr.length<=1)return 
//     for(let i=0;i<arr.length;i++){
//         if(arr[i])
//     }
//     return 
// }
// remove(arr)


let word ='aneesha'

let map = new Map()
for(let i=0;i<word.length;i++){
    if(map.has(word[i])){
        map.set(word[i],map.get(word[i])+1)
    }else{
        map.set(word[i],1)
    }
} 
console.log(map)

// let name='rahul ranjan'


// 1.callback hell to promise chain
// 2.30 employee is there,each 10 employee has one manager, second highest employee
// count the employee has duplicate email id
// 3.lazyloading
// 4.reverse using stack
// find the first unique value in String
// remove duplicate using recursion
// height of binary tree
// reverse binary tree
// how data store in useref
// Write a mongodb query to find the 2nd heightest salary of employee in each manager?
// custom hook
