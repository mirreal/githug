const path = require('path')

const levelList = [
    'init',
    'config',
    'add',
    'commit'
]

const load = levelName => {
    const levelPath = path.resolve(__dirname, '../levels/', levelName)
    return require(levelPath)
}

const printLevelDescription = ({
    levelName,
    difficulty,
    description
}) => {
    const levelIndex = levelList.indexOf(levelName) + 1
    const difficultyStar = (new Array(difficulty + 1)).join('*')
    console.log('')
    console.log(`Name: ${levelName}`)
    console.log(`Level: ${levelIndex}`)
    console.log(`Difficulty: ${difficultyStar}`)
    console.log('')
    console.log(description)
    console.log('')
}

module.exports = {
    levelList,
    load,
    printLevelDescription
}
