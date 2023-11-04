document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addButton");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});
