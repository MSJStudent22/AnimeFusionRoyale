class Team{

    constructor(name) {
        this.name = name;
        this.selected = null;
        this.characters = {};
        this.offense = null;
        this.defense = null;
    }

    addCharacter(character){
       let name  = character.getName();
       this.characters[name] = character;

       if(this.selected === null){
           this.selected = character;
       }
    }

    removeCharacter(characterName){
        delete this.characters[character]
    }
    selectLead(character){
        this.selected = this.characters[character];
    }

    fusionAttack(){
        let temp_characters  = Object.keys(this.characters);
        console.log(temp_characters);
        let offense = 0;

        for (let x=0; x<temp_characters.length;x++){

            offense += (this.characters[temp_characters[x]].getOffense()* this.characters[temp_characters[x]].getLevel());

        }
        return offense;
    }

    fusionAvoid(){
        let temp_characters  = Object.keys(this.characters);
        console.log(temp_characters);
        let speed = 0;

        for (let x=0; x<temp_characters.length;x++){

            speed += (this.characters[temp_characters[x]].getSpeed() * this.characters[temp_characters[x]].getLevel());

        }
        return speed;
    }

    fusionDefense(){
        let temp_characters  = Object.keys(this.characters);
        let defense = 0;

        for (let x=0; x<temp_characters.length;x++){

            defense += (this.characters[temp_characters[x]].getDefense()  * this.characters[temp_characters[x]].getLevel());
        }

        return defense;
    }

    attack(){
       return this.selected.getOffense();
    }

    defend(){
        return this.selected.getDefense();
    }

    avoidAttack(){

        return this.selected.getSpeed() * this.selected.getLevel();
    }

}

module.exports =Team;