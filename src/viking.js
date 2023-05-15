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
  receiveDamage(theDamage) {
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
  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);

    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
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
    let rndmVikingPosi = Math.floor(Math.random() * this.vikingArmy.length);
    let rndmViking = this.vikingArmy[rndmVikingPosi];
    let rndmSaxonPosi = Math.floor(Math.random() * this.saxonArmy.length);
    let rndmSaxon = this.saxonArmy[rndmSaxonPosi];
    let finalHealth = rndmSaxon.receiveDamage(rndmViking.attack());
    if (rndmSaxon.health <=0) {
      this.saxonArmy.splice(rndmSaxonPosi, 1);
    }

    return finalHealth;
  }

  saxonAttack() {
    let rndmVikingPosi = Math.floor(Math.random() * this.vikingArmy.length);
    let rndmViking = this.vikingArmy[rndmVikingPosi];
    let rndmSaxonPosi = Math.floor(Math.random() * this.saxonArmy.length);
    let rndmSaxon = this.saxonArmy[rndmSaxonPosi];
    let finalHealth = rndmViking.receiveDamage(rndmSaxon.attack());
    if (rndmViking.health <= 0) {
    this.vikingArmy.splice(rndmVikingPosi, 1);
  }

   return finalHealth;
}

  showStatus() {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
  }
}
