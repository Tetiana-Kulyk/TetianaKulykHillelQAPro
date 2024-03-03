//way 1
let number = 1
let sum = 0
while (number <= 100) {
    if (number % 3 != 0) {
        sum += number
        number ++
    }
    else {
        number ++
        continue
    }
}
console.log(sum)

//way 2
let number = 1
let sum = 0
for (; number <= 100; number ++) {
    if (number % 3 != 0) {
        sum += number
    }
    else {
        continue
    }
}
console.log(sum)