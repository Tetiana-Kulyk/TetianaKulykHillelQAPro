//way 1
function triangle(height, symbol){
    let result = ''
    for (let i = 1; i <= height; i++){
        for (let j = 1; j <= i; j++){
            result += symbol
        }
        result += '\n'
    }
    return result
}
console.log(triangle(5,'*'))

//way 2
function triangle2(height, symbol){
    let result = ''
    let i = 1
    while (i <= height) {
        let j = 1
        while (j <= i) {
            result += symbol
            j++
        }
        result += '\n'
        i++
    }
    return result
}
console.log(triangle2(5,'*'))