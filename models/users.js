const { DataTypes, Model } = require('sequelize');

module.exports = class config extends Model {
  static init(sequelize){
    return super.init({
    discordid: {
      type: DataTypes.STRING(20),
      allowNull: false,
			primaryKey: true
    },
    charname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    has_guild: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    guildname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    charlevel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    espada: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ropera: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hachuela: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    manopla: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    igneo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vital: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lanza: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    martillo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hacha: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mosquete: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    arco: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    inteligencia: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fuerza: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    destreza: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    concentracion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    constitucion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    armas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    armamento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ingenieria: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    joyeria: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    arcano: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cocina: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    decoracion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fundicion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    carpinteria: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    curtido: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tejido: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    canteria: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    talado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mineria: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pesca: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cosecha: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    desollamiento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    style: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    flags: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true
  });
}
}