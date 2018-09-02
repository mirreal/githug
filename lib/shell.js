const shell = require('shelljs')

const exec = (script, opts = { silent: true }) =>
    new Promise((resolve, reject) => {
        try {
            shell.exec(script, opts, (code, stdout, stderr) => {
                if (code !== 0) {
                    reject(stderr)
                } else {
                    resolve(stdout)
                }
            })
        } catch (err) {
            reject(err)
        }
    })

module.exports = {
    exec
}
