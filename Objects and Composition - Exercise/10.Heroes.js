function solve() {

    class Character {
        constructor(name, health) {
            this.name = name;
            this.health = health;
        }
    }

    class Mage extends Character {
        constructor(name) {
            super(name, 100);
            this.mana = 100;
        }
        cast(spell) {
            this.mana--;
            console.log(`${this.name} cast ${spell}`);
        }
    }

    class Fighter extends Character {
        constructor(name) {
            super(name, 100);
            this.stamina = 100;
        }
        fight() {
            this.stamina--;
            console.log(`${this.name} slashes at the foe!`);
        }
    }

    return {
        mage: (name) => new Mage(name),
        fighter: (name) => new Fighter(name)
    };

}
