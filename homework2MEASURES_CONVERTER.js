let measure = 'km'
let quantity = 1
switch (measure) {
    case 'km':
        console.log(quantity + measure + " is " + quantity * 1000 + "m");
        break
    case 'h':
        console.log(quantity + measure + " is " + quantity * 60 + "sec");
        break
    case 'kg':
        console.log(quantity + measure + " is " + quantity * 1000 + "g");
        break
    default:
        console.log("Unfortunately, this measure is not currently supported.")
}