function addTask() {
    const taskInput = document.getElementById('todoInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
      const newTask = document.createElement('li');
      newTask.classList.add('task-item');
      newTask.innerHTML = `
        <span class="task-text" onclick="toggleComplete(event)">${taskText}</span>
        <button onclick="deleteTask(event)">✖</button>
      `;
      taskList.appendChild(newTask);
      taskInput.value = '';
    }
  }
  
  function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
  }
  
