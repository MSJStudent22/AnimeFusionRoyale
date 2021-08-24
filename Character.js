class Character{

    constructor(name,offense,defense,characterType,description,backstory) {
        this.name = name;
        this.offense = offense;
        this.defense = defense;
        this.characterType = characterType;
        this.description = description;
        this.backstory  = backstory;
    }

    getName(){
        return this.name;
    }

    getOffense(){
        return this.offense;
    }

    getDefense(){
        return this.defense;
    }

    getDescription(){
        return this.description;
    }

    getCharacterType (){
        return this.characterType;
    }

    getBackstory (){
        return this.backstory;
    }

    setName(name){
        this.name = name;
    }

    setOffense(offense){
         this.offense = offense
    }
    setDefense(defense){
        this.defense = defense;
    }

    setCharacterType (characterType){
     this.characterType = characterType;
    }
    setBackstory (backstory){
        this.backstory = backstory;
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