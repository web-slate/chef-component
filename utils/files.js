const shell = require('shelljs');

function createDirectory(pathWithName) {
  return shell.mkdir('-p', pathWithName)
}

function createFile(options) {
  const { pathToFile, data = '' } = options
  return shell.ShellString(data, [['1>', '&2']]).to(pathToFile)
}

module.exports = {
  createDirectory,
  createFile,
}