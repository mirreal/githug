const path = require('path')

const getCurrentDirectory = () => {
    // If no path segments are passed, path.resolve() will return the absolute path of the current working directory.
    // const currentWorkingDirectory = path.resolve()
    const currentWorkingDirectory = process.cwd()
    return path.basename(currentWorkingDirectory)
}

module.exports = {
    getCurrentDirectory
}
