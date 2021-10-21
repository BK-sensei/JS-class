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
        console.log(`${this.brand} running at ${this.speed} km/h`)
    }
    
}

let ford = new Car ("trottinette", 0)
    ford.accelerate(50)
    ford.brake(25)
    console.log(ford);

let elonMusk = new Car ("tesla", 0)
    elonMusk.accelerate(190)
    elonMusk.brake(40)
    console.log(elonMusk);

