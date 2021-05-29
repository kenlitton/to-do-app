const mongoose = require('mongoose');
// connect to mongo db
mongoose.connect('mongodb+srv://kenlitton:Funatuofi24@cluster0.asyh6.mongodb.net/to-do-app?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
// define our schema
// each object (document) that we add to teh database will be another to do task

// best practice is to define schema with lower case, after invoking model, then we capitalize
const task = new mongoose.Schema({
  task: {
    type: String, 
    // any input that is added to db, it must have a task property that must be a string
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const Task = mongoose.model('task', task);

// need to export schema as a model
module.exports = Task;