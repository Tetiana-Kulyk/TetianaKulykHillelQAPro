var myArray = ["мир", "дружба", "жвачка"]
function myBlend(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
  };

console.log(myBlend(myArray))

