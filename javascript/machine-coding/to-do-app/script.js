document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('new-task');
    const addButton = document.getElementById('add-task');
    const ulList = document.getElementById('task-list');


    addButton.addEventListener('click', () => {
        const value = input.value.trim();
        if (value !== '') {
            addTask(value);
            input.value = '';
            input.focus();
        }

    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });

    function addTask(value) {
        const li = document.createElement('li');

        const span = document.createElement('span');

        span.textContent = value;

        span.addEventListener('click', () => {
            span.classList.toggle('complete');
        })

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"
        removeButton.classList.add('remove');

        removeButton.addEventListener('click', () => {
            ulList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(removeButton);
        ulList.appendChild(li);
    }
})