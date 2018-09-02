const { load, printLevelDescription } = require('./level')
const log = require('./log')
const { loadProfile, setNextLevel } = require('./profile')

// 是否是新的关卡
let isNewLevel = false

const playLevel = async() => {
    let solve = false

    const profileConfig = await loadProfile()
    if (profileConfig.currentLevel === '') {
        console.log('Welcome to Githug!')

        isNewLevel = true
        await setNextLevel()
        await playLevel()
        return
    }

    const levelName = profileConfig.currentLevel
    const levelInfo = load(levelName)

    if (!isNewLevel) {
        solve = await levelInfo.solution()

        if (solve && levelInfo) {
            log.success('Congratulations, you have solved the level!')

            isNewLevel = true
            await setNextLevel(levelName)
            await playLevel()
            return
        } else {
            log.error('Sorry, this solution is not quite right!')
        }
    }

    printLevelDescription({ levelName, ...levelInfo })
}

module.exports = {
    playLevel
}
