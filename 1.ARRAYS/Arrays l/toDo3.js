// Quitar negativos
let myArray = [-1,1,2,-4,-3,3,-3,-5,4,5]

function remNegatives(arr){
    
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            for(let j = i; j < arr.length; j++){
                arr[j] = arr[j+1]
            }
            arr.pop()
            i --
        }
    }
    
    return arr
}

console.log(remNegatives(myArray))


// Penúltimo
let myArray2 = [42, true, 4, "Kate", 7]
 
function penultimo(arr){
    if (arr.length > 1){
        return arr[arr.length-2]
    }
    else{
        return null
    }
}

console.log(penultimo(myArray2))


// El segúndo mas grande
let myArray3 = [42,1,4,Math.PI,7]

function secBiggest(arr){
    if (arr.length < 2){
        return null
    }
    
    let biggest = -Infinity
    let almost = -Infinity
    
    for(let i of arr){
        if(i > biggest){
            biggest = i
        }
    }
    for(let i of arr){
        if (i < biggest && i > almost){
            almost = i
        }
    }
        
    return almost
}
console.log(secBiggest(myArray3))


// N hasta el último
let myArray4 = [5,2,3,6,4,9,7]

function tillEnd (arr, num){
    myElement = null
    
    if (!(arr.length + 1 <= num) && !(num === 0)){
        myElement = arr[arr.length - num]
    }
    
    return myElement
}

console.log(tillEnd(myArray4,3))


// Altura del horizonte
let myArray5 = [-1,1,1,7,3]

function horizon(arr){
    
    let actualView = 0
    let myView = []
    
    for (let i of arr){
        if(i > actualView){
            actualView = i
            myView.push(i)
        }
    }
    
    return myView
}

console.log(horizon(myArray5))