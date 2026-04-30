function soma(a, b) {
  return a + b;
}

test('1 + 1 = 2', () => {
  expect(soma(1, 1)).toBe(2);
});

test('2 + 3 = 5', () => {
  expect(soma(2, 3)).toBe(5);
});

test('0 + 0 = 0', () => {
  expect(soma(0, 0)).toBe(0);
});

test('-1 + 1 = 0', () => {
  expect(soma(-1, 1)).toBe(0);
});

test('10 + 5 = 15', () => {
  expect(soma(10, 5)).toBe(15);
});
