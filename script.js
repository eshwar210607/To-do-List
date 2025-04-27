// ... existing code ...
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const themeBtn = document.getElementById('themeBtn');
const themeOptions = document.getElementById('themeOptions');
const themeOptionBtns = themeOptions.querySelectorAll('.theme-option');
const themes = ['', 'theme-2', 'theme-3', 'theme-4'];
let currentTheme = 0;

function renderTodo(text, done = false) {
    const li = document.createElement('li');
    li.className = 'todo-item' + (done ? ' done' : '');
    li.innerHTML = `
        <input type="checkbox" class="todo-checkbox"${done ? ' checked' : ''}>
        <span>${text}</span>
        <button class="delete-btn" title="Delete">&times;</button>
    `;
    const checkbox = li.querySelector('.todo-checkbox');
    checkbox.onclick = () => {
        li.classList.toggle('done');
    };
    li.querySelector('span').onclick = () => {
        checkbox.checked = !checkbox.checked;
        li.classList.toggle('done');
    };
    li.querySelector('.delete-btn').onclick = () => {
        li.classList.add('removing');
        setTimeout(() => li.remove(), 300);
    };
    todoList.appendChild(li);
}

addBtn.onclick = () => {
    const value = todoInput.value.trim();
    if (value) {
        renderTodo(value);
        todoInput.value = '';
        todoInput.focus();
    }
};

todoInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') addBtn.onclick();
});

// Show/hide theme options on button click
themeBtn.onclick = () => {
    themeOptions.style.display = themeOptions.style.display === 'none' ? 'flex' : 'none';
};

// Theme option selection
themeOptionBtns.forEach((btn, idx) => {
    btn.onclick = () => {
        document.body.classList.remove(themes[currentTheme]);
        currentTheme = idx;
        document.body.classList.add(themes[currentTheme]);
        themeOptionBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        themeOptions.style.display = 'none';
    };
});

// Optional: Save todos and theme to localStorage for persistence
// ... existing code ...