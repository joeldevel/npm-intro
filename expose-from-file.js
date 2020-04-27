//  How to export from this file to make this
//  available to other files

// create an object literal
const moto = {
  brand:'Yamoha',
  model:'RunnerX'
}
//export the module
module.exports = moto;
// ..Then in other file it must be imported
// like this:
//           const moto = require('./moto');
//  if both files are in the same directory
