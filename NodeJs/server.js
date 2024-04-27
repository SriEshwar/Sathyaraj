const http = require('http');
const PORT = 3000;
const filesSystem = require('fs');

const server = http.createServer((request, response) => {
    resquest.writeHead(200, { 'Content-Type': 'text/html' });
    fileSystem.readFile('index.html', (error, data) => {
        if (error) {
            response.writeHead(404);
            response.write('Page not found');
        } else {
            response.write(data);
        }
        response.end(); 
    });
});

server.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is running successfully on port ' + PORT);
    }
});