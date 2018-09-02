const { isAddFile } = require('../lib/shared/repo')

module.exports = {
    difficulty: 1,
    description: `There is a file in your folder called 'README', you should add it to your staging area
    Note: You start each level with a new repo. Don't look for files from the previous one.`,
    async setup() {
        //
    },
    async solution() {
        let result = false
        try {
            result = await isAddFile('README')
        } catch (err) {
            console.log(err)
        }
        return result
    },
    async hint() {
        console.log(`You can type 'git' in your shell to get a list of available git commands.`)
    }
}
