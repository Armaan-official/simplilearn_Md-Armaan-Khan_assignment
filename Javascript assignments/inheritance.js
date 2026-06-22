class Vehicle{
    #capacity

    constructor(name, capacity){
        this.name = name;
        this.#capacity = capacity;
    }

    get getcapacity(){
        return this.#capacity;
    }

    startEngine(){
        return `${this.name} can start and has capacity of ${this.#capacity}`
    }
    stopEngine(){
        return `${this.name} can stop and has capacity of ${this.#capacity}`
    }
    run(){
        return `${this.name} can run on manual mode`
    }
    static brake(){
        return `We are calling static method`
    }

    callCapacity(){
        return `${this.name} has ${this.#capacity} capacity`
    }
}


let twoWheeler = new Vehicle('2-W', '3000cc');
let threeWheeler = new Vehicle('3-W', '6000cc');

// printing all the variables
console.log(`Vehicle name: ${twoWheeler.name}`)
console.log(`Vehicle capacity: ${twoWheeler.getcapacity}` + '\n')
console.log(`Vehicle name: ${threeWheeler.name}`)
console.log(`Vehicle capacity: ${threeWheeler.getcapacity}` + '\n')

// printing the methods
console.log(twoWheeler.startEngine())
console.log(twoWheeler.stopEngine())
console.log(twoWheeler.run())
console.log(Vehicle.brake())
console.log(twoWheeler.callCapacity() + '\n')

console.log(threeWheeler.startEngine())
console.log(threeWheeler.stopEngine())
console.log(threeWheeler.run())
console.log(Vehicle.brake())
console.log(threeWheeler.callCapacity()+ '\n')


// passing the variables in the parent class
class newVehicle extends Vehicle{
    constructor(name, capacity,){
        super(name, capacity);
    }
}

// printing the variables of the new vehicle
let fourWheeler = new newVehicle('4-W', '8000cc');
console.log(`Name of the new vehicle: ${fourWheeler.name}`)
console.log(`Capacity of the new vehicle: ${fourWheeler.getcapacity}`)

