const Sequelize = require('sequelize');
const db        = require('../config/database');

const PlaceCategory = db.define('places_categories', {
    label: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
});

module.exports = PlaceCategory;