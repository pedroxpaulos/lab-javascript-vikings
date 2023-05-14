// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
    }
    attack() {
      return this.strength;
    }
    receiveDamage(theDamage) {
      this.health -= theDamage;
    }
  }
  
  // Viking
  class Viking extends Soldier {
    constructor(name, health, strength) {
      super(health, strength);
      this.name = name;
    }
    recieveDamage(theDamage) {
      super.receiveDamage(theDamage);
  
      if (this.health > 0) {
        return `${this.name} has received ${theDamage} points of damage`;
      } else {
        return `${this.name} has died in act of combat`;
      }
    }
    battleCry() {
      return "Odin Owns You All!";
    }
  }
  
  // Saxon
  class Saxon extends Soldier {
    constructor(health, strength) {
      super(health, strength);
    }
    recieveDamage(theDamage) {
      super.receiveDamage(theDamage);
  
      if (this.health > 0) {
        return `A Saxon has received ${theDamage} points of damage`;
      } else {
        return `A Saxon has died in act of combat`;
      }
    }
  }
  
  // War
  class War {
    constructor() {
      this.vikingArmy = [];
      this.saxonArmy = [];
    }
    addViking(vikingObject) {
      this.vikingArmy.push(vikingObject);
    }
    addSaxon(saxonObject) {
      this.saxonArmy.push(saxonObject);
    }
    vikingAttack() {
      let rndmViking = Math.floor(Math.random() * (vinkingArmy.length - 1));
      let rndmSaxon = Math.floor(Math.random() * (saxonArmy.length - 1));
      saxonArmy[rndmViking].recieveDamage(saxonArmy[rndmSaxon].strength);
      this.saxonArmy.forEach(function (name, index) {
        if (this.saxonArmy[index] <= 0) {
          this.saxonArmy.splice(index, 1);
        }
        return;
      });
    }
    saxonAttack() {
      let rndmViking = Math.floor(Math.random() * (vinkingArmy.length - 1));
      let rndmSaxon = Math.floor(Math.random() * (saxonArmy.length - 1));
      vinkingArmy[rndmSoldier] -= this.vikingArmy.forEach(function (name, index) {
        if (this.saxonArmy[index] <= 0) {
          this.saxonArmy.splice(index, 1);
        }
      });
    }
  
    showStatus() {
      if (!this.vikingArmy.length && !this.saxonArmy.length) {
        return "Vikings and Saxons are still in the thick of battle.";
      } else if (!this.vikingArmy.length) {
        return "Saxons have fought for their lives and survived another day...";
      } else {
        return "Vikings have won the war of the century!";
      }
    }
  }
  