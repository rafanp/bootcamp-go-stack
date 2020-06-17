const express = require('express');
const { request, response } = require('express');

const app = express();

app.get('/projects', (request,response) => {
    return response.json({ message: 'Hello'});
});

app.listen(3333, () => {
    console.log('Back-end started! :D');
});