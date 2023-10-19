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
}

let ll = new SLL

ll.addFront(10)
ll.addFront(20)
ll.addFront(30)
ll.view()
