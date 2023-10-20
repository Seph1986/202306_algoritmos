// BUSQUEDA BINARIA RECURSIVA

function rBinarySearch(array, num){
    
    let myArray = array
    
    if (myArray.length === 0) return false

    // BASE CASE
    if(myArray[myArray.length -1] === num){
        return true
    } 
    // RECURSIVE CALL
    else{
        myArray.pop()
        return rBinarySearch(myArray, num)
    }
    
}

console.log(rBinarySearch([4,5,6,8,12],4))


// MAXIMO COMÚN DIVISOR
function rGCF(num1,num2){
    if(num1 === num2){
        return num1
    }
    else if(num1 > num2){
        return rGCF(num1 - num2, num2)
    }
    else{
        return rGCF(num1, num2 - num1)
    }
}

console.log(rGCF(6,12))


// --- SIN OPCIONAELS ---