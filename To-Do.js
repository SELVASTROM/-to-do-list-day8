function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

 if (taskText === '') {
     alert("Please ! Add The Task You Have To Do.");
     return;
   }

  let li = document.createElement("li");
li.textContent=taskText;
  li.onclick = function () {
    this.classList.toggle("Hurray! Your Task is Completed");
  };

  let delBtn = document.createElement("button");
  delBtn.textContent = 'Delete';
  delBtn.className='delete-btn';
  delBtn.onclick = function (e) {
    e.stopPropagation();
    li.remove();
  };
  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
// Load existing tasks from localStorage
// window.onload = function () {
//   const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//   savedTasks.forEach(task => renderTask(task.text, task.completed));
// };
// function addTask() {
//   const input = document.getElementById("taskInput");
//   const taskText = input.value.trim();
//   if (taskText === "") return;

//   renderTask(taskText, false);
//   saveTask(taskText, false);
//   input.value = "";
// }
// function renderTask(text, completed) {
//   const li = document.createElement("li");
//   li.textContent = text;
//   if (completed) li.classList.add("Hurray! Your Task is Completed");

//   li.onclick = function () {
//     li.classList.toggle("Hurray! Your Task is Completed");
//     updateStorage();
//   };

//   const delBtn = document.createElement("button");
//   delBtn.textContent = "✖";
//   delBtn.className = "delete-btn";
//   delBtn.onclick = function (e) {
//     e.stopPropagation();
//     li.remove();
//     updateStorage();
//   };

//   li.appendChild(delBtn);
//   document.getElementById("taskList").appendChild(li);
// }
// function saveTask(text, completed) {
//   const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//   tasks.push({ text, completed });
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }
// function updateStorage() {
//   const tasks = [];
//   document.querySelectorAll("#taskList li").forEach(li => {
//     const text = li.childNodes[0].textContent;
//     const completed = li.classList.contains("completed");
//     tasks.push({ text, completed });
//   });
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }
