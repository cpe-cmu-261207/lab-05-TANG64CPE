const inputAdd = document.getElementById("input-add-todo");
const todoCtn = document.getElementById("todo-container");

inputAdd.onkeyup = (event) => {
  const li = document.createElement("li");
  if (event.key !== "Enter") return;
  if (inputAdd.value === "") return alert("Todo cannot be empty");
  else li.innerText = inputAdd.value;
  todoCtn.insertBefore(li, todoCtn.childNodes[0]);
  li.addEventListener("mouseout", addevent);
  inputAdd.value = "";

  var doneBtn = document.createElement("button");
  doneBtn.setAttribute("id", "done");
  doneBtn.appendChild(document.createTextNode("Done"));
  li.appendChild(doneBtn);
  doneBtn.addEventListener("click", doneListItem);

  function doneListItem() {
    li.classList.toggle("done");
  }

  var deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("id", "delete");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  li.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", deleteListItem);

  function deleteListItem() {
    li.classList.add("delete");
  }

  function mouseOver() {
    document.getElementById("done").style.display = "";
    document.getElementById("delete").style.display = "";
  }

  function mouseOut() {
    document.getElementById("done").style.display = "none";
    document.getElementById("delete").style.display = "none";
  }

  function addevent() {
    li.addEventListener("mouseover", mouseOver);
    li.addEventListener("mouseout", mouseOut);
  }
};

function addTodo(title, completed) {
  const div = document.createElement("div");
  div.className = "border-bottom p-1 py-2 fs-2 d-flex";
}

//create span for showing title
const span = document.createElement("span");
span.innerText = title;
span.style.textDecoration = completed ? "line-through" : "";
span.className = "me-3";

function saveTodo() {
  const data = [];
  for (const todoDiv of todoCtn.children) {
    //your code here
  }
  //your code here
}

function loadTodo() {
  //your code here
}

loadTodo();
