const { load, printLevelDescription } = require('./level')
const log = require('./log')
const { loadProfile, setNextLevel } = require('./profile')


const playLevel = async() => {
    let solve = false

    const profileConfig = await loadProfile()
    console.log(profileConfig)
    if (profileConfig.currentLevel === '') {
        console.log('Welcome to Githug!')

        await setNextLevel()
        await playLevel()
        return
    }

    const levelName = profileConfig.currentLevel
    const levelInfo = load(levelName)

    solve = await levelInfo.solution()

    if (solve && levelInfo) {
        log.success('Congratulations, you have solved the level!')
    } else {
        log.error('Sorry, this solution is not quite right!')
    }

    printLevelDescription({ levelName, ...levelInfo })
}

module.exports = {
    playLevel
}
