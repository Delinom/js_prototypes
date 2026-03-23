const Character = require('../src/Character.js');

test('create Character', () => {
  const result = new Character('HeroName', 'Bowerman');

  const correct = {
    name: 'HeroName',
    type: 'Bowerman',
    health: 100,
    level: 1,
  };
  
  expect(result).toEqual(correct);
});

test('short name', () => {
  expect(() => new Character('s', 'Bowerman')).toThrow();
});

test('long name', () => {
  expect(() => new Character('Tenltrname', 'Bowerman')).toThrow();
});

test('invalid type', () => {
  expect(() => new Character('HeroName', 'Zomby')).toThrow();
});