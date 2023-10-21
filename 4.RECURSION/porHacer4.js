// LONGITUD DE LISTA RECURSIVA

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SLL{
    constructor(){
        this.head = null
    }
    
    addFront(value){
        let node = new Node(value)
        node.next = this.head
        this.head = node
        return this
    }
    
    nodeCount(){
        let myCount = 0
        let myHead = this.head
        
        function rNode(head, count){

            let recursiveCount = count
            let recursiveHead = head

            if(head === null) return null
            
            if(head.next === null){ 
                recursiveCount ++
                return recursiveCount
            }
            else{
                recursiveCount ++
                recursiveHead = recursiveHead.next
                return rNode(recursiveHead,recursiveCount)
            }
        }

        let value = rNode(myHead,myCount)
        return value
    }
}

let myLL = new SLL()

myLL.addFront(2)
myLL.addFront(3)
console.log(myLL)

console.log(myLL.nodeCount())


// ¿TIENES UVAS?
let myArray = [10,2,10,4,10,6,10,8]

function maxGrapes(arr){

    let myArray = arr
    let case1 = myArray.length -1
    let case2 = myArray.length -2

    const rGrapes = (arr, i, sum)=>{

        let rIndex = i
        let rSum = sum

        // BASE CASE
        if(rIndex == -1 || rIndex == -2){
            return rSum
        }
        // RECURSIVE CALL
        else{
            rSum += arr[rIndex]
            rIndex -= 2
            return rGrapes(arr,rIndex,rSum)
        }
    }

    let sum1 = rGrapes(myArray,case1,0)
    let sum2 = rGrapes(myArray,case2,0)
    let max = null

    sum1 > sum2 ? max = sum1 : max = sum2
    return max
}

console.log(maxGrapes(myArray))


// COLLATZ-APALOOZA

