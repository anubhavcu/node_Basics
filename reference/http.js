const http = require('http');

// // very basic example
// const server = http.createServer();

// server.on('connection',(socket) =>console.log('New Connection ... '))

// server.listen(5000);
// console.log('listening on port 5000');

// Create server object
http
  .createServer((req, res) => {
    // Write response
    res.write('Hello World');
    res.end();
  })
  .listen(5000, () => console.log('Server running...'));


// //more example
// const server = http.createServer((req,res) =>{
//   if(req.url === '/'){
//     res.write('hello world');
//     res.end();
//   }
//   if(req.url === '/path'){
//     res.end('inside path ... ')
//   }
// });

// server.listen(3000, () => console.log('listening on port 3000'));
