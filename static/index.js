/*

helpful vanilla JS funcs

document.addEventListener
document.createElement
document.setAttribute

*/

// create an h1 element with theinnerHtml property of todo app
const appTitle = document.createElement('h1'); 
appTitle.innerHTML = 'To Do App';
document.body.appendChild(appTitle);

// create an input field
const getInput = document.createElement('input');
getInput.setAttribute('type', 'text');
getInput.setAttribute('id', 'input');

// getInput.innerHTML = 'placeholder';
// const taskItem = 
// create a button to handle changes
const theButton = document.createElement('button');
theButton.setAttribute('type', 'submit')
theButton.setAttribute('class', 'button');

// add onclick function
function addTasks() {
  const task = document.getElementById('input').value;
  // set the actual task list to innerHTML = task
  document.getElementById('input').innerHTML = task;
}

// theButton.addEventListener('click', addTasks)

// rendering tasks
// create a div 
const taskDiv = document.createElement('div');
taskDiv.setAttribute('class', 'taskList');
// append a header as a child to div 
document.body.appendChild(getInput);
console.log(document);
getInput.append(theButton);
// assign the input as a value to the header

// add event handler
// to grab input - create element 
