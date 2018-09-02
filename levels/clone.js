const { lookupCommit } = require('../lib/shared/repo')

module.exports = {
    difficulty: 1,
    description: `Clone the repository at https://github.com/Gazler/cloneme.`,
    async setup() {
        //
    },
    async solution() {
        let result = false
        try {
            result = await lookupCommit('cloneme', '157b2b61f29ab9df45f31c7cd9cb5d8ff06ecde4')
        } catch (err) {
            console.log(err)
        }
        return result
    },
    async hint() {
        console.log(`You should have a look at this site: https://github.com/Gazler/cloneme.`)
    }
}
