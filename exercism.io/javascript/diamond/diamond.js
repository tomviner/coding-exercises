const A = "A".charCodeAt()

function fill(col, row, n) {
    let code = " ".charCodeAt()
    // top right
    if (row === col - n) {
        code = A + ((row + col - n) / 2)
    }
    // bottom left
    else if(row === col + n) {
        code = A - ((row + col - 3 * n) / 2)
    }
    // top left
    else if (row === n - col) {
        code = A + n / 2 + ((row - col) / 2)
    }
    // bottom right
    else if (row === 3 * n - col) {
        code = A + n / 2 + ((col - row) / 2)
    }
    return String.fromCharCode(code)
}

export class Diamond {
  makeDiamond(letter) {
    const let_code = letter.charCodeAt()
    const n = let_code - A
    const len = 2 * n + 1
    return Array.from({length: len}, (_, row) => (
        Array.from(
            {length: len},
            (_, col) => fill(col, row, n)).join('')
    )).join('\n') + '\n'
  }
}
