function getFunctionalComponentCode(options) {
  const { name } = options
  return `
function ${name}() {
  return <>${name} goes here.</>
}

export default ${name}
  `
}

module.exports = {
  getFunctionalComponentCode
}