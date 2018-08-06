const api = require('./util/apiWrapper');
const Obj = require('./model/objectWrapper');

exports.callAPI = async function(t){
    let content = await api.readFile(t)
    return content
}

exports.callObject = async function(){
    let obj = new Obj("jay")
    return obj.sayHi()
}