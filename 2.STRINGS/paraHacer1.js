// Quitar espacios en blanco
let myString = "Pl ayTha tF u nkyM usi c"

function removeSpace(aString){
    
    let toArray = aString.split(" ")
    
    let noSpaces = toArray.join("")
    
    return noSpaces
}

console.log(removeSpace(myString))


// Obtener dígitos
let myString2 = "0s1a3y5w7h9a2t4? 6! 8? 0"

function justNumbers(aString){
    
    let numbers = aString.match(/\d/g)
    
    if (numbers.length === 0){
        return null
    }
    
    let joined = numbers.join("")
    let toNumber = parseInt(joined)
    
    return toNumber
    
}

console.log(justNumbers(myString2))


// Acrónimos
let myString3 = "no hay almuerzo gratis. Debes pagar por tu comida"
 
function acronym(str){
    
    let acronymToReturn = []
    
    let splited = str.split(' ')
    for (let i of splited){
        acronymToReturn.push(i[0].toUpperCase())
        let newSplit = i.split('')
        for(let i of newSplit){
            if(i === '.'){
                acronymToReturn.push('-')
            }
        }
    }
    
    let ready = acronymToReturn.join('')
    return ready
}

console.log(acronym(myString3))


// Contar no espacios
let myString4 = "Amor, me estás volviendo loca"
 
function countNoSpaces(str){
    
    splited = str.split("")
    
    count = 0
    
    for(let i of splited){
        if(i !== " "){
            count ++
        }
    }
    return count   
}

console.log(countNoSpaces(myString4))


// Quitar cadenas mas cortas
let myString5 = "Amor, me estás volviendo loca"
 
function cutString(str, num){
    
    let splited = str.split(" ")
    
    let cuted = []
    
    for(i of splited){
        if(i.length > num){
            cuted.push(i)
        }
    }
    
    toReturn = cuted.join(" ")
    
    return toReturn
    
}

console.log(cutString(myString5, 2))