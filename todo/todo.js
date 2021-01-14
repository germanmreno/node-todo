const fs = require('fs');
const colors = require('colors');

let todoList = [];

const saveDB = () => {
    let data = JSON.stringify(todoList);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error(`Error: ${err}`);
    });
};

const loadDB = () => {
    try {
        todoList = require('../db/data.json');
    } catch (error) {
        todoList = [];
    }
};

const create = (description) => {
    loadDB();

    let todo = {
        description,
        complete: false,
    };

    todoList.push(todo);

    saveDB();

    return todo;
};

const getList = () => {
    loadDB();
    return todoList;
};

const update = (description, complete = true) => {
    loadDB();

    let indexTodo = todoList.findIndex((todo) => todo.description === description);

    if (indexTodo >= 0) {
        todoList[indexTodo].complete = complete;
        saveDB();
        return 'TODO actualizado exitosamente';
    } else {
        return 'Ocurrió un error. Intentélo nuevamente';
    }
};

const deleteTodo = (description) => {
    loadDB();

    todoList = todoList.filter((todo) => todo.description !== description);

    saveDB();

    return 'TODO borrado exitosamente';
};

module.exports = {
    create,
    getList,
    update,
    deleteTodo,
};
