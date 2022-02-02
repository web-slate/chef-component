const fs = require('fs')
const es = require('event-stream');
const shell = require('shelljs');
const {
  hasWhiteSpace,
  findIndentCount,
} = require('./utils/string')
const { getFunctionalComponentCode } = require('./utils/component')
const { createDirectory, createJsFile } = require('./utils/files')
const { initStore } = require('./utils/path')

const { basePath, setBasePath, getBasePath, removeLastPathItem } = initStore(['blocks'])

let lineNumber = 0;
const TYPE = 'REACT'
const SPACER = 'space'
const INDENT_SIZE = 2
const FILE_EXTENSION = 'js'
const DEFINITION_FILE = 'definitions.yml'

let currentIndentation = 0

const createComponentSet = (line) => {
  if (line.indexOf('/') === -1) {
    const componentName = line.trim()
    const componentCode = getFunctionalComponentCode({
      name: componentName
    })
    createJsFile({
      pathToFile: `${getBasePath()}/${componentName}.${FILE_EXTENSION}`,
      data: componentCode
    })
    createJsFile({
      pathToFile: `${getBasePath()}/index.${FILE_EXTENSION}`,
      data: `export { default } from './${componentName}'`
    })
  }
}

const fileStream = fs.createReadStream(DEFINITION_FILE)
  .pipe(es.split())
  .pipe(es.mapSync(function (line) {

    if (!hasWhiteSpace(line) && currentIndentation === 0) {
      setBasePath(line)
      createDirectory(getBasePath())
    } else if (hasWhiteSpace(line)) {
      if (currentIndentation === findIndentCount(line)) {
        basePath.splice(-1, 1, line.trim())
      } else if (findIndentCount(line) > currentIndentation) {
        setBasePath(line)
      } else if (findIndentCount(line) < currentIndentation) {
        const repeatTimes = currentIndentation / findIndentCount(line)
        const repeatTimesArray = new Array(Math.ceil(repeatTimes)).fill(7)
        repeatTimesArray.forEach(() => removeLastPathItem())
        setBasePath(line)
      }
      currentIndentation = findIndentCount(line)
      createDirectory(getBasePath())
      createComponentSet(line)
    }

    // pause the readstream
    fileStream.pause();

    lineNumber += 1;

    // process line here and call fileStream.resume() when rdy
    // function below was for logging memory usage
    // logMemoryUsage(lineNumber);

    // resume the readstream, possibly from a callback
    fileStream.resume();
  })
    .on('error', function (err) {
      console.log('Error while reading file.', err);
    })
    .on('end', function () {
      console.log('Happy Coding!')
    })
  );