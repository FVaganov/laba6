const http = require('http');

http.createServer(function (request, response) {
    response.setHeader(
        'Content-Type',
        'text/html; charset=utf-8;'
    );

    if (request.url === '/') {
        response.statusCode = 302; // временная переадресация
        // на адрес localhost:3000/newpage
        response.setHeader('Location', '/newpage');
    } else if (request.url == '/newpage') {
        response.write('New address');
    } else {
        response.write('Not Found');
        response.statusCode = 404; // адрес не найден
    }
    response.end();
}).listen(3000);
