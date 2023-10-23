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

        }

        return countingNodes(node)

    }

    isEmpty(){
        if (this.root === null) return true
        else return false
    }

    height(){
        let node = this.root
        if (node === null) return 0
        
        function counting (node){
            // BASE CASE
            if (node === null) return -1

            // RECURSIVE CALL
            else{
                let left = counting(node.left)
                let right = counting(node.right)
                return left > right ? left + 1 : right + 1
            }
        }
        
        return counting(node)
    }

    isBalance(){

        let node = this.root
        if(node === null) return null

        function check(node){
            // BASE CASE
            if(node === null){
                return - 1
            }
            // RECURSIVE CALL
            else{
                let left = check(node.left)
                let right = check(node.right)
                return left > right ? left + 1 : right +1
            }
        }   

        let left = check(node.left) +1
        let right = check(node.right) +1

        let diference = Math.abs(left - right)
        
        if (diference > 1){
            console.log('NOT BALANCED')
            return false
        }
        else{
            console.log('BALANCED')
            return true
        }
    } 

    arrayToBST(array){

        let myArray = array
        let middle = Math.floor(myArray.length / 2)
        let firstHalf = myArray.splice(0 ,middle + 1)
        let firstNode = firstHalf.pop()

        this.addValue(firstNode)

        for(let i of myArray){
            this.addValue(i)
        }
        
        for(let i = firstHalf.length - 1; i >= 0; i--){
            this.addValue(firstHalf[i])
        }

        return true
    }

    comAnsc(num1,num2){
        let node = this.root
        if(node === null) return null

        let number1 = num1
        let number2 = num2

        function checking(node,n1,n2){
            // RECURSIVE CALL
            if(n1 > node.value && n2 > node.value){
                return checking(node.right, n1, n2)
            }
            else if(n1 < node.value && n2 < node.value){
                return checking(node.left, n1, n2)
            }
            // BASE CASE
            else{
                return node.value
            }
        }

        return checking(node,number1,number2)
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
bst.addValue(100)

// ALTURA
console.log(bst.height())

// ESTA EQUILIBRADO
console.log(bst.isBalance())

// ARRAY A BST EQUILIBRADO
let BST2 = new BST()
let myArray = [1, 3, 5, 7, 9, 11, 13]
console.log(BST2.arrayToBST(myArray))
console.log(BST2)

// ANCESTRO COMÚN MÁS CERCANO
console.log(BST2.comAnsc(3,5))