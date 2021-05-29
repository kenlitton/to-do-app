const { json } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// import model file
const db = require('./model');
const controller = require('./controller');
// invoking an instance of express 
const app = express();
// set up default to take all incoming json requests and convert into js
app.use(express.json());

// automatically parses urlencoded body content from incoming requests and place it in req.body
app.use(express.urlencoded({ extended: true }));

// need to use the router method
const toDoRouter = express.Router();

app.get('/', (req, res) => {
  console.log(path.join(__dirname, '/index.html'));
  // leverage path.resolve to create an absolute path that will send the index.html file to the client regardless of the machine running this code
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.use('/toDo', toDoRouter);

app.use('/index.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.js'))
})

// make first endpoint handler
// get request to find data
app.get('/find', controller.findToDo, (req, res) => {
  res.status(200).json(res.locals.result);
})

// handle a post request
app.post('/', controller.createToDo, (req, res) => {
  // send res.locals.result back to the client
  res.status(200).json(res.locals.result);
})

// global error handler

// make the server listen
app.listen(3000, () => console.log('server listening on port 3000'));