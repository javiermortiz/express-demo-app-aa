'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        title: 'Kind of Blue',
        artist: 'Miles Davis',
        year: 1959,
        description: 'Kind of Blue has been regarded by many critics as the greatest jazz record, Davis\'s masterpiece, and one of the best albums of all time.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Time Out',
        artist: 'The Dave Brubeck Quartet',
        year: 1959,
        description: 'The album peaked at No. 2 on the Billboard pop albums chart, and was the first jazz album to sell a million copies.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ballads',
        artist: 'John Coltrane Quartet',
        year: 1963,
        description: '"They arrived with music-store sheet music of the songs" and just before the recordings, they "would discuss each tune, write out copies of the changes they\'d use, semi- rehearse for a half hour and then do it".',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Portrait in Jazz',
        artist: 'Bill Evans Trio',
        year: 1960,
        description: 'Eight months after his successful collaboration with Miles Davis on the album Kind of Blue, Evans recorded Portrait in Jazz with a new group (the Bill Evans Trio) that helped change the direction of modern jazz.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
