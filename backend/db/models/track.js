'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    trackName: DataTypes.STRING,
    audioFile: DataTypes.TEXT,
    image: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {});
  Track.associate = function(models) {
    // associations can be defined here
  };
  return Track;
};