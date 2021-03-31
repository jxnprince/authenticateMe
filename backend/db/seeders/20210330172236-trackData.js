'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tracks', [
      {
        trackName: 'So What?',
        audioFile: 'http://www.amazon.com/gp/dmusic/get_sample_url.html?ASIN=B000S50QYC',
        image: 'https://knilt.arcc.albany.edu/images/9/9c/Cartie_so_what_icon.png',
        userId: 1,
        genreId: 51
      },
      {
        trackName: 'Mars for the rich',
        audioFile: 'http://www.amazon.com/gp/dmusic/get_sample_url.html?ASIN=B000S50QYC',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FMars-For-The-Rich%2Fdp%2FB07TFBDYT8&psig=AOvVaw1y-CQ3G8vkD2EVJtFa1mEd&ust=1617212920240000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDSv9_J2O8CFQAAAAAdAAAAABAJ',
        userId: 2,
        genreId: 54
      },
      {
        trackName: 'Debra',
        audioFile: 'http://www.amazon.com/gp/dmusic/get_sample_url.html?ASIN=B000S50QYC',
        image: 'http://www.whiskeyclone.net/disco/pics/44-2-1413509524-1.jpg',
        userId: 3,
        genreId: 41
      },
      {
        trackName: 'Planet Junior',
        audioFile: 'http://www.amazon.com/gp/dmusic/get_sample_url.html?ASIN=B000S50QYC',
        image: 'https://f4.bcbits.com/img/a2850039654_16.jpg',
        userId: 4,
        genreId: 59
      },
      {
        trackName: 'Que Beleza',
        audioFile: 'http://www.amazon.com/gp/dmusic/get_sample_url.html?ASIN=B000S50QYC',
        image: 'https://m.media-amazon.com/images/I/51ZInl6mZSL.jpg',
        userId: 5,
        genreId: 33
      },
      {
        trackName: 'The Color of Fire',
        audioFile: 'http://www.amazon.com/gp/dmusic/get_sample_url.html?ASIN=B000S50QYC',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41bdA3x07GL._SX466_.jpg',
        userId: 6,
        genreId: 23
      },
      {
        trackName: 'Pocket',
        audioFile: 'http://www.amazon.com/gp/dmusic/get_sample_url.html?ASIN=B000S50QYC',
        image: 'https://yt3.ggpht.com/ytc/AAUvwng09zy7--cWONKqJPZRgkO8CulZLPrBdfY7ez1Xmw=s900-c-k-c0x00ffffff-no-rj',
        userId: 7,
        genreId: 21
      },
      {
        trackName: 'My Man and I',
        audioFile: 'http://www.amazon.com/gp/dmusic/get_sample_url.html?ASIN=B000S50QYC',
        image: 'https://www.rollingstone.com/wp-content/uploads/2018/06/sister-rosetta-rock-and-roll-hall-of-fame-tribute-read-ac7d2155-4f3d-415f-ac68-9f229af957a2.jpg?resize=1800,1200&w=1200',
        userId: 8,
        genreId: 3
      },
      {
        trackName: 'Into the thick',
        audioFile: 'http://www.amazon.com/gp/dmusic/get_sample_url.html?ASIN=B000S50QYC',
        image: 'https://img.apmcdn.org/f7517c84309f37c0984f0d81d50f243533289cb1/square/236e06-20200220-black-market-brass.jpg',
        userId: 9,
        genreId: 34
      },
      {
        trackName: 'Talk SHow Host',
        audioFile: 'http://www.amazon.com/gp/dmusic/get_sample_url.html?ASIN=B000S50QYC',
        image: 'https://static.wikia.nocookie.net/radiohead/images/3/31/Street_spirit_album_cover.jpg/revision/latest?cb=20180628162126',
        userId: 10,
        genreId: 45
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Tracks', null, {});
  }
};
