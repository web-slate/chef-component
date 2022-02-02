const jsFunctionaComponent = (name) => `
function ${name}() {
  return <>${name} goes here.</>
}

export default ${name}
  `

const tsFunctionaComponent = (name) => `
import { FC } from 'react'

const >${name}: FC = () => {
  return (
  <>${name} goes here.</>
)

export default ${name}
  `

function getFunctionalComponentCode(options) {
  const { extension, name } = options
  if (extension === 'tsx') {
    return tsFunctionaComponent(name)
  }

  return jsFunctionaComponent(name)
}

module.exports = {
  getFunctionalComponentCode
}