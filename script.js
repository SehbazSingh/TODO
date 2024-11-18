document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const overlay = document.getElementById("overlay");
    const taskInput = document.getElementById("taskInput");
    const taskContainer = document.getElementById("taskContainer");
    const emptyMessage = document.querySelector(".empty");
    const addButton = document.querySelector(".footerbutton");
    const cancelButton = document.querySelector(".cancel");
    const applyButton = document.querySelector(".apply");
  
    // Open the overlay
    function openOverlay() {
        overlay.style.display = "flex";
        taskInput.focus();
    }
  
    // Close the overlay
    function closeOverlay() {
        overlay.style.display = "none";
        taskInput.value = ""; // Clear input field on close
    }
  
    // Update empty message visibility
    function updateEmptyMessage() {
        if (taskContainer.children.length === 0) {
            emptyMessage.style.display = "flex";
        } else {
            emptyMessage.style.display = "none";
        }
    }
  
    // Create and add a task to the task container
    function addTask(taskText) {
        // Create task container
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
  
        // Task label with checkbox
        const label = document.createElement("label");
        label.classList.add("checkbox");
  
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const checkmark = document.createElement("span");
        checkmark.classList.add("checkmark");
  
        const taskLabel = document.createElement("span");
        taskLabel.classList.add("task-label");
        taskLabel.textContent = taskText;
  
        label.appendChild(checkbox);
        label.appendChild(checkmark);
        label.appendChild(taskLabel);
  
        // Task action buttons (edit and delete)
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("innerbutton");
  
        const editButton = document.createElement("button");
        editButton.classList.add("menu");
        editButton.innerHTML = `<img src="images/pencil.png" alt="Edit">`;
  
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("menu");
        deleteButton.innerHTML = `<img src="images/trash.png" alt="Delete">`;
  
        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);
  
        // Append elements to the task div
        taskDiv.appendChild(label);
        taskDiv.appendChild(buttonContainer);
  
        // Add event listeners
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                taskLabel.style.textDecoration = "line-through";
                taskLabel.style.opacity = "0.5";
            } else {
                taskLabel.style.textDecoration = "none";
                taskLabel.style.opacity = "1";
            }
        });
  
        editButton.addEventListener("click", () => {
            const newTaskText = prompt("Edit your task:", taskLabel.textContent);
            if (newTaskText && newTaskText.trim()) {
                taskLabel.textContent = newTaskText.trim();
            }
        });
  
        deleteButton.addEventListener("click", () => {
            taskDiv.remove();
            updateEmptyMessage();
        });
  
        // Add task to the container
        taskContainer.appendChild(taskDiv);
        updateEmptyMessage();
    }
  
    // Save task and close the overlay
    function saveTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            closeOverlay();
        }
    }
  
    // Event Listeners
    addButton.addEventListener("click", openOverlay);
    cancelButton.addEventListener("click", closeOverlay);
    applyButton.addEventListener("click", saveTask);
  
    // Close overlay when clicking outside the modal
    overlay.addEventListener("click", closeOverlay);
  
    // Prevent modal click from closing the overlay
    document.querySelector(".modal").addEventListener("click", (e) => {
        e.stopPropagation();
    });
  
    // Initial setup
    updateEmptyMessage();
  });
  
