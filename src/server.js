/*
Created on: 18/08/2021

@Author: Juan Pablo Caro
*/

// Middlewares
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./api/models/index');

app = express();
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(( request, response, next ) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    response.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Request-Method, Access-Control-Request-Headers, Origin, X-Requested-With, Content-Type, Accept, Methods");
    next();
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/uploads/', express.static(__dirname + '/api/uploads/'));

app.use( require('./api/routes/index') );

db.sequelize.sync().then(( request ) => {
    app.listen(app.get('port'), () => {
        console.log('Server is listening on port', app.get('port'))
    });
});