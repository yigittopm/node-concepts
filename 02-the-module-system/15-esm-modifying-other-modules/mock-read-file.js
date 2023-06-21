import fs from "fs"

const originalReadFile = null

let mockedResponse = null

function mockedReadFile(path, cb) {
    setImmediate(() => {
        cb(null, mockedResponse)
    })
}

export function mockEnable(respondWith) {
    mockedResponse = respondWith
    fs.readFile = mockedReadFile
}

export function mockDisable() {
    fs.readFile = originalReadFile
}
