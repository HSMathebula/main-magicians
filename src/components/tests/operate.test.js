import operate from '../../logic/operate';

describe('Testing operate function', () => {
  test('Test operate logic operate({ numberone: 7, numberetwo: 4, operation: -}, =)', () => {
    expect(operate(8, 7, '-')).toEqual('1');
  });

  test('Test operate logic operate({ numberone: 7, numberetwo: 4, operation: +}, =)', () => {
    expect(operate(8, 7, '+')).toEqual('15');
  });

  test('Test operate logic operate({ numberone: 7, numberetwo: 4, operation: x}, =)', () => {
    expect(operate(8, 2, 'x')).toEqual('16');
  });

  test('Test operate logic operate({ numberone: 8, numberetwo: 4, operation: ÷}, =)', () => {
    expect(operate(8, 2, '÷')).toEqual('4');
  });

  test('Test operate logic operate({ numberone: 8, numberetwo: 4, operation: %}, =)', () => {
    expect(operate(9, 5, '%')).toEqual('4');
  });
});
