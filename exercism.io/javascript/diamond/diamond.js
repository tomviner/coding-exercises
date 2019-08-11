// String.fromCharCode() / charCodeAt
// Returns a string created by using the specified sequence of Unicode values.
// String.fromCodePoint() / codePointAt
// Returns a string created by using the specified sequence of code points.
const A = "A".charCodeAt()

function fill(col, row, n) {
    // console.log(n)
    return String.fromCharCode(A + (row + col) / 2 + 1)
}

export class Diamond {
  makeDiamond(letter) {
    const code = letter.charCodeAt()
    const n = code - A + 1
    const len = 2 * n - 1
    return Array.from({length: len}, (_, row) => (
        Array.from({length: len}, (_, col) => fill(col, row, code)).join('')
    )).join('\n') + '\n'
  }
}
