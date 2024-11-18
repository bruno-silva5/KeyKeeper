const Sequelize = require('sequelize')
const db = require('../connection');
const User = require('./User');

const Credential = db.define('credentials', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    website: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { underscored: true })

Credential.belongsTo(User, {
    foreignKey: {
        name: 'user_id',
        allowNull: false,
        underscored: true
    }
});

Credential.sync({ alter: false });

module.exports = Credential;