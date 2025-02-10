'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
   
    static associate(models) {
      Tag.belongsToMany(models.Tag, {through: 'TaskTags'})
    }
  }
  Tag.init({
    name: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};