const { makeDirectory, printMainText } = require('./cli')
const { playLevel } = require('./game')
const { setProfile, getProfileFileExist } = require('./profile')

const run = async() => {
    const isProfileFileExist = await getProfileFileExist()
    if (!isProfileFileExist) {
        await setProfile()
    }

    printMainText()
    await makeDirectory()
    await playLevel()
}

run()
