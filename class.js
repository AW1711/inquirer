// class Person {
//     constructor(name, age, job) {
//         //properties here
//         this.name = name;
//         this.age = age;
//         this.job = job;
//     }
//     talks(){
//         console.log(
//             `hi, my name is ${this.name}, I am ${this.age} and i work as a ${this.job}`
//         );
//     }
// //     work() {
// //         console.log(`I am going to bake a cake, because I am a ${this.job}`)
// //     }}
// //     const george = new Person(`George`, 33, `Baker`)
// //     george.talks();
// //     george.work();


//     class Meal {
//         constructor(breakfast,lunch, dinner){
//             this.breakfast = breakfast
//             this.lunch = lunch
//             this.dinner = dinner
//         }
//         talks() {
//             console.log(
//                 `Hi, today I had ${this.breakfast} for breakfast, ${this.lunch} for lunch and ${this.dinner} for dinner`
//             )
//         }
//         fav(){
//             console.log(`My favourite meal of the day was ${this.lunch}`)
//         }
//     }
//     const person = new Meal(`Pancakes`,`Sandwiches`,`Steak`)
//     person.talks();
//     person.fav();

// class Animal {
//     constructor(name) {
//         this.name = name
//         this.health = 100
//         this.hunger = 100
//     }

//     drinks() {
//         this.health += 5
//         return this
//     }
//     eats() {
//         this.health += 5
//         this.hunger += 10
//         console.log(`${this.name}'s health is ${this.health}`)
//         return this
//     }
//     stats() {
//         return console.table({
//                 name: this.name,
//                 health: this.health
//             })
        
//     }
// }

//     class Dog extends Animal {
//         constructor(name, happy) {
//             super(name, happy);
//             this.happy = happy
//         }
        
//         playBall() {
//             this.health += 10;
//             this.hunger -= 10;
//             console.log(`${this.name} is happy`);
//             return this;
//         }
//     Walks(){
//         console.log(`Taking ${this.name} for a walk, they are ${this.happy}`);
//         this.health += 10;
//         return this; 
//     }
// }

class Tamagochi{
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.hunger = 100;
        this.strength= 50
        this.intellect = 20
    }
    drinks() {
        this.health += 5;
        return this;
    }
    eats(){
        this.health += 5;
        this.hunger += 10;
        console.log(`${this.name} health is ${this.health}`)
        return this;
    }

    stats() {
        return console.table({
                name: this.name,
                health: this.health,
                hunger:this.hunger,
                strength:this.strength,
                intellect:this.intellect
            })
        
    }
}

    class Gochi extends Tamagochi {
        constructor(name, happy) {
            super(name, happy);
            this.happy = `happy`
        }
        

        
    Runs(){
        console.log(`${this.name} runs, they are hungry! `);
        this.health += 40;
        this.hunger -=30
        return this; 
    }
}

class Tama extends Tamagochi{
    constructor(name, strength, intellect){
        super(name, strength, intellect)
        this.strength = 50
        this.intellect = 20
    }
    liftWeight(){
        this.strength+= 20
        console.log(`${this.name} lifts and their strength increased to ${this.strength}, they need protein soon!`)
        this.hunger-=60
        this.health+=50
    }
    reads(){
        this.intellect+=200
        console.log(`${this.name} reads "How to Win Friends and Influence People" - Their brain is now huge, intellect increased to ${this.intellect}`)
    }

        
    }


const tamOne = new Tamagochi(`Tamagochi`)
tamOne.drinks()
tamOne.eats()
tamOne.stats()
const tamTwo = new Gochi(`Gochi`)

tamTwo.Runs()
tamTwo.drinks()
tamTwo.stats()

const tamThree = new Tama(`Tama`)
tamThree.liftWeight()
tamThree.eats()
tamThree.reads()
tamThree.stats()