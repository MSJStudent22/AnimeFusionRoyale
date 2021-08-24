class Character{

    constructor(name,offense,defense,speed,level) {
        this.name = name;
        this.offense = offense;
        this.defense = defense;
        this.speed = speed;
        this.level = level;
    }

    getName(){
        return this.name;
    }

    getOffense(){
        return this.offense;
    }

    getSpeed(){
        return this.speed;
    }

    getLevel(){
        return this.level;
    }


    getDefense(){
        return this.defense;
    }

    setName(name){
        this.name = name;
    }

    setOffense(offense){
        this.offense = offense
    }

    setLevel(exp){
        this.experience = exp;
    }
    setDefense(defense){
        this.defense = defense;
    }

    toJson(){
        return {
            "name":this.name,
            "offense":this.offense,
            "defense":this.defense,
            "characterType":this.characterType,
            "description":this.description,
            "backstory":this.backstory

        }
    }

}

module.exports =Character;