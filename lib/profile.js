const path = require('path')
const { readFile, writeFile } = require('./shared/fs')
const { levelList } = require('./level')

const profilePath = path.resolve('.profile.json')

const initProfileConfig = {
    currentLevel: '',
    currentAttempts: 0
}

const setProfile = async(profileConfig = initProfileConfig) => {
    await writeFile(profilePath, JSON.stringify(profileConfig, null, 4))
}

const loadProfile = async() => {
    // 这里不能使用 require
    // require 针对同一模块只执行一次
    const profileText = await readFile(profilePath)

    let profile = initProfileConfig
    try {
        profile = JSON.parse(profileText)
    } catch (err) {
        console.log(`JSON.parse error: ${err}`)
    }

    return profile
}

const setNextLevel = async(currentLevel = '') => {
    let nextLevel = levelList[0]

    if (currentLevel !== '') {
        const currentIndex = levelList.indexOf(currentIndex)
        nextLevel = levelList[currentIndex + 1]
    }

    const finalProfileConfig = {
        ...initProfileConfig,
        currentLevel: nextLevel
    }

    await setProfile(finalProfileConfig)
}


module.exports = {
    setProfile,
    loadProfile,
    setNextLevel
}
