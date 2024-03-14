var services = {
	"стрижка": "60 грн",
	"гоління": "80 грн",
	"Миття голови": "100 грн",
    price: function() {
        let total = 0;
        for (let service in this) {
            if (typeof this[service] === 'string' && this[service].endsWith(' грн')) {
                total += parseFloat(this[service]); 
            }
        }
        return `Total services cost: ${total} грн`;
    },
    minPrice: function() {
        let minValue = Infinity;
        for (let service in this) {
            if (typeof this[service] === 'string' && this[service].endsWith(' грн')) {
                let price = parseFloat(this[service]);
                if (price < minValue) {
                    minValue = price; 
                }
            }
        }
        return `Minimum service price: ${minValue}  грн`;
    },
    maxPrice: function() {
        let maxValue = -Infinity;
        for (let service in this) {
            if (typeof this[service] === 'string' && this[service].endsWith(' грн')) {
                let price = parseFloat(this[service]);
                if (price > maxValue) {
                    maxValue = price; 
                }
            }
        }
        return `Maximum service price: ${maxValue}  грн`;
    }
};

services['Зробити домашку'] = "200 грн";

console.log(services.price()); 
console.log(services.minPrice()); 
console.log(services.maxPrice()); 