exports.mochaGlobalSetup = () => {
  global.chai = require('chai')
  global.expect = global.chai.expect
}

// exports.mochaGlobalTeardown = () => {
//}
