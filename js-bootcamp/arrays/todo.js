const todos = [{
    text: 'Walk Lotus',
    completed: true
    }, {
    text: 'Clean Dishes',
    completed: true
    }, {
    text: 'Feed Remmi',
    completed: false
    }, {
    text: 'Eat Dinner',
    completed: true
    }, {
    text: 'Take Out Trash',
    completed: false
    }];

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo, index) {
        return todo.text.toUpperCase() === todoText.toUpperCase();
    });
    if (index > -1) {
        todos.splice(index, 1);
    };
};

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        const needsCompletion = todo.completed === false;
        return needsCompletion;
    });
};

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1;
        } else if (a.completed && !b.completed) {
            return 1;
        } else {
            return 0;
        };
    });
};

sortTodos(todos);
console.log(todos);

// console.log(getThingsToDo(todos));

// deleteTodo(todos, 'walk lotus');
// console.log(todos);