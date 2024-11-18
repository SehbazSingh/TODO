let task = ''; // Variable to store the task input value

function on() {
    document.getElementById("overlay").style.display = "flex";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function saveTask() {
    const taskInputElement = document.getElementById("taskInput");
    if (taskInputElement) {
        task = taskInputElement.value; // Save the input value in the variable
        console.log(task); // Display the saved task in the console (for debugging)
        addTaskToList(task); // Add the task to the list
        off(); // Hide the modal after saving the task
        taskInputElement.value = ''; // Clear the input field
    } else {
        console.error("Task input element not found!");
    }
}

function addTaskToList(task) {
    const taskContainer = document.getElementById("taskContainer");

    // Create new task element
    const newTask = document.createElement('div');
    newTask.classList.add('task');

    const newTaskLabel = document.createElement('label');
    newTaskLabel.classList.add('checkbox');

    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';

    const newCheckmark = document.createElement('span');
    newCheckmark.classList.add('checkmark');

    const newTaskSpan = document.createElement('span');
    newTaskSpan.classList.add('task-label');
    newTaskSpan.textContent = task;

    const newInnerButton = document.createElement('div');
    newInnerButton.classList.add('innerbutton');

    const editButton = document.createElement('button');
    editButton.classList.add('menu');
    const editIcon = document.createElement('img');
    editIcon.src = 'images/pencil.png';
    editButton.appendChild(editIcon);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('menu');
    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'images/trash.png';
    deleteButton.appendChild(deleteIcon);

    newInnerButton.appendChild(editButton);
    newInnerButton.appendChild(deleteButton);

    newTaskLabel.appendChild(newCheckbox);
    newTaskLabel.appendChild(newCheckmark);
    newTaskLabel.appendChild(newTaskSpan);

    newTask.appendChild(newTaskLabel);
    newTask.appendChild(newInnerButton);

    // Add an <hr> before the new task except if it is the first task
    const hr = document.createElement('hr');
    hr.classList.add('hrbar');

    if (taskContainer.children.length > 0) {
        taskContainer.appendChild(hr);
    }

    // Append new task
    taskContainer.appendChild(newTask);
}

// Prevent click inside modal from closing the overlay
document.querySelector('.modal').addEventListener('click', function(event) {
    event.stopPropagation();
});

document.querySelector('.footerbutton').addEventListener('click', on);
document.querySelector('.overlay').addEventListener('click', off);
