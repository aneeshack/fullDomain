class Graph{
    constructor() {
        this.adjacencyList ={}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.adjacencyList[vertex1]=new Set()
        }
        if(!this.adjacencyList[vertex2]){
            this.adjacencyList[vertex2]=new Set()
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    print(){
        // console.log(this.adjacencyList)
        for(let vertex in this.adjacencyList){
            console.log(vertex,'=>',[...this.adjacencyList[vertex]])
        }
    }
    checkEdge(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2)&&
            this.adjacencyList[vertex2].has(vertex1)

        )
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return null
        }
        for(let adjacency of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacency)
        }
        delete this.adjacencyList[vertex]
    }
    bfs(start){
        let queue =[start]
        let visited = new Set()
        visited.add(start)
        while(queue.length >0){
            let node = queue.shift()
            console.log(node)
            for(let neighbour of this.adjacencyList[node]){
                if(!visited.has(neighbour)){
                    queue.push(neighbour)
                    visited.add(neighbour)
                }
            }
        }
    }
    dfs(start){
        let visited = new Set()
        this.dfsRecursive(start, visited)
    }
    dfsRecursive(node, visited){
        if(visited.has(node)) return
        visited.add(node)
        console.log(node)
        for(let neighbour of this.adjacencyList[node]){
           if(!visited.has(neighbour)){
            this.dfsRecursive(neighbour,visited)
           }
        }
    }
}

let graph = new Graph()
// graph.addVertex(5)
// graph.addVertex(3)
// graph.addVertex(9)
graph.addEdge(5,3)
graph.addEdge(5,9)
graph.bfs(5)
console.log(graph.checkEdge(5,9))
graph.print()
graph.dfs(5)
graph.removeEdge(5,9)
graph.removeVertex(5)
graph.print()