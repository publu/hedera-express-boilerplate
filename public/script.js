// client-side js, loaded by index.html
// run by the browser each time the page is loaded

console.log("hello world :o");

// define variables that reference elements on our page
const todoList = document.getElementById("todo");
const todoForm = document.querySelector("form");

let acc;

function tinybartoHbar(h){
  return h/100000000;
}

// a helper function that creates a list item for a given balance
function replaceNewBalance(bal) {
  const newListItem = document.createElement("li");
  todoList.innerHTML = tinybartoHbar(bal) +" ℏ for account id: " + acc;
}


// listen for the form to be submitted and get balance from account

todoForm.addEventListener("submit", event => {
      // stop our form submission from refreshing the page
      event.preventDefault();

      // get account value and add it to the list
      acc = todoForm.elements.todo.value;

      // fetch the balance
      fetch("/balance?account_id="+acc)
        .then(response => response.json()) // parse the JSON from the server
        .then(todo => {
          // iterate through every dream and add it to our page
          todo.forEach(replaceNewBalance, acc);
      });

      // reset form
      todoForm.reset();
      todoForm.elements.todo.focus();
});
