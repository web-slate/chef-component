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

  function resetAllPaths(){
    basePath.splice(0, basePath.length)
  }

  return {
    basePath,
    setBasePath,
    getBasePath,
    removeLastPathItem,
    resetAllPaths
  }
}


module.exports = {
  initStore
}