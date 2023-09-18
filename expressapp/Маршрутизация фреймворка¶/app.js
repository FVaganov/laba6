const express = require('express');
const app = express();
//К примеру, символ ? указывает, что предыдущий символ может встречаться 1 раз или отсутствовать. И мы можем определить следующую функцию:
app.get('/bo?k', function (request, response) {
    response.send(request.url);
});
//Символ + указывает, что предыдущий символ может встречаться 1 и более раз:
app.get('/bo+k', function (request, response) {
    response.send(request.url);
});
//Символ звездочка * указывает, что на месте данного символа может находиться любое количество символов:
app.get('/bo*k', function (request, response) {
    response.send(request.url);
});
//Скобки () позволяют оформить группу символов, которые могут встречаться в запросе:
app.get('/book(.html)?', function (request, response) {
    response.send(request.url);
});
//Также вместо определения маршрутов мы можем указывать регулярные выражения. Например, необходимо перехватить запрос ко всем файлам html или всем путям, которые в конце имеют .html:
app.get(/.*(\.)html$/, function (request, response) {
    response.send(request.url);
});
