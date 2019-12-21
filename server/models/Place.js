const Sequelize     = require('sequelize');
const db            = require('../config/database');
const PlaceCategory = require('./PlaceCategory');
const Sector        = require('./Sector');

const Place = db.define('places', {
    label: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.STRING
    },
    sectorId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    placeCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Place;
