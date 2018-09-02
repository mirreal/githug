const fs = require('fs')

const readFile = path => new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, result) => {
        if (error) {
            reject(error)
        } else {
            resolve(result)
        }
    })
})

const writeFile = (path, data) => new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf-8', error => {
        if (error) {
            reject(error)
        } else {
            resolve('success')
        }
    })
})

const checkAccess = async path => new Promise(resolve => {
    fs.access(path, fs.constants.F_OK, err => {
        if (!err) {
            resolve(true)
        } else {
            resolve(false)
        }
    })
})

module.exports = {
    readFile,
    writeFile,
    checkAccess
}
