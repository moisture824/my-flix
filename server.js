const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(req.url, true);
  let filePath = 'index.html';
  if (parsedUrl.pathname.includes('documentation')) {
    filePath = 'documentation.html';
  } else {
    filePath = 'index.html';
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('File not found\n');
    } else {
      res.statusCode = 200;
      res.setHeader ('Content-Type', 'text/html');
      res.end(data);  
    }
  });
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});