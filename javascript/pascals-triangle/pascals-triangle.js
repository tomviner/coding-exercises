function expand(row) {
  return [0, ...row].map((e, i) => ((row[i-1] || 0) + (row[i] || 0)))
}

export class Triangle {
  constructor(n) {
    this.n = n
  }

  get lastRow() {
    return this.rows.slice(-1)[0]
  }

  get rows() {
    if (this.n == 1) {
      return [[1]]
    }
    else {
      const rows_above = new Triangle(this.n -  1).rows
      return [...rows_above, expand(rows_above.slice(-1)[0])]
    }
  }
}
