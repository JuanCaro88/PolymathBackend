const express = require('express');
const app = express();

app.use( require('./restaurant') );
app.use( require('./reservation') );
app.use( require('./user') );

module.exports = app;