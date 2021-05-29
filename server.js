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

// directs all eligible reqeusts to the static folder on our machine (eligible = ending in .js)
// instead of throwing a 404 when a request cant be processed in the static folder, it will invoke next() and continue through the rest of this server script
app.use(express.static('static'));

// route handler for the route index.html file
app.get('/', (req, res) => {
  console.log(path.resolve(__dirname, 'index.html'));
  // leverage path.resolve to create an absolute path that will send the index.html file to the client regardless of the machine running this code
  res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.use('/toDo', toDoRouter);
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

// error handler for 404
app.use((req, res) => {
  // this code should catch any requests that do not have a corresponding endpoint in the above script
})

// global error handler - will only run when an err was detected in this code (i.e. if(err) evaluated to truthy)

// make the server listen
app.listen(3000, () => console.log('server listening on port 3000'));