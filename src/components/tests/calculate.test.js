import calculate from '../../logic/calculate';

describe('Testing calculate function', () => {
  test('Test calculate logic calculate({ total: 7, next: 4, operation: -}, =)', () => {
    const obj = { total: '7', next: '4', operation: '-' };
    expect(calculate(obj, '=')).toEqual({ total: '3', next: null, operation: null });
  });

  test('Test calculate logic calculate({ total: 7, next: 4, operation: +}, =)', () => {
    const obj = { total: '7', next: '4', operation: '+' };
    expect(calculate(obj, '=')).toEqual({ total: '11', next: null, operation: null });
  });

  test('Test calculate logic calculate({ total: 7, next: 4, operation: x}, =)', () => {
    const obj = { total: '7', next: '4', operation: 'x' };
    expect(calculate(obj, '=')).toEqual({ total: '28', next: null, operation: null });
  });

  test('Test calculate logic calculate({ total: 8, next: 4, operation: ÷}, =)', () => {
    const obj = { total: '8', next: '4', operation: '÷' };
    expect(calculate(obj, '=')).toEqual({ total: '2', next: null, operation: null });
  });
});
