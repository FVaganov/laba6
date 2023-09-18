const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.set('views', 'templates'); // установка пути к представлениям

app.use('/contact', function (request, response) {
    response.render('contact');
});

app.listen(3000);