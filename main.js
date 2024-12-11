document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.createElement('input');
    const addButton = document.createElement('button');
    const taskList = document.createElement('ul');
    taskInput.placeholder = 'Enter your task';
    addButton.textContent = 'Add Task';
  
    document.getElementById('task-manager').append(taskInput, addButton, taskList);
  
    addButton.addEventListener('click', () => {
      if (taskInput.value.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskInput.value;
        taskList.appendChild(listItem);
        taskInput.value = '';
      }
    });
  });
  