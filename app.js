const express = require('express');

const app = express('');

app.get('/', function (req, res) { res.send('Hola Luis'); });

app.listen(3000);