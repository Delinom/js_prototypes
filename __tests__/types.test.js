const Bowerman = require('../src/Bowerman.js');
const Swordsman = require('../src/Swordsman.js');
const Magician = require('../src/Magician.js');
const Daemon = require('../src/Daemon.js');
const Undead = require('../src/Undead.js');
const Zombie = require('../src/Zombie.js');

test('Верно создается объект Bowerman', () => {
  const result = new Bowerman('Legolas');

  const correct = {
    name: 'Legolas',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  
  expect(result).toEqual(correct);
});

test('Верно создается объект Swordsman', () => {
  const result = new Swordsman('Aragorn');

  const correct = {
    name: 'Aragorn',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  
  expect(result).toEqual(correct);
});

test('Верно создается объект Magician', () => {
  const result = new Magician('Gandalf');

  const correct = {
    name: 'Gandalf',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  
  expect(result).toEqual(correct);
});

test('Верно создается объект Daemon', () => {
  const result = new Daemon('Azazel');

  const correct = {
    name: 'Azazel',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  
  expect(result).toEqual(correct);
});
test('Верно создается объект Undead', () => {
  const result = new Undead('Skeleton');

  const correct = {
    name: 'Skeleton',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  
  expect(result).toEqual(correct);
});
test('Верно создается объект Zombie', () => {
  const result = new Zombie('Walker');

  const correct = {
    name: 'Walker',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  
  expect(result).toEqual(correct);
});
