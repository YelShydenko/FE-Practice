// Основанный на истории о походе героев в поисках сокровища.
// Давайте представим, что у нас есть классы Hero (герой) и Treasure (сокровище), и мы хотим создать
// экземпляры этих классов и взаимодействовать с ними.
// В этом уроке мы создаем двух героев (hero1 и hero2) и сокровище (treasure). Герои могут атаковать
// друг друга и исцелять себя, а также находить и собирать сокровище. Вся эта функциональность реализована
// с помощью методов классов Hero и Treasure
class Hero {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
  attack(target) {
    if (target.health <= 0) {
      console.log(`${this.name} von`);
      treasure.collect(this);
      document.querySelector(".modal").classList.add("modal-active");
    } else {
      if (this.health > 0) {
        console.log(`${this.name} attacked ${target.name}`);
        target.health -= parseInt(Math.random() * 5);
        console.log(`${target.name} is damaged. Health ${target.health}%`);
      }
    }
  }

  healing() {
    if (this.health > 0) {
      console.log(`${this.name} is healing`);
      this.health += parseInt(Math.random() * 5);
      console.log(`${this.name} is healed. Health ${this.health}%`);
    }
  }
}

class Treasure {
  constructor(value) {
    this.value = value;
  }
  collect(luckyHero) {
    console.log(
      `${luckyHero.name} has collected a treasure worth ${this.value} coins`
    );
  }
}

let hero1 = new Hero("Hero Felix", 100);
let hero2 = new Hero("Hero John", 100);
let treasure = new Treasure(500);

// console.log(hero1, hero2, treasure);

// treasure.collect(hero1)

document.addEventListener("keydown", function (event) {
  if (event.code === "KeyA") {
    hero1.attack(hero2);
  } else if (event.code === "KeyS") {
    hero1.healing();
  } else if (event.code === "KeyK") {
    hero2.attack(hero1);
  } else if (event.code === "KeyL") {
    hero2.healing();
  }
});
