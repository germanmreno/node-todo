const description = {
    demand: true,
    alias: 'd',
    desc: 'TODO description',
};

const complete = {
    default: true,
    alias: 'c',
    desc: 'Check complete or pending',
};

const argv = require('yargs')
    .command('create', 'Create TODO', {
        description,
    })
    .command('update', 'Update TODO', {
        description,
        complete,
    })
    .command('delete', 'Delete TODO', {
        description,
    })
    .help().argv;

module.exports = {
    argv,
};
