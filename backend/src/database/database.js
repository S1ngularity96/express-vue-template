const { Sequelize, Model, DataTypes } = require("sequelize");
const settings = require('../../settings')
const path = require('path');

const sequelize = process.env.NODE_ENV === 'test' ?
  new Sequelize({ dialect: "sqlite", storage: "./database.test.sqlite", logging: console.log }) :
  new Sequelize({ dialect: "sqlite", storage: path.join(settings.DATABASE.DIR, settings.DATABASE.NAME), logging: false })



module.exports = {
  db: sequelize,

};
