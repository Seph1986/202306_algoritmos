class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let myNode =  new Node(10);

class SLL{

    constructor(){
        this.head = null
        this.count = 0
    }


    addFront(value){
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.count ++

        return this
    }


    removeFront(){

        if(this.head === null){
            return null
        }
        else{
            let currentHead = this.head
            this.head = currentHead.next;
    
            this.count --
        }

    }


    front(){
        if(this.head === null){
            return null
        }
        else{
            return this.head.value
        }
    }


    view(){
        let currentNode = this.head

        while(currentNode ){

            if(currentNode.next === null){
                console.log(`Current node value is ${currentNode.value}`)
            }
            else{
            console.log(`Current node value is ${currentNode.value} it continues:`)}

            currentNode = currentNode.next
        }
    }

    contains(value){

        let searchingValue = value
        let currentNode = this.head
        let found = false

        while(currentNode){
            if(currentNode.value === searchingValue){
                found = true
                break;
            }
            else{
                currentNode = currentNode.next
            }
        }
        return found
    }
}

let ll = new SLL

ll.addFront(10)
ll.addFront(20)
ll.addFront(30)

console.log(ll.contains(40))
