'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    
    static associate(models) {
      Task.belongsToMany(models.Tag, { through: 'TaskTags'})
    }
  }
  Task.init({
    title: DataTypes.STRING,
    status: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};