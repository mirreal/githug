const inquirer = require('inquirer')
const { exec } = require('../lib/shell')

const prompt = () => {
    const question = [
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        }
    ]

    return inquirer.prompt(question)
        .then(answers => answers)
}

module.exports = {
    difficulty: 1,
    description: 'Set up your git name and email, this is important so that your commits can be identified.',
    async setup() {
        // repo.init
    },
    async solution() {
        let valid = false

        const { name, email } = await prompt()

        let configName = await exec('git config user.name')
        let configEmail = await exec('git config user.email')
        configName = configName.trim()
        configEmail = configEmail.trim()

        if (name === configName && email === configEmail) {
            valid = true
        }

        console.log(`Your config has the following name: ${configName}`)
        console.log(`Your config has the following email: ${configEmail}`)

        return valid
    },
    async hint() {
        console.log(`These settings are config settings.  You should run 'git help config' if you are stuck.`)
    }
}
