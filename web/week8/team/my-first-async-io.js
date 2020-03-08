var fs = require('fs')  
var file = process.argv[2]  
  
fs.readFile(file, function (err, data) {  
  var lines = data.toString().split('\n').length - 1  
  console.log(lines)  
})

// var fs = require('fs') // require is a special function provided by node
// var myNumber = undefined // we don't know what the number is yet since it is stored in a file

// function addOne() {
//   fs.readFile('number.txt', function doneReading(err, fileContents) {
//     myNumber = parseInt(fileContents)
//     myNumber++
//   })
// }

// addOne()

// console.log(myNumber) 