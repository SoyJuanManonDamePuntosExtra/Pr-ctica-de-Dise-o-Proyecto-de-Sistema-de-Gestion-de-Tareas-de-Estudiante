
const taskContainer = document.querySelector('.task-container');

function createTaskCard() {
    const taskCard = document.createElement('article');
    taskCard.classList.add('task-card');

    taskCard.innerHTML = `
        <h2 class="task-title">Título:</h2>
        <p class="task-due-date"><strong>Fecha de entrega:</strong></p>
        <p class="task-subject"><strong>Materia:</strong></p>
        <p class="task-priority"><strong>Prioridad:</strong></p>
        <p class="task-description"><strong>Descripción:</strong></p>
        <div class="task-actions">
            <button class="btn-edit" onclick="editTask(this)">Editar</button>
            <button class="btn-delete" onclick="deleteTask(this)">Eliminar</button>
        </div>
    `;
    return taskCard;
}

function addTask() {
    const newTaskCard = createTaskCard();
    taskContainer.appendChild(newTaskCard);
}

function deleteTask(button) {
    const taskCard = button.closest('.task-card');
    taskCard.remove();
}

function editTask(button) {
    const taskCard = button.closest('.task-card');
    const title = prompt('Ingresa el título de la tarea:', taskCard.querySelector('.task-title').textContent.replace('Título: ', ''));
    const dueDate = prompt('Ingresa la fecha de entrega:', taskCard.querySelector('.task-due-date').textContent.replace('Fecha de entrega: ', ''));
    const subject = prompt('Ingresa la materia:', taskCard.querySelector('.task-subject').textContent.replace('Materia: ', ''));
    const priority = prompt('Ingresa la prioridad:', taskCard.querySelector('.task-priority').textContent.replace('Prioridad: ', ''));
    const description = prompt('Ingresa la descripción:', taskCard.querySelector('.task-description').textContent.replace('Descripción: ', ''));

    if (title) taskCard.querySelector('.task-title').textContent = `Título: ${title}`;
    if (dueDate) taskCard.querySelector('.task-due-date').innerHTML = `<strong>Fecha de entrega:</strong> ${dueDate}`;
    if (subject) taskCard.querySelector('.task-subject').innerHTML = `<strong>Materia:</strong> ${subject}`;
    if (priority) taskCard.querySelector('.task-priority').innerHTML = `<strong>Prioridad:</strong> ${priority}`;
    if (description) taskCard.querySelector('.task-description').innerHTML = `<strong>Descripción:</strong> ${description}`;
}

function addTaskContainer() {
    const newContainer = document.createElement('section');
    newContainer.classList.add('task-container');

    const containerTitle = document.createElement('h2');
    containerTitle.textContent = 'Nuevo Contenedor de Tareas';
    containerTitle.style.textAlign = 'center';

    newContainer.appendChild(containerTitle);

    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Agregar Tarea';
    addTaskButton.style.display = 'block';
    addTaskButton.style.margin = '1rem auto';
    addTaskButton.onclick = () => {
        const newTaskCard = createTaskCard();
        newContainer.appendChild(newTaskCard);
    };

    newContainer.appendChild(addTaskButton);
    document.body.appendChild(newContainer);
}
