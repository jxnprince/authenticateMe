'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@example.com',
        username: 'demoUser',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'kglw@flightless.com',
        username: 'King Gizzard and The Lizard Wizard',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'beck@odelay.com',
        username: 'Beck',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'bRainbow@planetjunior.net',
        username: 'Babe Rainbow',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'timM@hotmail.com',
        username: 'Tim Maia',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'boards@sixtyten.com',
        username: 'Boards of Canada',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'louie@fujiApple.com',
        username: 'Louie Zong',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'rosetta@riverside.net',
        username: 'Sister Rosetta Tharpe',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'bmb@undyingThirst.net',
        username: 'Black Market Brass',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'factsForWhatever@waste.uk',
        username: 'radiohead',
        hashedPassword: bcrypt.hashSync('password'),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {});
  }
};