require('dotenv-safe').load()
require('./config/mongodb.test.js').runTests()
require('./repository/repository.test.js').runTests()
require('./server/server.test.js').runTests()