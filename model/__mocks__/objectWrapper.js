module.exports = class MockObj{
    constructor(){
        console.log("MockObj is constructed")
    }

    sayHi(){
        console.log("MockObj sayHi is constructed")
        return "hi from jest"
    }
}