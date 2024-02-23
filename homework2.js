var age = prompt("Please enter your age")
if (isNaN(age)){
    console.log("Please enter a numeric value!")
}
else if (age < 1){
    console.log("Please enter a POSITIVE numeric value!")
}
else if (age % 10 === 1 && age != 11 && age != 111){
    console.log("Your age: " + age + " рiк")
}
else if (age > 122){
    console.log("You are a liar, lucky or dead.")
}
else if (age % 10 > 1 && age % 10 < 5 && age != 12 && age != 13 && age !=14 ){
    console.log("Your age: " + age + " роки")
}
else {
    console.log("Your age: " + age + " рокiв")
}