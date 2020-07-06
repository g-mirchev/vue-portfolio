/** Configuration */
require('dotenv').config();
require('./express/config/db');

/** Imports */
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./express/router/router');

/** Create new express application */
const app = express();

/** Middleware */
app.use(bodyParser.json());
app.use('/api', router);

/** Launch server */
const server = app.listen(process.env.PORT, () => {
    const port = server.address().port;
    console.log('App now running on port ', port);
});
