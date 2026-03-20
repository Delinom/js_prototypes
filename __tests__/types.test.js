const Bowerman = require('../src/Bowerman.js');
const Swordsman = require('../src/Swordsman.js');
const Magician = require('../src/Magician.js');
const Daemon = require('../src/Daemon.js');
const Undead = require('../src/Undead.js');
const Zombie = require('../src/Zombie.js');

test('Bowerman', () => {
  const result = new Bowerman('Legolas');

  expect(result).toEqual({
    name: 'Legolas',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Swordsman', () => {
  const result = new Swordsman('Aragorn');

  expect(result.attack).toBe(40);
  expect(result.defence).toBe(10);
});

test('Magician', () => {
  const result = new Magician('Gandalf');

  expect(result.attack).toBe(10);
  expect(result.defence).toBe(40);
});

test('Daemon', () => {
  const result = new Daemon('Azazel');

  expect(result.attack).toBe(10);
  expect(result.defence).toBe(40);
});

test('Undead', () => {
  const result = new Undead('Skeleton');

  expect(result.attack).toBe(25);
  expect(result.defence).toBe(25);
});

test('Zombie', () => {
  const result = new Zombie('Walker');

  expect(result.attack).toBe(40);
  expect(result.defence).toBe(10);
});