//Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan'); //morgan is a logging framework, used for debugging
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

//DB Setup
mongoose.connect('mongodb://localhost:auth/auth');

//App Setup
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));
router(app);


//Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
