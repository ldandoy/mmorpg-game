const Sequelize = require('sequelize');
const db        = require('../config/database');
const Pet       = require('./Pet');

const PetCategory = db.define('pets_categories', {
    label: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = PetCategory;