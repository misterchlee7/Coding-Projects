class Bike {
    price: number;
    max_speed: string;
    miles: number;
    constructor(price, max_speed, miles?) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    displayInfo() {
        console.log(`Bike's price: ${this.price}, Bike's max_speed: ${this.max_speed}, Bike's Total Mileage: ${this.miles}`);
    }
    ride() {
        console.log(`Riding`);
        this.miles += 10;
        return this;
    }
    reverse() {
        console.log(`Reversing`);
        if (this.miles < 5) {
            this.miles = 0;
            return this;
        }
        else {
            this.miles -= 5;
            return this;  
        }
    }
}

let bike1 = new Bike(200, "25mph");
bike1.ride().ride().ride().reverse().displayInfo()
console.log(bike1);
