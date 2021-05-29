// middleware controller
// create todo method for the middleware
const Task = require('./model.js');
// all middleware will be saved here
const controller = {};

// mongoose find or something similar
controller.findToDo = (req, res, next) => {
  // req localhost:3000/:params
  // console.log(req.params);
  // destructure toDoEntry using the key toDoEntry on the object req.params
  // search the database for toDoEntry
  Task.find({})
  .then(result => {
    res.locals.result = result;
    return next();
  })
  .catch(err => {
    console.log(`There was an error trying to find this document in the database ${err}`);
    return next(err);
  });
}

// cretae a middleware to handle post requests to '/'
controller.createToDo = (req, res, next) => {
  // create a variable toDo by pulling the toDo property from the req.body sending a request to the database
  console.log(req.body);

  const { toDo } = req.body;
  // post the todo to the database. use the create method on mongoose
  Task.create({task: toDo})
  .then(result => {
    res.locals.result = result;
    return next();
  })
  .catch(err => {
    console.log(`There was an error trying to post to database ${err}`);
    // passing an argument into the next function triggers a break in the chain of middleware handler functions and skips to the global error handler in the server.js file
    return next(err);
  })
}

module.exports = controller;




/* 

req.body = {
  prop1: val1, 
  prop2: val2, 
  prop3: val3
}

const varName = req.body.prop1;
const { prop1 } = req.body;
*/
