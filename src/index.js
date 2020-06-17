const express = require('express');
const { request, response } = require('express');

const app = express();

app.get('/',(request,response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

app.listen(3333);