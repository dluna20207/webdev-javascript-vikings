// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return (`${this.name} has received ${damage} points of damage`)
        } else if (this.health <= 0) {
            return (`${this.name} has died in act of combat`)
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return (`A Saxon has received ${damage} points of damage`)
        } else if (this.health <= 0) {
            return (`A Saxon has died in combat`)
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        let randomSaxon = Math.floor(Math.random(this.saxonArmy.length) * 1);
        let randomViking = Math.floor(Math.random(this.vikingArmy.length) * 1);

        let finalString = String(this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength));
        this.saxonArmy = this.saxonArmy.filter(saxon => {
            return saxon.health > 0
        });
        return finalString;
    }

    saxonAttack() {
        let randomSaxon = Math.floor(Math.random(this.saxonArmy.length) * 1);
        let randomViking = Math.floor(Math.random(this.vikingArmy.length) * 1);

        let finalString = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
        this.vikingArmy = this.vikingArmy.filter(viking => {
            return viking.health > 0
        });
        return finalString;
    }

    showStatus(){
        if(this.saxonArmy.length == 0){
            return "Vikings have won the war of the century!"
        }
        else if(this.vikingArmy.length == 0){
            return "Saxons have fought for their lives and survive another day..."
        }
        else if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}