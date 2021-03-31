'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    commentBody: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    trackId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User,  { foreignKey: 'userId' })
    Comment.belongsTo(models.Track, { foreignKey: 'trackId' })
  };
  return Comment;
};