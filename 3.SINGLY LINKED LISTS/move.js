class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let myNode =  new Node(10);

class SLL{

    constructor(){
        this.head = null    }


    addFront(value){
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this
    }


    removeFront(){

        if(this.head === null){
            return null
        }
        else{
            let currentHead = this.head
            this.head = currentHead.next;
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

    length(){
        let count = 0
        let runner = this.head

        while(runner){
            count ++
            runner = runner.next
        }

        return count
    }

    
    display(){
        let myString = 'Valores en lista:'
        let runner = this.head

        while(runner){
            myString +=' '+ runner.value + ', '

            runner = runner.next
        }

        console.log(myString)
        return myString
    }

    minToFront() {
        if (!this.head) {
            return;
        }

        let runner = this.head
        let minimum = Infinity
    
        let firstHead = this.head
    
        // Recorremos para encontrar el valor mínimo
        while (runner) {
            if (runner.value < minimum) {
                minimum = runner.value
            }
    
            runner = runner.next
        }
        

        // Retornamos null si minimum y head tienen el mismo valor
        if (firstHead.value === minimum) return null


        // Volvemos a hacer el recorrido hasta encontrar el mínimo
        let runner2 = firstHead
        let back = null
    
        while (runner2) {
            if (runner2.value === minimum) {
                break
            }
    
            back = runner2
            runner2 = runner2.next
        }
    
        back.next = runner2.next
        runner2.next = firstHead
        this.head = runner2
    }

    maxToBack(){
        let runner = this.head
        let max = -Infinity
        let lastNode = null
        let firstHead = this.head

        // Recorremos para encontrar el valor máximo y el último nodo
        while(runner){
            if(runner.value > max){
                max = runner.value
            }

            if(runner.next === null){
                lastNode = runner
            }

            runner = runner.next
        }

        // Si max y lastNode.value son iguales retornamos null
        if(lastNode.value === max) return null


        // Volmemos a buscar el valor máximo
        let newRunner = firstHead
        let back = null

        while(newRunner.value !== max){
            back = newRunner
            newRunner = newRunner.next
        }

        back.next = newRunner.next
        newRunner.next = null
        lastNode.next = newRunner
    }

}

let ll = new SLL

ll.addFront(60)
ll.addFront(50)
ll.addFront(90)
ll.addFront(10)
ll.addFront(40)
ll.addFront(30)
ll.addFront(20)


ll.minToFront()
ll.maxToBack()
ll.display()




