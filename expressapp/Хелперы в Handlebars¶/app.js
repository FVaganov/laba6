const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerHelper('getTime', function () {
    var myDate = new Date();
    var hour = myDate.getHours();
    var minute = myDate.getMinutes();
    var second = myDate.getSeconds();
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }
    return (
        'Текущее время: ' +
        hour +
        ':' +
        minute +
        ':' +
        second
    );
});

hbs.registerHelper('createStringList', function (array) {
    var result = '';
    for (var i = 0; i < array.length; i++) {
        result += '<li>' + array[i] + '</li>';
    }
    return new hbs.SafeString('<ul>' + result + '</ul>');
});

app.set('view engine', 'hbs');

app.get('/', function (request, response) {
    response.render('home.hbs', {
        fruit: ['apple', 'lemon', 'banana', 'grape'],
    });
});
app.listen(3000);
