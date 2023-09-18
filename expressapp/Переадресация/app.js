const express = require('express');
const app = express();

app.use('/home/foo/bar', function (request, response) {
    response.redirect('./about');
});
app.use('/home/foo/bar', function (request, response) {
    response.redirect(301, '/about');
});
app.listen(3000);
