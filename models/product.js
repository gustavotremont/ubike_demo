'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Provider }) {
      this.belongsTo(Provider, { 
        foreignKey: 'providerId', 
        as: 'provider' 
      })
    }

    toJSON(){
      return { ...this.get(), id: undefined, providerId: undefined}
    }
  };
  Product.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:  { msg: "Product must have a name" },
        notEmpty: { msg: "Name can't be empty" }  
      }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull:  { msg: "Product must have a price" },
        notEmpty: { msg: "Price can't be empty" },
        isFloat:  { msg: "Price need to be a number" } 
      }
    },
    rating: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isNumeric:  { msg: "Rating need to be a number" }, 
        max: {
          args: 5,
          msg: "Rating can't be higher than 5"
        },
        min: {
          args: 0,
          msg: "Rating can't be lower than 0"
        },
      }
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull:  { msg: "Product must have a image" },
        notEmpty: { msg: "Image can't be empty" },
        isUrl:    { msg: "Image need to be a valid URL" }
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:  { msg: "Product must have a type" },
        notEmpty: { msg: "Type can't be empty" },
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull:  { msg: "Product must have a description" },
      }
    }
  }, {
    sequelize,
    tableName: 'products',
    modelName: 'Product',
  });
  return Product;
};