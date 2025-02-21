// const Tom = {
//     name: 'Tom',
//     hp: 1000,
//     atk: 50,
//     defense: 5,
//     attack(target){
//         const damge = Math.max(this.atk-target.defense,0);
//         target.hp -= damge
//         console.log(`${this.name} đánh ${target.name}, ${target.name}còn ${target.hp}máu`)
//     },
//     isALive(){
//         return this.hp>0;
//     }
// }

// const Jerry = {
//     name: 'Jerry',
//     hp: 500,
//     atk: 20,
//     defense: 20,
//     attack(target){
//         const damge = Math.max(this.atk-target.defense,0);
//         target.hp -= damge
//         console.log(`${this.name} đánh ${target.name}, ${target.name}còn ${target.hp}máu`)
//     },
//     isALive(){
//         return this.hp>0;
//     },
// }

// let round = 1;
// while(Tom.isALive()&&Jerry.isALive()){
//     console.log(`Round: ${round}`);
//     if(round %2 === 0){
//         Tom.attack(Jerry);
//     }
//     else{
//         Jerry.attack(Tom);
//     }
//     round++;
// }
// if(Tom.isALive()){
//     console.log(`${Tom.name} win!`);
// }
// else{
//     console.log(`${Jerry.name} win!`)
// }

function Character(name, hp, atk, defense, speed, counterRate) {
  this.name = name;
  this.hp = hp;
  this.atk = atk;
  this.defense = defense;
  this.speed = speed;
  this.counterRate = counterRate;
  this.attack = function (target) {
    const damage = Math.max(this.atk - target.defense, 0);
    target.hp -= damage;
    console.log(
      `${this.name} tấn công ${target.name}, gây ra ${damage} sát thương. ${target.name} còn lại ${target.hp} máu.`
    );
    //Xử lý tình huống phản công;
    if (target.isAlive() && Math.random() < target.counterRate) {
      const counterDame = Math.max(target.atk - this.defense, 0);
      this.hp -= counterDame;
      console.log(
        `${target.name} Phang lại  ${this.name}, gây ra ${counterDame} sát thương. ${this.name} còn lại ${this.hp} máu.`
      );
    }
  };
  this.isAlive = function () {
    return this.hp > 0;
  };
}

const Tom = new Character('Tom', 1000, 50, 5, 30, 0.5);
const Jerry = new Character('Jerry', 500, 20, 20, 30, 0.2);
console.log(Tom, Jerry);

let round = 1;
while (Tom.isAlive() && Jerry.isAlive()) {
  console.log(`Round: ${round}`);
  if (Tom.speed > Jerry.speed) {
    battle(Tom, Jerry);
  } else if (Tom.speed < Jerry.speed) {
    battle(Jerry, Tom);
  } else {
    if (Math.random() < 0.5) {
      battle(Tom, Jerry);
    } else {
      battle(Jerry, Tom);
    }
  }
  round++;
}

if (Tom.isAlive > 0) {
  console.log(`${Tom.name} win!`);
} else console.log(`${Jerry.name} win!`);

function battle(Char1, char2) {
  Char1.attack(char2);
  if (char2.isAlive() && Char1.isAlive()) {
    char2.attack(Char1);
  }
}
