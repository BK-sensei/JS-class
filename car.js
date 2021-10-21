// Créer un class Car avec 2 propriétés de base:
class Car {
    constructor (brand, speed){
        this.brand = brand
        this.speed = speed
    }


    // Ajouter 3 méthodes à la classe Car:
    accelerate(numUp){
        this.speed = this.speed + numUp
    }
    brake(numDown){
        this.speed = this.speed - numDown
    }
    describe(string){
        console.log(`${this.brand} is running at ${this.speed} km/h`)
    }
    
}

// Créer une variable ford : "accelerate" avec une vitesse de 50 km/h et "brake" avec une vitesse de 25 km/h
let ford = new Car ("Ford", 0)
    ford.accelerate(50)
    ford.brake(25)
    console.log(ford);
    ford.describe (`${ford.brand} is running at ${ford.speed} km/h`)

// Faites la même chose avec une nouvelle voiture
let tesla = new Car ("Tesla", 0)
    tesla.accelerate(190)
    tesla.brake(40)
    console.log(tesla);
    tesla.describe (`${tesla.brand} is running at ${tesla.speed} km/h`)

