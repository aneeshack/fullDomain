class Hashtable{
    constructor(size) {
        this.table= new Array(size)
        this.size = size
    }
    hash(key){
        let total =0
        for(let i=0;i<key.length;i++){
            total +=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        let index = this.hash(key)
        let bucket = this.table[index] ||[]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let sameKeyValue = bucket.find(item=>item[0]===key)
            if(sameKeyValue){
                sameKeyValue[1]=value
            }else{
                bucket.push([key,value])
            }
        }
        this.table[index]=bucket
    }
    get(){
        console.log(this.table)
    }
}
const hashtable = new Hashtable()
hashtable.set('vini',25)
hashtable.get()
