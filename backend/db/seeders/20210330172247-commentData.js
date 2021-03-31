'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        commentBody: 'Needs more gated reverb snare hits',
        userId: 1,
        trackId: 10,
      },
      {
        commentBody: 'Where are all of teh microtonezz??',
        userId: 2,
        trackId: 9,
      },
      {
        commentBody:'Classic tune!!',
        userId: 3,
        trackId: 8,
      },
      {
        commentBody:'If youve got a song insdie, dont hide it dont lock it',
        userId: 4,
        trackId: 7,
      },
      {
        commentBody:'I never knew somethign like this could even be made!',
        userId: 5,
        trackId: 6,
      },
      {
        commentBody:'My sentiments exactly',
        userId: 6,
        trackId: 5,
      },
      {
        commentBody:'Love the delay on the guitars',
        userId: 7,
        trackId: 4,
      },
      {
        commentBody:'Hit those high notes, boy!',
        userId: 8,
        trackId: 3,
      },
      {
        commentBody:'Heavy stuff!',
        userId: 9,
        trackId: 2,
      },
      {
        commentBody:'Need more sequenced beats, mate',
        userId: 10,
        trackId: 1,
      },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comments', null, {});
  }
};
