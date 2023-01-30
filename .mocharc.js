'use strict';

module.exports = {
    bail: false,
    color: true,
    package: './package.json',
    parallel: false,
    jobs: 1,
    recursive: false,
    reporter: ['spec'],
    // retries: 0,
    slow: '75',
    sort: false,
    timeout: 20000,
    ui: 'bdd',
    require: '@babel/register',
};
