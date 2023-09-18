const express = require('express');
const app = express();

app.use('/about', function (request, response) {
    response.send('О сайте');
});

app.use('/products/create', function (request, response) {
    response.send('Добавление товара');
});
app.use('/products/:id', function (request, response) {
    response.send(`Товар ${request.params.id}`);
});
app.use('/products/', function (request, response) {
    response.send('Список товаров');
});

app.use('/', function (request, response) {
    response.send('Главная страница');
});
app.listen(3000);
