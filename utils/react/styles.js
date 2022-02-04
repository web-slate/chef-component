const styledComponentCode = () => `
import styled from 'styled-components'

export const StyledBlock = styled('div')\`
  background: palevioletred
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
\`
`

const sassStyleCode = () => `
  /* TODO: Component SASS Style goes here */
  $text-color: blue;

  .line {
    color: $body-color;
  }
`

const cssStyleCode = () => `
  /* TODO: Component CSS Style goes here */
  .line {
    color: blue;
  }
`

function getComponentStyleCode(options) {
  const { style } = options
  if (style === 'styled') {
    return styledComponentCode()
  } else if (style === 'sass') {
    return sassStyleCode()
  }

  return cssStyleCode()
}

module.exports = {
  getComponentStyleCode
}