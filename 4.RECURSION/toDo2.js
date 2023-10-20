// RECURSIVE FIBONACCI
function rFib(num){
    let number = Math.trunc(num)
    
    // 1.BASE CASE
    if(number < 2){
        return number
    }
     // 2.RECURSIVE CALL
    else{
       return rFib(number -1) + rFib(number -2)
    }
}
 
console.log(rFib(8))


// RECURSIVE TRIBONACCI
function rTri(num){
    let number = Math.trunc(num)
    if (number < 0) return null
    
    if(number < 2){
        return 0
    }
    if(number === 2){
        return 1
    }
    else{
        return rTri(number -3) + rTri(number -2) + rTri(number -1)
    }
    
}

console.log(rTri(6))


// PAGING DR.ACKERMANN// PAGING DR. ACKERMANN

function ack(num1,num2){
    if (num1 < 0 || num2 <0) return null
    
    if(num1 === 0){
        return num2 + 1
    }
    if(num1 > 0 && num2 === 0){
        return ack(num1-1, 1)
    }
    else{
        return ack(num1-1,ack(num1,num2-1))
    }
}

console.log(ack(1,2))


// MISS ZIBONACCI
