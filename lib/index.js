const { makeDirectory, printMainText } = require('./cli')
const { playLevel } = require('./game')
const { setProfile } = require('./profile')

const run = async() => {
    await setProfile()

    printMainText()
    await makeDirectory()
    await playLevel()
}

run()
