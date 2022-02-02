function hasWhiteSpace(S) {
  return (/\s/).test(S)
}

function findIndentCount(S) {
  return S.search(/\S/);
}

module.exports = {
  hasWhiteSpace,
  findIndentCount,
}