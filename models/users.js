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
      allowNull: false,
      defaultValue: "No iniciado"
    },
    has_guild: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    guildname: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    },
    charlevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    espada: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ropera: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    hachuela: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    manopla: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    igneo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    vital: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    lanza: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    martillo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    hacha: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    mosquete: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    arco: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    inteligencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fuerza: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    destreza: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    concentracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    constitucion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    armas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    armamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ingenieria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    joyeria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    arcano: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cocina: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    decoracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fundicion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    carpinteria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    curtido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tejido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    canteria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    talado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    mineria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pesca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cosecha: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    desollamiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    style: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    flags: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true
  });
}
}