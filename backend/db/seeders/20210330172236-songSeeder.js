"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Songs",
      [
              {
        title: 'Talk Show Host',
        image: 'https://middle8.s3-us-west-1.amazonaws.com/Talk+show+host.jpg',
        audioFile: 'https://middle8.s3-us-west-1.amazonaws.com/Talk+Show+Host.mp3',
        genreId: 45,
        artistName: 'Radiohead',
        createdAt: new Date(),
          updatedAt: new Date(),
        },
              {
        title: 'Avril 14th',
        image: 'https://middle8.s3-us-west-1.amazonaws.com/Aphex+twin.jpg',
        audioFile: 'https://middle8.s3-us-west-1.amazonaws.com/Avril+14th.mp3',
        genreId: 60,
        artistName: 'Aphex Twin',
        createdAt: new Date(),
          updatedAt: new Date(),
        },
              {
        title: 'Over the Hills & Far Away',
        image: 'https://middle8.s3-us-west-1.amazonaws.com/led_zeppelin-over_the_hills_and_far_away.png',
        audioFile: 'https://middle8.s3-us-west-1.amazonaws.com/Over+the+Hills+and+Far+Away+(Remaster).mp3',
        genreId: 45,
        artistName: 'Led Zeppelin',
        createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Latenight Moonlight",
          image: "https://middle8.s3-us-west-1.amazonaws.com/Tame+IMpala.jpg",
          audioFile:
            "https://middle8.s3-us-west-1.amazonaws.com/Tame+Impala+-+Latenight+Moonlight+(1).mp3",
          genreId: 6,
          artistName: "Tame Impala",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
              {
        title: 'So What?',
        image: 'https://middle8.s3-us-west-1.amazonaws.com/miles-davis-kind-of-blue.jpg',
        audioFile: 'https://middle8.s3-us-west-1.amazonaws.com/Miles+Davis+-+So+What+(Official+Audio).mp3',
        genreId: 51,
        artistName: 'Miles Davis',
        createdAt: new Date(),
          updatedAt: new Date(),
      },
              {
        title: 'Mars For the Rich',
        image: 'https://middle8.s3-us-west-1.amazonaws.com/KGTLMarsfortherich.jpg',
        audioFile: 'https://middle8.s3-us-west-1.amazonaws.com/Mars+For+The+Rich.mp3',
        genreId: 54,
        artistName: 'King Gizzard and the Lizard Wizard',
        createdAt: new Date(),
          updatedAt: new Date(),
      },
              {
        title: 'Debra',
        image: 'https://middle8.s3-us-west-1.amazonaws.com/BEck+Midnite+Vultures.jpg',
        audioFile: 'https://middle8.s3-us-west-1.amazonaws.com/Debra.mp3',
        genreId: 3,
        artistName: 'Beck',
        createdAt: new Date(),
          updatedAt: new Date(),
      },
              {
        title: 'Planet Junior',
        image: 'https://middle8.s3-us-west-1.amazonaws.com/PlanetJunior.jpg',
        audioFile: 'https://middle8.s3-us-west-1.amazonaws.com/The+Babe+Rainbow+-+Planet+Junior.mp3',
        genreId: 59,
        artistName: 'The Babe Rainbow',
        createdAt: new Date(),
          updatedAt: new Date(),
      },
              {
        title: 'Que Beleza',
        image: 'https://middle8.s3-us-west-1.amazonaws.com/nobody-can-live-forever-tim-maia.jpg',
        audioFile: 'https://middle8.s3-us-west-1.amazonaws.com/Tim+Maia+Que+Beleza+(Official+Audio).mp3',
        genreId: 53,
        artistName: 'Tim Maia',
        createdAt: new Date(),
          updatedAt: new Date(),
      },
              {
        title: 'The Color of Fire',
        image: 'https://middle8.s3-us-west-1.amazonaws.com/Boards+of+Canada.jpg',
        audioFile: 'https://middle8.s3-us-west-1.amazonaws.com/The+Color+of+the+Fire.mp3',
        genreId: 23,
        artistName: 'Boards of Canada',
        createdAt: new Date(),
          updatedAt: new Date(),
      },
              {
        title: 'Pocket',
        image: 'https://middle8.s3-us-west-1.amazonaws.com/Pocket+louie+song.jpg',
        audioFile: 'https://middle8.s3-us-west-1.amazonaws.com/Louie+Zong+-+Pocket+(ft.+bdg+and+jeff+liu).mp3',
        genreId: 21,
        artistName: 'Louie Zong (Feat. BDG)',
        createdAt: new Date(),
          updatedAt: new Date(),
      },
              {
        title: 'Philosophy of the World',
        image: 'https://middle8.s3-us-west-1.amazonaws.com/Theshaggs.jpg',
        audioFile: 'https://middle8.s3-us-west-1.amazonaws.com/Louie+Zong+-+Pocket+(ft.+bdg+and+jeff+liu).mp3',
        genreId: 21,
        artistName: 'The Shaggs',
        createdAt: new Date(),
          updatedAt: new Date(),
      },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Songs", null, {});
  },
};
