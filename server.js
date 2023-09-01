const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((request, responseponse) => {
  const parsedUrl = url.parse(request.url, true);
  let filePath = 'index.html';
  if (parsedUrl.pathname.includes('documentation')) {
    filePath = 'documentation.html';
  } else {
    filePath = 'index.html';
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/plain');
      response.end('File not found\n');
    } else {
      response.statusCode = 200;
      response.setHeader ('Content-Type', 'text/html');
      response.end(data);  
    }
  });
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});