// Promedio
let myArray = [1,2,3,4,5]

function prom(arr){
    if(arr < 1) return undefined
    
    sum = 0;
    
    for(let i of arr){
        sum += i
    }    
    return sum / arr.length
}

console.log(prom(myArray))


// Punto de equilibrio
let myArray2 = [1,2,3,4,10] 

function balance(arr){
    
    // Recorrer el array
    for(let i = 0; i < arr.length -1 ; i++){
        
       let total_front = 0
       let total_back = 0
       
        // Recorrer los elementos delante del indice actual
        for(let j = i + 1; j < arr.length; j++){
            total_front += arr[j]
        }
        
        // Recorrer los elementos detras del indice actual
        for(let x = i; x !== -1; x--){
            total_back += arr[x]
        }  
        
        if (total_front === total_back){
            console.log("BALANCED")
            return true
        }
    }
    console.log("UNBALANCED")
    return false
} 

balance(myArray2)


// Índice de equilibrio
let myArray3 = [-2,5,7,0,3]

function balance(arr){
    let count = 0
    // Recorrer el array
    for(let i = 1; i < arr.length -1 ; i++){
        let total_front = 0
        let total_back = 0
        
        // Suma indice para delante
        for(let j = i + 1; j < arr.length; j++){
            total_front += arr[j]
        }
        
        // Suma indicie para atras
        for(let x = i - 1; x !== -1; x --){
            total_back += arr[x]
        }
        
        count += 1
        if(total_front === total_back){
            console.log("BALANCED")
            return count
        }
    }
    console.log("UNBALANCED")
    return -1
} 

balance(myArray3)