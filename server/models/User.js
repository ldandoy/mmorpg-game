const Sequelize = require('sequelize');
const bcrypt    = require('bcrypt');
const db        = require('../config/database');
const Pet       = require('./Pet');

const User = db.define('users', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    label: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    level: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    hooks: {
        beforeCreate: async function(user) {
            user.password = await bcrypt.hash(user.password, 10);
        }
    }
});

User.prototype.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = User;