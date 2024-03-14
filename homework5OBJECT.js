var pet = {
    type: "Dog",
    name: "Oliver",
    breed: "Yorkshire terrier", 
    weight: 2
}

getInfo = function(){
    for (let key in pet){
        console.log(`${key}: ${pet[key]}`)
    }
}

console.log(pet.getInfo())

pet.color = "Silver"

//console.log(pet.getInfo())