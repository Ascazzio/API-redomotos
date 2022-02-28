'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.part, {
        foreignKey: 'partId'
      });
      this.belongsTo(models.user, {
        foreignKey: 'userId'
      });
    }
  };
  order.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    partId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'order',
  });
  return order;
};