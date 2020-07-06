/** Configuration */
require('dotenv').config();
require('./express/config/db');

/** Imports */
const express = require('express');
const bodyParser = require('body-parser');

/** Create new express application */
const app = express();

/** Middleware */
app.use(bodyParser.json());

/** Launch server */
const server = app.listen(process.env.PORT, () => {
    const port = server.address().port;
    console.log('App now running on port ', port);
});
