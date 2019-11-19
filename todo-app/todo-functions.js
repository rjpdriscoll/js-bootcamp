// Read/parse data on startup
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    };
};

// Save todos to local storage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
};

// Remove a todo from the page
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id;
    });

    if (todoIndex > -1) {
        return todos.splice(todoIndex, 1);
    };
};

// Complete a task
const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id;
    });

    if (todo !== undefined) {
        todo.completed = !todo.completed;
    };
};

// Get the DOM elements for list summary
const getSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos remaining!`;
    return summary;
};

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    const container = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const button = document.createElement('button');

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.completed;
    container.appendChild(checkbox);
    checkbox.addEventListener('change', function () {
        toggleTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    });    
    
    // Setup todo text
    todoText.textContent = todo.text;
    container.appendChild(todoText);

    // Setup remove button
    button.textContent = 'x';
    container.appendChild(button);
    button.addEventListener('click', function () {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    });

    return container;
};

// Render todos to the page
const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    // Remove completed from screen
    filteredTodos = filteredTodos.filter(function (todo) {
        if (filters.hideCompleted) {
            return !todo.completed;
        } else {
            return true;
        }
    });

    // Array of incomplete todo items
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed;
    });

    // Clear todos div
    document.querySelector('#todos').innerHTML = '';

    // Display number of remaining todo items
    document.querySelector('#todos').appendChild(getSummaryDOM(incompleteTodos));

    // Display todo list on the screen
    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    });
};