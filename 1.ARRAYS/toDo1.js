let myArray = [1,2,3,4,5,6,7,8,9]

// Push al frente
function insertar(num, array){
    let newArray = [num]

    for (let i = 0; i < array.length; i++){
        newArray.push(array[i])
    }
  
  return newArray
}

let myNewArray = insertar(0,myArray)
console.log(myNewArray)


// Pop al frente
function popFrente(array){
    
    let newArray = [array.pop()]
    for (let i = 0; i < array.length; i++){
      newArray.push(array[i])
    }
    return newArray
}

let arrayPop = popFrente(myArray)
console.log(arrayPop)


// Insertar en
function insertar(array,index,data){
  
    let newArray = []
    
    for (let i = 0; i < array.length; i++){
      if(i === index){
        newArray.push(data)
      }
      newArray.push(array[i])
    }
    
    return newArray
  }
  
  let insertedData = insertar(myArray, 2, "probando")
  console.log(insertedData)


//Eliminar en
function remove(array,index){
  
    let newArray = []
    
    for (let i = 0; i < array.length; i++){
     if(i !== index){
       newArray.push(array[i])
     }
    }
   return newArray 
}
  
  let removedData = remove(myArray, 0)
  console.log(removedData)


//Pares de intercambio
function changePosition(array){
    new_array = []
    for(let i = 0; i < array.length - 1; i += 2){
        temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
    };
    return array;
};


changePosition(myArray)


//Eliminar duplicados
let repitedArray = [1, 2, 1, 2, 3, 4, 5, 6, 6, 6, 7, 8]; 

function deleteDuplicates(array){
    const newArray = [];

    function check(data) {
        for (let i = 0; i < newArray.length; i++){
            if (data === newArray[i]){
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < array.length; i++){
        if (check(array[i])){
            newArray.push(array[i]);
        }
    }

    return newArray;
}

console.log(deleteDuplicates(repitedArray));