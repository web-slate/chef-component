function setBasePath(path = '') {
  basePath.push(path.replace('/', ''))
}

function getBasePath() {
  return basePath.join('/')
}

function removeLastPathItem() {
  basePath.pop()
}

