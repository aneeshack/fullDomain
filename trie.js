class TrieNode{
    constructor() {
        this.children ={},
        this.isEndOfWord= false
    }
}

class Trie{
    constructor() {
        this.root = new TrieNode()
    }

    insert(word){
        let currentNode = this.root

        for(let char of word){
            if(!currentNode.children[char]){
                currentNode.children[char]= new TrieNode()
            }
            currentNode= currentNode.children[char]
        }
        currentNode.isEndOfWord= true
    }

    print(){
        this.printWords(this.root,"")
    }
    printWords(currentNode, wordsSoFar){
        if(currentNode.isEndOfWord){
            console.log(wordsSoFar)
        }
        for(let char in currentNode.children){
            this.printWords(currentNode.children[char],wordsSoFar+char)
        }
    }
    

}
let trie = new Trie()
trie.insert('hello')
trie.insert('aneesha')
trie.print()