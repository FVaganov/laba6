const express = require('express');

const app = express();
app.get('/', function (request, response) {
    response.send('<h1>Главная страница</h1>');
});
app.get('/about', function (request, response) {
    response.send('<h1>О сайте</h1>');
});
app.get('/contact', function (request, response) {
    response.send('<h1>Контакты</h1>');
});
app.listen(3000);
