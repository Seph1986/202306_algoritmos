let array = [4,2,1,3,5]

function minToFron(array){
    let arr = array
    let position = 0
    
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < arr[position]){
            position = i
        }
    }
    
    let newArray = []
    newArray.push(arr[position])
    
    for(let i = 0; i<arr.length; i++){
        if (i === position){
        }   
        else{
            newArray.push(arr[i])
        }
    }
    return newArray
}

console.log(minToFron(array))