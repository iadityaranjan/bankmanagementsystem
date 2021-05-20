const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('BankSystem', 'ashenblade', 'test1', {
    host: 'localhost',
    dialect: 'mysql',

    define: {
        timestamps: false
    }
});

module.exports = sequelize;