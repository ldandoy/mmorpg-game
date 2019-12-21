const express       = require('express');
const PetCategory   = require('../models/PetCategory');
const verifyToken   = require('../common');

const Router    = express.Router();

Router.get("/", verifyToken, (req, res) => {
    PetCategory.findAll()
        .then(async pets_categories => {
            res.status(200).json(pets_categories);
        })
        .catch(err => {
            res.status(500).json({'error': err});
        });
});

module.exports = Router;