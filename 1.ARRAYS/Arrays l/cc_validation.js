let creditNro = [5,2,2,8,2]

function isCreditCardValid(digitArr){
    let validate = digitArr;
    let lastNro = validate.pop();
        
    for(let i = validate.length - 1; i >= 0; i--){
        if(((validate.length - i) % 2) === 1){
            validate[i] *= 2;
            if(validate[i] > 9){
                validate[i] -= 9
            };
        };
    };
        
    let sum = lastNro;
    for (let i of validate){
        sum += i
    }    
    
    console.log(sum)
    
    if(sum % 10 !== 0){
        return false
    }
    else{
        return true
    }
    
};


console.log(isCreditCardValid(creditNro))