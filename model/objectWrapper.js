
module.exports = class Test{
    constructor(name){
        this.name = name
    }

    sayHi(){
        return `hi from ${this.name}`
    }
}