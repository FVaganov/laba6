const express = require('express');
const app = express();

app.get('/book/:pageName.:pageExt', function (
    request,
    response
) {
    let pageName = request.params['pageName'];
    let pageExt = request.params['pageExt'];
    response.send(
        `Запрошенный файл: ${pageName}.${pageExt}`
    );
});

app.listen(3000);
