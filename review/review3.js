// let arr =[1,2,3,4,1,2]
// let map = new Map()
// for(let i=0;i<arr.length;i++){
//     if(map.has(arr[i])){
//         map.set(arr[i],map.get(arr[i])+1)
//     }else{
//         map.set(arr[i],1)
//     }
// }
// console.log(map)
// for(let [key,value] of map){
//     if(value===1){
//         console.log(key)
//     }
// }

// let ans = arr.reduce((acc,curr)=>{
//     if(curr%2 !==0){
//         if(curr>acc){
//             acc= curr
//         }
    
//     }
//     return acc
// },-Infinity)
// console.log(ans)

// function mergeSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     console.log(mid)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }
// function merge(left,right){
//     let curr =[]
//     while(left.length>0 && right.length>0){
//         if(left[0]<=right[0]){
//             curr.push(left.shift())
//         }else{
//             curr.push(right.shift())
//         }
//     }
//     return [...curr,...left,...right]
// }
// let arr =[4,5,3,6]
// console.log(mergeSort(arr))