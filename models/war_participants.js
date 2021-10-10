const { DataTypes, Model } = require('sequelize');

module.exports = class config extends Model {
  static init(sequelize){
    return super.init({
    discordid: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    warid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    groupid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lastDM: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'war_participants',
    timestamps: false
  });
  }
}
