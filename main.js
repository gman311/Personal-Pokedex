var myimgobj = document.images["giratina", "dialga"];

function changeImage()
{
document.images["giratina", "dialga"].src= "giratina.png", "dialga.png"
return true;
}
console.log(myimgobj);

class Pokemon {
  constructor (pokeImage, name, hp, attack, defense, ability) {
    this.pokeImage = pokeImage;
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.ability = ability;
    this.container = document.querySelector('#pokeStats');
    this.element = document.createElement("div");
    this.element.className = 'poke_items';
  }

  display () {

  let pokeImage = document.getElementById('imgPlaceHolder');
  pokeImage.src = this.pokeImage;
  this.element.appendChild(pokeImage);
  this.container.appendChild(this.element);

  let name = document.createElement('h2');
  name.innerHTML = "Name: " + this.name;
  this.element.appendChild(name);
  this.container.appendChild(this.element);

  let hp = document.createElement('h3');
  hp.innerHTML = "HP: " + this.hp;
  this.element.appendChild(hp);
  this.container.appendChild(this.element);

  let attack = document.createElement('h3');
  attack.innerHTML = "Attack: " + this.attack;
  this.element.appendChild(attack);
  this.container.appendChild(this.element);

  let defense = document.createElement('h3');
  defense.innerHTML = "Defense: " + this.defense;
  this.element.appendChild(defense);
  this.container.appendChild(this.element);

  let ability = document.createElement('h3');
  ability.innerHTML = "Ability: " + this.ability;
  this.element.appendChild(ability);
  this.container.appendChild(this.element);

}
}

class Trainer {
  constructor(pokemon) {
    this.pokemon = [];
  }

  all () {
    return this.pokemon
  }

  get (name) {
    for (let i = 0; i < this.pokemon.length; i++) {
      if (name === this.pokemon.length[i].name) {
        return this.pokemon[i];
      }
    }
  }




}

function giratina(){
axios.get("http://fizal.me/pokeapi/api/v2/name/giratina.json")
  .then(function(response) {
    let giratina_img = "giratina.png";
    let giratina_name = "Giratina";
    let giratina_hp = response.data.stats[5].base_stat;
    let giratina_attack = response.data.stats[4].base_stat;
    let giratina_defense = response.data.stats[3].base_stat;

    let giratina_ability = response.data.abilities[0].ability.name;
    console.log(giratina_ability);
    for (let i = 0; i < response.data.abilities[i].ability.length; i++) {
      let result = response.data.abilities[i].ability.name;
    }


    giratina = new Pokemon(giratina_img, giratina_name, giratina_hp, giratina_attack, giratina_defense, giratina_ability,);
    giratina.display();

  })
}




function dialga(){
axios.get("http://fizal.me/pokeapi/api/v2/name/dialga.json")
  .then(function(response) {
    let dialga_image = "dialga.png";
    let dialga_name = "Dialga";
    let dialga_hp = response.data.stats[5].base_stat;
    let dialga_attack = response.data.stats[4].base_stat;
    let dialga_defense = response.data.stats[3].base_stat;

    let dialga_ability = response.data.abilities[0].ability.name;
    for (let i = 0; i < response.data.abilities[i].ability.length; i++) {
      let result = response.data.abilities[i].ability.name;

    }


    dialga = new Pokemon(dialga_image, dialga_name, dialga_hp, dialga_attack, dialga_defense, dialga_ability);
    dialga.display();


  })
}

function rayquaza(){
axios.get("http://fizal.me/pokeapi/api/v2/name/rayquaza.json")
  .then(function(response) {
    let rayquaza_image = "rayquaza.jpg";
    let rayquaza_name = "Rayquaza";
    let rayquaza_hp = response.data.stats[5].base_stat;
    let rayquaza_attack = response.data.stats[4].base_stat;
    let rayquaza_defense = response.data.stats[3].base_stat;

    let rayquaza_ability = response.data.abilities[0].ability.name;
    for (let i = 0; i < response.data.abilities[i].ability.length; i++) {
      let result = response.data.abilities[i].ability.name;
    }
    rayquaza = new Pokemon(rayquaza_image, rayquaza_name, rayquaza_hp, rayquaza_attack, rayquaza_defense, rayquaza_ability);
    rayquaza.display();



  })
}


  // Added Event Listeners for each ball icon
  let giratina_hover = document.getElementByClass('ball1');
  giratina_hover.addEventListener('mouseover', giratina);

  let dialga_hover = document.getElementByClass('ball2');
  dialga_hover.addEventListener('mouseover', dialga);

  let rayquaza_hover = document.getElementByClass('ball3');
  rayquaza_hover.addEventListener('mouseover', rayquaza);
