const chalk = require('chalk')
const print = console.log

const log = {
    success(info) {
        print(chalk.green(info))
    },
    error(info) {
        print(chalk.red(info))
    }
}

module.exports = log
