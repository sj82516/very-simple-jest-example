const index = require("./index")

jest.mock("./util/apiWrapper")
jest.mock("./model/objectWrapper")

test("mock api test", async ()=>{
    let res = await index.callAPI(1);
    expect(res).toBe("jest");
})

test("mock api test2", async ()=>{
    let res = await index.callAPI(2);
    expect(res).toBe("jest2");
})

test("mock obj test", async ()=>{
    let res = await index.callObject();
    expect(res).toBe("hi from jest");
})