class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 9) {
      throw new Error('Invalid name');
    }

    const allowedTypes = [
      'Bowerman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (!allowedTypes.includes(type)) {
      throw new Error('Incorrect type');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}

module.exports = Character;