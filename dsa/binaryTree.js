class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor() {
        this.root = null
    }
    isEmpty(){
        return this.root ===null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.root=== null){
            this.root = newNode
            return
        }
        let queue = [this.root]
        while(queue.length>0){
            let curr = queue.shift()
        if(!curr.left){
            curr.left = newNode
            return
        }
        if(!curr.right){
            curr.right = newNode
            return
        }
        queue.push(curr.left)
        queue.push(curr.right)
        }
    }
    preOrderr(node= this.root){
        if(node){
            console.log(node.value)
            this.preOrderr(node.left)
            this.preOrderr(node.right)
        }
    }
    levelOrder(){
        if(!this.root)return null
        let queue =[this.root]
        while(queue.length>0){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right)queue.push(curr.right)
        }
    }
    height(node = this.root){
        if(!node){
            return -1
        }
        return Math.max(this.height(node.left),this.height(node.right))+1
    }
    reverse(node = this.root){
        if(!node){
            return
        }
        let temp = node.left
        node.left = node.right
        node.right = temp
        this.reverse(node.left)
        this.reverse(node.right)
    }
    isBst(node = this.root, min=-Infinity, max=Infinity){
        if(!node){
            return true
        }
        if(node.value<=min || node.value>=max){
            return false
        }
        return this.isBst(node.left,min,node.value)&&
        this.isBst(node.right,node.value,max)
    }
}
const tree = new BinaryTree()
tree.insert(7)
tree.insert(2)
tree.insert(6)
console.log(tree.isEmpty())
// tree.preOrderr()
// tree.levelOrder()
// console.log(tree.height())
tree.reverse()
tree.levelOrder()
let arr =[4,6,78,2]
for(let val of arr){
    tree.insert(val)
}
tree.preOrderr()