const Sequelize     = require('sequelize');
const db            = require('../config/database');
const PetCategory   = require('../models/PetCategory');

const Pet = db.define('pets', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    petCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    pol: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Pet;