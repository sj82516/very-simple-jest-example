const fs = require('mz/fs');

exports.readFile = async function(params){
    return fs.readFile("./test.txt");
}