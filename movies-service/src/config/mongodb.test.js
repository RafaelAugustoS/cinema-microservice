const test = require('tape')
const mongodb = require('./mongodb')

function runTests(){
    // Unit tests
    test('MongoDB Connect', (t) => {
        mongodb.connect((err, db) => {
            t.assert(!err && db, "Connection succeed")
            t.end()
        })
    })

    test('MongoDB Disconnect', (t) => {
        t.assert(mongodb.disconnect(), "Disconnected successfuly")
        t.end()
    })
}

module.exports = { runTests }