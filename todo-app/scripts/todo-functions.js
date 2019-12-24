'use strict';

// Read/parse data on startup
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');

    try {
        return todosJSON ? JSON.parse(todosJSON) : [];
    } catch (e) {
        return [];
    }
};

// Save todos to local storage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

// Remove a todo from the page
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex > -1) {
        return todos.splice(todoIndex, 1);
    };
};

// Complete a task
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);

    if (todo) {
        todo.completed = !todo.completed;
    };
};

// Get the DOM elements for list summary
const getSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos remaining!`;
    return summary;
};

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const container = document.createElement('label');
    const containerEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const button = document.createElement('button');

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.completed;
    containerEl.appendChild(checkbox);
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    });    
    
    // Setup todo text
    todoText.textContent = todo.text;
    containerEl.appendChild(todoText);

    // Setup container
    container.classList.add('list-item');
    containerEl.classList.add('list-item__container');
    container.appendChild(containerEl);

    // Setup remove button
    button.textContent = 'remove';
    button.classList.add('button', 'button--text');
    container.appendChild(button);
    button.addEventListener('click', () => {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    });

    return container;
};

// Render todos to the page
const renderTodos = (todos, filters) => {
    let filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()));

    // Remove completed from screen
    filteredTodos = filteredTodos.filter((todo) => {
        if (filters.hideCompleted) {
            return !todo.completed;
        } else {
            return true;
        }
    });

    // Array of incomplete todo items
    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

    // Clear todos div
    document.querySelector('#todos').innerHTML = '';

    // Display number of remaining todo items
    document.querySelector('#todos').appendChild(getSummaryDOM(incompleteTodos));

    // Display todo list on the screen
    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    });
};