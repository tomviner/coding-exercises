export class Triangle {
  constructor(n) {
    let above_rows = []
    if (n == 1) {
      this.lastRow = [1]
    }
    else {
      const above = new Triangle(n - 1)
      above_rows = above.rows
      this.lastRow = this.expand(above.lastRow)
    }
    this.rows = [...above_rows, this.lastRow]
  }

  expand(row) {
    return Array.from(
      {length: row.length + 1},
      (_, i) => ((row[i-1] || 0) + (row[i] || 0))
    )
  }
}
