const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent:{
      type:DataTypes.STRING,
      allownull:false
    },
    capital:{
      type:DataTypes.STRING,
      allownull:false
    },
    ID:{
      type:DataTypes.STRING(3),
      allowNull:false,
      primaryKey:true,
      unique: true
    },
    flagimg:{
      type:DataTypes.STRING,
      allowNull:false
    },
    subregion:{
      type:DataTypes.STRING,
      
    },
    population:{
      type:DataTypes.INTEGER,
    },
    area:{
      type:DataTypes.FLOAT
    }
  },{timestamps:false});
};
console.log ("river")
