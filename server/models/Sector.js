const Sequelize = require('sequelize');
const db        = require('../config/database');
const Place       = require('./Place');

const Sector = db.define('sector', {
    label: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Sector;