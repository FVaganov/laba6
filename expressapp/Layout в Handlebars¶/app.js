const express = require('express');
const expressHbs = require('express-handlebars');
const hbs = require('hbs');
const app = express();

// устанавливаем настройки для файлов layout
app.engine(
    'hbs',
    expressHbs.engine({
        layoutsDir: 'views/layouts',
        defaultLayout: 'layout',
        extname: 'hbs',
    })
);
// app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use('/contact', function (request, response) {
    response.render('contact', {
        title: 'Мои контакты',
        emailsVisible: true,
        emails: ['gavgav@mycorp.com', 'mioaw@mycorp.com'],
        phone: '+1234567890',
    });
});

app.use('/', function (request, response) {
    response.render('home.hbs');
});
app.listen(3000);
