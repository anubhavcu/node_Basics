const path = require('path');

//Base File Name 
console.log(path.basename(__filename))

//Directory name 
console.log(path.dirname(__filename));

//File Extension
console.log(path.extname(__filename));

//create a path object 
//const file = path.parse(__filename);
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

//Concatenate Paths 
const newPath = path.join(__dirname, 'test', 'hello.html');
console.log(newPath);

//path delimiter base on the current os environment
const platSpec = path.delimiter;
console.log(platSpec);

//get the parent folder 
const parentDir = path.dirname(__dirname);
console.log(parentDir);