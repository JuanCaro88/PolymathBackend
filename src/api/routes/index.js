const express = require('express');
const app = express();

app.use( require('./restaurant') );
app.use( require('./reservation') );

module.exports = app;