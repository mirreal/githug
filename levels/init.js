const { exec } = require('../lib/shell')

const getRepoValid = async() => {
    let isRepoValid = true

    try {
        await exec('git branch')
    } catch (err) {
        isRepoValid = false
    }

    return isRepoValid
}

module.exports = {
    difficulty: 1,
    description: 'A new directory, `git_hug`, has been created; initialize an empty repository in it.',
    async solution() {
        return await getRepoValid()
    },
    async hint() {
        console.log('You can type `git --help` or  `git` in your shell to get a list of available git commands.')
    }
}
