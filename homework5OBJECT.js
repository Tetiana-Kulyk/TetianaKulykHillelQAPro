var pet = {
    type: "Dog",
    name: "Oliver",
    breed: "Yorkshire terrier", 
    weight: 2,
    getInfo: function() {
        for (let key in this) {
            console.log(`${key}: ${this[key]}`);
        }
    }
};

pet.getInfo();

pet.color = "Silver";
pet.getInfo(); 
