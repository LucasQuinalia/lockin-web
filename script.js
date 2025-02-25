const inputTask = document.querySelector(".input-task");
const buttonAddTask = document.querySelector(".button-add-task");
const listTask = document.querySelector("#list-task");

function createTask() {
    if (inputTask.value === "") {
        alert("You can't create an empty task");
        return
    }

    const itemTask = document.createElement("li");
    const checkboxTask = document.createElement("input");
    checkboxTask.type = "checkbox";
    const nameTask = document.createElement("p");
    nameTask.innerHTML = inputTask.value;

    checkboxTask.addEventListener("click", () => {
        if (checkboxTask.checked) {
            nameTask.style.textDecoration = "line-through";
        } else {
            nameTask.style.textDecoration = "none";
        }
    });

    itemTask.appendChild(checkboxTask);
    itemTask.appendChild(nameTask);
    listTask.appendChild(itemTask);
}

buttonAddTask.addEventListener("click", () => {
    createTask();
});