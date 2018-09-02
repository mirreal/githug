const path = require('path')
const Git = require('nodegit')

const {
    Repository,
    Status,
    Commit
} = Git

const pathToRepo = path.resolve('./')
const openRepo = async repoPath =>
    Repository
        .open(repoPath)
        .then(repo => repo)
        .catch(err => Promise.reject(err))

const isAddFile = async filePath =>
    openRepo(pathToRepo)
        .then(repo => Status.file(repo, filePath))
        .then(result => result === Status.STATUS.INDEX_NEW)
        .catch(err => Promise.reject(err))

const isEmptyRepo = async() =>
    openRepo(pathToRepo)
        .then(repo => repo.isEmpty() === 1)

const lookupCommit = async(repoPath, id) =>
    openRepo(repoPath)
        .then(repo => Commit.lookup(repo, id))
        .then(commit => {
            console.log(commit)
        })

module.exports = {
    openRepo,
    isAddFile,
    isEmptyRepo,
    lookupCommit
}
