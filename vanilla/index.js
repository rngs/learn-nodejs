var http = require('http');
http.createServer((_, res) => {
  res.write("Hello world!\n");
  res.end();
}).listen(8080);