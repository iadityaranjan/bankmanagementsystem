const Sequelize = require('sequelize');
const db = require('../config/database');

const Customer = db.define('Customer', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Name: {
    type: Sequelize.STRING
  },
  Email: {
    type: Sequelize.STRING
  },
  CurrentBal: {
    type: Sequelize.INTEGER
  },
  AccountNo: {
    type: Sequelize.STRING
  }
});

module.exports = Customer;