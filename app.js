const argv = require('./config/yargs').argv;

const todo = require('./todo/todo');

let command = argv._[0];

switch (command) {
    case 'create':
        const newTodo = todo.create(argv.description);
        console.log(newTodo);
        break;
    case 'list':
        let todos = todo.getList();

        for (let todo of todos) {
            console.log('==========TODO=========='.green);
            console.log(todo.description);
            console.log('Complete:', todo.complete);
            console.log('========================'.green);
        }
        break;
    case 'update':
        const updated = todo.update(argv.description, argv.complete);
        console.log(updated.green);
        break;
    case 'delete':
        let deleted = todo.deleteTodo(argv.description);
        console.log(deleted);
        break;
    default:
        console.log('Command not recognized');
}
