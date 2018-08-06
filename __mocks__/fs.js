const fs = require("mz/fs")

jest.mock("mz/fs");

fs.readFile.mockResolvedValue("jest");