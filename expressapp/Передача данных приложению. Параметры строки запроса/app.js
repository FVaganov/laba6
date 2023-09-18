const express = require('express');

const app = express();

app.use('/about', function (request, response) {
    console.log(request.query);
    let id = request.query.user.id;
    let name = request.query.user.name;

    response.send(
        '<h3>id:' + id + '<br>name: ' + name + '</h3>'
    );
});

app.listen(3000);
