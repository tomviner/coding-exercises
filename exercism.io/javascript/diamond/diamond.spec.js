import { Diamond } from './diamond.js';

describe('Make diamond function', () => {
  const diamond = new Diamond();

  test('test letter A', () => {
    const result = 'A\n';
    expect(diamond.makeDiamond('A')).toEqual(result);
  });

  test('test letter C', () => {
    const result = `${[
      '  A  ',
      ' B B ',
      'C   C',
      ' B B ',
      '  A  '].join('\n')}\n`;
    expect(diamond.makeDiamond('C')).toEqual(result);
  });

  test('test letter D', () => {
    const result = `${[
      '   A   ',
      '  B B  ',
      ' C   C ',
      'D     D',
      ' C   C ',
      '  B B  ',
      '   A   '].join('\n')}\n`;
    expect(diamond.makeDiamond('D')).toEqual(result);
  });

  test('test letter E', () => {
    const result = `${[
      '    A    ',
      '   B B   ',
      '  C   C  ',
      ' D     D ',
      'E       E',
      ' D     D ',
      '  C   C  ',
      '   B B   ',
      '    A    '].join('\n')}\n`;
    expect(diamond.makeDiamond('E')).toEqual(result);
  });

  test('test letter F', () => {
    const result = `${[
      '     A     ',
      '    B B    ',
      '   C   C   ',
      '  D     D  ',
      ' E       E ',
      'F         F',
      ' E       E ',
      '  D     D  ',
      '   C   C   ',
      '    B B    ',
      '     A     '].join('\n')}\n`;
    expect(diamond.makeDiamond('F')).toEqual(result);
  });
});
