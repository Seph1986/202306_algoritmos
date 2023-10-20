// SIGMA RECURSIVO
function rSigma(num){
    
    let number = Math.floor(num)
    
    // 1.BASE CASE
    if(number <= 0){
        return 0 
    }
    // 2.RECURSIVE CALL
    else{
        return number + rSigma(number-1)    
    }
}

console.log(rSigma(5))
console.log(rSigma(2.5))
console.log(rSigma(-1))


// FACTORIAL RECURSIVO
function rFact(num){
    
    let number = Math.floor(num)
    
    // 1.BASE CASE
    if(number === 1 || number <= 0){
        return 1
    }
    // 2.RECURSIVE CALL
    else{
        return number * rFact(number-1)
    }
}

console.log(rFact(4))
console.log(rFact(6.5))
console.log(rFact(0))