// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(value) {
//         this.items.push(value);
//     }

//     dequeue() {
//         return this.items.shift();
//     }

//     front() {
//         return this.items[0];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }
// }
// const queue = new Queue()

// class PriorityQueue{
//     constructor() {
//         this.item = []
//     }
//     enqueue(element,priority){
//         let newElem = { element, priority}
//         let added = false;
//         for(let i=0;i<this.item.length;i++){
//             if(this.item[i].priority>priority){
//                 this.item.splice(i,0,newElem)
//                 added = true;
//                 break;
//             }
//         }
//         if(!added){
//             this.item.push(newElem)
//         }
//     }
//     print(){
//         console.log(this.item)
//     }
// }

// const queue = new PriorityQueue()
// queue.enqueue('B',2)
// queue.enqueue('C',3)
// queue.enqueue('D',4)
// queue.enqueue('A',1)
// queue.print()

class StackWithQueue{
    constructor() {
        this.queue =[]
    }
    push(value){
        this.queue(value)
    }
    pop(){
        
    }
}