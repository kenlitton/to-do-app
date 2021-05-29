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
// we are defining the value attribute of our input element and assigning it the string 'default'
getInput.setAttribute('vale', 'default');

// getInput.innerHTML = 'placeholder';
// const taskItem = 
// create a button to handle changes
const theButton = document.createElement('input');
theButton.setAttribute('type', 'submit');
theButton.setAttribute('class', 'button');

// add onclick function
function addTasks() {
  const task = document.getElementById('input').value;
  console.log('Add task from user input', task);
  console.log(typeof task);
  // create persistent memory - ajax call  
  fetch('/', {
    // set to a post request
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({toDo: task})
  })
  .then(response => {
    console.log('post reqeust sent successfully')
    return response.json()
  })
  .then(taskObj => console.log('converted the response into json successfuly', taskObj))
  .catch(err => console.log(`Add tasks error: ${err}`));
}

function getTasks() {
  // create persistent memory - fetch call  
  fetch('/find')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      // create an h1 and append to the DOM
      const newElement = document.createElement('h1');
      newElement.innerHTML = element.task;
      document.body.append(newElement);
    })
  });
}

getTasks();

theButton.addEventListener('click', addTasks);

// rendering tasks
// create a div 
const taskDiv = document.createElement('div');
taskDiv.setAttribute('class', 'taskList');
document.body.append(taskDiv);


// append a header as a child to div 
document.body.appendChild(getInput);
console.log(document);
document.body.append(theButton);
// assign the input as a value to the header

// add event handler
// to grab input - create element 

// NASA checklist
// 1. create the new element
// 2. append the new element to the document