'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Provider extends Model {
    static associate({ Product }) {
      this.hasMany( Product, { 
        foreignKey: 'providerId', 
        as: 'products',
        onDelete: 'CASCADE'
      })
    }

    toJSON(){
      return { ...this.get(), id: undefined }
    }
  };

  Provider.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull:  { msg: "Provider must have a name" },
        notEmpty: { msg: "Name can't be empty" }  
      }
    },
    cif: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validator: {
        notNull:  { msg: "Provider must have a CIF" },
        notEmpty: { msg: "CIF can't be empty" },
        is: {
          args: /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/,
          msg: "CIF need to be a valid CIF format"
        },
        isUppercase: {
          args: true,
          msg: "CIF can only be uppercase"
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull:  { msg: "Provider must have a address" },
        notEmpty: { msg: "Address can't be empty" }  
      }
    },
  }, {
    sequelize,
    tableName: 'providers',
    modelName: 'Provider',
  });
  return Provider;
};