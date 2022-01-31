const fs = require('fs')
const es = require('event-stream');
const shell = require('shelljs');

let lineNr = 0;

const basePath = ['blocks']

function setBasePath(path = '') {
  basePath.push(path)
}

function getBasePath() {
  return basePath.join('/')
}

function hasWhiteSpace(S) {
  return (/\s/).test(S)
}

function findIndentCount(S) {
  return S.search(/\S/);
}

function createDirectory(pathWithName) {
  return shell.mkdir('-p', pathWithName)
}

const SPACER = 'space'
const INDENT_SIZE = 2

let currentIndentation = 0

var s = fs.createReadStream('definitions.txt')
  .pipe(es.split())
  .pipe(es.mapSync(function (line) {

    if (!hasWhiteSpace(line) && currentIndentation === 0) {
      setBasePath(line)
      createDirectory(getBasePath())
    } else if (hasWhiteSpace(line)) {
      if (currentIndentation === findIndentCount(line)) {
        basePath.splice(-1, 1, line.trim())
      } else if (findIndentCount(line) > currentIndentation) {
        setBasePath(line.trim())
      } else if (findIndentCount(line) < currentIndentation) {
        const repeatTimes = new Array(currentIndentation - findIndentCount(line) / INDENT_SIZE)
        console.log('repeatTimes: ', repeatTimes)
        repeatTimes.forEach(() => basePath.pop())
      }
      currentIndentation = findIndentCount(line)
      createDirectory(getBasePath())
    }

    // pause the readstream
    s.pause();

    lineNr += 1;

    // process line here and call s.resume() when rdy
    // function below was for logging memory usage
    // logMemoryUsage(lineNr);

    // resume the readstream, possibly from a callback
    s.resume();
  })
    .on('error', function (err) {
      console.log('Error while reading file.', err);
    })
    .on('end', function () {
      console.log('It done!')
    })
  );