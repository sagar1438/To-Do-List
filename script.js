const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = '';
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

taskList.addEventListener('click', function(event) {
    const target = event.target;

    if (target.tagName === 'SPAN') {
        target.parentElement.classList.toggle('completed');
    }

    if (target.classList.contains('delete-btn')) {
        const li = target.parentElement;
        taskList.removeChild(li);
    }
});