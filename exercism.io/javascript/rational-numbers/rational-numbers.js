//
// This is only a SKELETON file for the 'Rational Numbers' exercise. It's been provided as a
// convenience to get you started writing code faste
//

 const gcd = function(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

const R = (a, b) => new Rational(a, b).reduce()

export class Rational {
  constructor(a, b) {
    this.a = a
    this.b = b
  }

  add({ a, b }) {
    return R(
      this.a * b + a * this.b,
      this.b * b
    )
  }

  sub({ a, b }) {
    return this.add(R(-1 * a, b))
  }

  mul({ a, b }) {
    return R(this.a * a, this.b * b)
  }

  div({ a, b }) {
    return R(this.a * b, this.b * a);
  }

  abs() {
    return R(Math.abs(this.a), Math.abs(this.b));
  }

  exprational(exp) {
    exp = Math.abs(exp);
    return R(this.a**exp, this.b**exp);
  }

  expreal(base) {
    const { a, b } = this;
    return (base ** (1 / b)) ** a;
  }

  reduce() {
    let { a, b } = this;

    const g = gcd(a, b);
    a /= g;
    b /= g;

    a *= Math.sign(b)
    b *= Math.sign(b)

    return new Rational(a, b);
  }
}
