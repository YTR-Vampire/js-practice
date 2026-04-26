function addTask() {
    const input = document.getElementById('todoInput');
    const list = document.getElementById('todoList');
    
    // 1. Check if the input is empty
    if (input.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // 2. Create the list item (li)
    const li = document.createElement('li');
    
    // 3. Set the content and add a 'Done' button
    li.innerHTML = `
        <span>${input.value}</span>
        <button class="done-btn" onclick="removeTask(this)">Done</button>
    `;

    // 4. Append to the list and clear input
    list.appendChild(li);
    input.value = "";
}

function removeTask(button) {
    // Navigate from the button to the parent <li> and remove it
    const li = button.parentElement;
    li.remove();
}