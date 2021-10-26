const { DataTypes, Model } = require('sequelize');

module.exports = class config extends Model {
  static init(sequelize){
    return super.init({
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    zonename: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    isFinished: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    result: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    enemy: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    guild: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wars',
    timestamps: false
  });
}
}
