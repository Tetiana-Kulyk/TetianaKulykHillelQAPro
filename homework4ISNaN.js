//method Number.isNaN
function MyIsNaNMethod(value){
    if (value != value){
        return true
    }
    else{
        return false
    }
}

console.log(MyIsNaNMethod(undefined))
console.log(Number.isNaN(undefined))

//function isNaN
function MyIsNaNFunction(value){
    if (+value != +value){
        return true
    }
    else{
        return false
    }
}

console.log(MyIsNaNFunction(undefined))
console.log(isNaN(undefined))