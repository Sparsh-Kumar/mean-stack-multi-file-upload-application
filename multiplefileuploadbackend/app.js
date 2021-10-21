
require ('dotenv').config ();
const express = require ('express');
const port = process.env.PORT || 8000;
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const path = require ('path');
const helmet = require ('helmet');
const xss = require ('xss-clean');

const { Router } = require (path.resolve (__dirname, 'Router', 'Router'));

mongoose.Promise = global.Promise;
mongoose.connect (process.env.MONGODB_URL).then (() => {
    console.log (`Connected: ${process.env.MONGODB_URL}`);
}).catch ((error) => {
    console.log (`Error: ${error.message}`);
})

const app = express ();
app.use (helmet ());
app.use (cors ());
app.use (xss ());
app.use (bodyParser.json ({ limit: '100kb' }));

app.use ('/api', Router);

app.listen (port, () => {
    console.log (`http://localhost:${port}`);
})