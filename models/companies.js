const { DataTypes, Model } = require('sequelize');

module.exports = class config extends Model {
  static init(sequelize){
    return super.init({
    companyid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    owner: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    roleId: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'companies',
    timestamps: false
  });
}
}
