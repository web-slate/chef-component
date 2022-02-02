function initStore(initialDirectory = ['blocks']) {
  const basePath = [...initialDirectory]

  function setBasePath(path = '') {
    basePath.push(path.trim().replace('/', ''))
  }
  
  function getBasePath() {
    return basePath.join('/')
  }
  
  function removeLastPathItem() {
    basePath.pop()
  }

  return {
    basePath,
    setBasePath,
    getBasePath,
    removeLastPathItem,
  }
}


module.exports = {
  initStore
}