const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')

const defaultDirectory = 'git_hug'

const printMainText = () => {
    console.log(`********************************************************************************
*                                    Githug                                    *
********************************************************************************`)
}

const printInfo = (info = '') => {
    // printMainText()
    console.log(info)
}

const getCurrentDirectory = () => {
    // If no path segments are passed, path.resolve() will return the absolute path of the current working directory.
    // const currentWorkingDirectory = path.resolve()
    const currentWorkingDirectory = process.cwd()
    return path.basename(currentWorkingDirectory)
}

const checkGithugDirectory = async path =>
    new Promise(resolve => {
        fs.access(path, fs.constants.F_OK, err => {
            if (!err) {
                resolve(true)
            } else {
                resolve(false)
            }
        })
    })

const makeGitgugDirectory = async dirname =>
    new Promise((resolve, reject) => {
        fs.mkdir(dirname, (err => {
            if (!err) {
                resolve(true)
            } else {
                console.error(`mkdir: ${err}`)
                reject(false)
            }
        }))
    })

const promptGihugDirectory = () => {
    const question = [
        {
            type: 'confirm',
            name: 'isCreate',
            message: 'No githug directory found, do you wish to create one?'
        }
    ]

    return inquirer.prompt(question)
        .then(answers => answers.isCreate)
}

const makeDirectory = async() => {
    if (getCurrentDirectory() === defaultDirectory) return

    try {
        const isDirectiryExist = await checkGithugDirectory(defaultDirectory)
        if (isDirectiryExist) {
            printInfo('Please change into the git_hug directory')
            return
        }

        printInfo()
        const isSelectYes = await promptGihugDirectory()
        if (!isSelectYes) return

        const isSuccess = await makeGitgugDirectory(defaultDirectory)
        if (!isSuccess) {
            console.log('Create directory fail, please try again.')
            return
        }

        console.log('go next')
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    printMainText,
    makeDirectory
}
