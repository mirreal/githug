const { isEmptyRepo } = require('../lib/shared/repo')

module.exports = {
    difficulty: 1,
    description: `The 'README' file has been added to your staging area, now commit it.`,
    async setup() {
        //
    },
    async solution() {
        let result = false
        try {
            result = !await isEmptyRepo()
        } catch (err) {
            console.log(err)
        }
        return result
    },
    async hint() {
        console.log(`You must include a message when you commit.`)
    }
}
