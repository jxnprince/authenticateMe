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
    Track.belongsTo(models.User, { foreignKey: 'userId' });
    Track.hasMany(models.Comment, { foreignKey: 'trackId' });
    Track.belongsTo(models.Genre, { foreignKey: 'genreId' });
  };
  return Track;
};