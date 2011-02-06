var common = require('../common');
var assert = require('assert');
var path = require('path');
var fs = require('fs');
//check uid
//Assert that it is greater than zero
console.log('Current uid: ' + process.getuid());

assert(process.getuid() > 0);

//Return true/false to return test validity