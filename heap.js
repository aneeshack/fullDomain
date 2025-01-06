class Maxheap{
    constructor() {
        this.heap = []
    }
    insert(value){
        this.heap.push(value)
        this.heapify(this.heap.length-1)
    }

    heapify(index){
        let parentIndex = Math.floor((index-1)/2)
        if(index>0 && this.heap[index]>this.heap[parentIndex]){
            [this.heap[index],this.heap[parentIndex]]= [this.heap[parentIndex],this.heap[index]]
            this.heapify(parentIndex)
        }
    }
    print(){
        console.log(this.heap)
    }
    extractMax(){
        if(this.heap.length===0)return null
        let max = this.heap[0]
        this.heap[0]= this.heap.pop()
        this.heapifyDown(0)
        console.log(max)
    }
    heapifyDown(i){
        let largest =i
        let left = i*2+1
        let right = i*2+2
        if(left<this.heap.length && this.heap[left]>this.heap[largest]){
            largest = left
        }
        if(right<this.heap.length && this.heap[right]>this.heap[largest]){
            largest=  right
        }
        if(largest !== i){
            [this.heap[i],this.heap[largest]]= [this.heap[largest],this.heap[i]]
            this.heapify(largest)
        }
    }
    deleteAtIndex(i){
        if(i<0 ||i>this.heap.length){
            return null
        }
        this.heap[i]= this.heap[this.heap.length-1]
        this.heap.pop()
        this.heapifyDown(i)
    }
   
}

let heap = new Maxheap()
heap.insert(7)
heap.insert(17)
heap.insert(70)
heap.insert(5)
heap.print()
heap.deleteAtIndex(2)
heap.extractMax()
heap.print()