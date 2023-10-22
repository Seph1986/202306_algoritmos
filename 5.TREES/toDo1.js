class Node{
    constructor(value, right=null, left=null){
        this.value = value
        this.right = right
        this.left = left
    }
}

class BST{
    constructor(){
        this.root = null
    }
    
    addValue(value){
        const node = this.root
        if(node === null){
            this.root = new Node(value)
            return 
        }
        else{
            const searchPosition = function(node){
                if(value < node.value){
                    if(node.left === null){
                        node.left = new Node(value)
                        return
                    }
                    else{
                        return searchPosition(node.left)
                    }
                }
                else if(value > node.value){
                    if(node.right === null){
                        node.right = new Node(value)
                        return
                    }
                    else{
                        return searchPosition(node.right)
                    }
                }
                else{
                    let equalNode = new Node(value)
                    equalNode.right = node.right
                    node.right = equalNode
                    return
                }

            }
            return searchPosition(node)
        }
    }

    contain(value){
        let node = this.root

        function checkValues(node){

            // BASE CASE
            if (value === node.value) return true

            // RECURSIVE CALL
            if(value < node.value){
                if (node.left === null){
                    return false
                }
                else{
                    return checkValues(node.left)
                }
            }
            else if(value > node.value){
                if(node.right === null){
                    return false
                }
                else{
                    return checkValues(node.right)
                }
            }
        }

        return checkValues(node)
    }
    
    max(){
        let node = this.root
        if (node === null) return null

        function lookingForMax(node){
            if(node.right === null){
                return node.value
            }
            else{
                return lookingForMax(node.right)
            }
        }

        return lookingForMax(node)
    }

    size(){
        let node = this.root
        if (node === null) return 0

        function countingNodes(node, count=0){
            let myCount = count
            // BASE CASE
            if (node === null) return 0
            if (node.right === null && node.left === null)
            return count + 1
            // RECURSIVE CALL
            else{
               let myRight = countingNodes(node.right, myCount)
               let myLeft = countingNodes(node.left, myCount) 
               return myRight + myLeft + 1
            }

            return myCount
        }

        return countingNodes(node)

    }

    isEmpty(){
        if (this.root === null) return true
        else return false
    }

}


let bst = new BST()

bst.addValue(20)
bst.addValue(10)
bst.addValue(13)
bst.addValue(5)
bst.addValue(30)
bst.addValue(25)
bst.addValue(90)

// CONTAIN
console.log(bst.contain(13))

// MAX
console.log(bst.max())

// SIZE
console.log(bst.size())

// ESTÁ VACÍO
let newBst = new BST()
console.log(newBst.isEmpty())

