const { DataTypes, Model } = require('sequelize');

module.exports = class config extends Model {
  static init(sequelize){
    return super.init({
    warid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    zonename: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    zoneid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isFinished: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    result: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wars',
    timestamps: false
  });
}
}
