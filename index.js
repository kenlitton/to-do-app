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