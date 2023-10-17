// Reversa
let myArray = [1,2,3,4,5,6,7,8]

function reverse(array){
    
    let start = 0;
    let end = array.length -1
    
    while (start < end){
        let temp = array[start]
        array[start] = array[end]
        array[end] = temp
        
        start ++
        end --
    }
    
    return array
}

console.log(reverse(myArray))


// Girar
let myArray2 = [1,2,3,4,5]

function rotateArray(arr, shiftBy){
    
    count = 0
    
    if (shiftBy >= 0) {

        while(count < shiftBy){
            let last = arr.pop()
            let len = arr.length

            for (let i = len - 1; i >= 0; i--) {
                arr[i + 1] = arr[i];
            }

            arr[0] = last

            count ++
        }
    }
    else{
        while(count > shiftBy){
            let first = arr[0]
            let len = arr.length

            for (let i = 0; i < len - 1; i++) {
                arr[i] = arr[i +1]
            }
            
            arr[len-1] = first

            count --
        }
    }
    
    return arr
}

console.log(rotateArray(myArray2, 1))


// Rango de filtro
let myArray3 = [1,2,3,4,5,6,7,8,9]

function arrRange(arr, max, min){
    
    for(let i = 0; i < arr.length; i++){
        let largo = arr.length
        if (arr[i] < min || arr[i] > max){
            for(let j = i; j < largo; j++){
                arr[j] = arr[j+1]
            }
            arr.pop()
            i--
        }
    }
    
    return arr
}

console.log(arrRange(myArray3, 8, 4))


// Concat
let array6 = ['a','b']
let array7 = [1,2]

function unionConcat(arr1,arr2){
    
    newArray = []
    
    for(let i of arr1)
        newArray.push(i)
    
    for(let j of arr2)
        newArray.push(j)
    
    return newArray
}

console.log(unionConcat(array6,array7))