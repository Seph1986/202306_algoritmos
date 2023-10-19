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

    display(){
        let myString = 'Valores en lista:'
        let runner = this.head

        while(runner){
            myString +=', '+ runner.value

            runner = runner.next
        }

        console.log(myString)
        return myString
    }

    back(){
        let runner = this.head

        while(runner.next !== null){
            runner = runner.next
        }

        return runner.value
    }


    removeBack(){
        let runner = this.head
        let behind = null

        while(runner.next !== null){
            behind = runner
            runner = runner.next
        }

        behind.next = null
        return behind.value
    }


    addBack(value){
        let runner = this.head

        while(runner.next !== null){
            runner = runner.next
        }

        let new_instance = new Node(value)
        runner.next = new_instance

        return runner.next
    }

}

let ll = new SLL

ll.addFront(20)
ll.addFront(10)
ll.addFront(40)
ll.addFront(30)

console.log(ll.back())
console.log(ll.removeBack())

console.log(ll.addBack(55))

ll.display()


