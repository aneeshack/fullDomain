class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearch{
    constructor(){
        this.root = null
    }

    isEmpty(){
        if(!this.root){
            return true
        }
        return false
    }

    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
         this.insertValue(this.root, newNode)
        }
    
    }
  
    insertValue(root, newNode){
        if(newNode.value<root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertValue(root.left,newNode)
            }
        }else if(newNode.value>root.value){
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertValue(root.right,newNode)
            }
        }
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

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    highest(){
        let arr =[]
        this.inOrder(this.root,arr)
        console.log(arr)
        console.log('2nd largest element',arr[arr.length-2])
    }
    inOrder(root,arr){   
        if(root){         
            this.inOrder(root.left,arr)
            arr.push(root.value)
            console.log(root.value)
            this.inOrder(root.right,arr)      
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(){
        let queue =[]
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
             if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    deleteNode(root,value){
        if(root===null){
            return root
        }
        if(value<root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left
            }
            root.value = this.minimum(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }
    minimum(root){
        if(!root.left){
            console.log(root.value)
            return root.value
        }else{
            return this.minimum(root.left)
        }
    }

    heightOfTree(root){
        if(!root){
            return -1
        }else{
        let left = this.heightOfTree(root.left)
        let right = this.heightOfTree(root.right)
        return Math.max(left,right)+1
    }
    }
    isBalanced(node = this.root){
        if(!node){
            return true
        }
        let left = this.heightOfTree(node.left)
        let right = this.heightOfTree(node.right)
        if(Math.abs(left-right)>1){
            return false
        }
        return this.isBalanced(node.left)&&this.isBalanced(node.right)
    }

    isSame(node1,node2){
        if(node1 ===null && node2===null){
     
            return true
        }
        if(node1 ===null || node2===null){
          
            return false
        }
        if(node1.value !== node2.value){
            return false
        }
        return this.isSame(node1.left,node2.left)&&this.isSame(node1.right,node2.right)
    }
    maximum(node = this.root){
        if(!node.right){
            return node.value
        }else{
            this.maximum(node.right)
        }
    }
}

let search = new BinarySearch()
let search1 = new BinarySearch()
search.insert(77)
search.insert(9)
search.insert(6)
search.insert(5)
console.log(search.maximum())
// search.preOrder(search.root)
// search.inOrder(search.root)
// search.highest()
// search.postOrder(search.root)
// console.log('=============================')
// console.log(search.minimum(search.root))
// search.levelOrder()
// console.log(search.heightOfTree(search.root))
search1.insert(7)
search1.insert(9)
search1.insert(6)
search1.insert(5)

// console.log(search.isSame(search.root,search1.root))


