exports.readFile = jest.fn().mockImplementation(params => {
    if(params == 1){
        return "jest"
    }
    return "jest2"
})