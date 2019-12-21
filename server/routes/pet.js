const express       = require('express');
const Pet           = require('../models/Pet');
const verifyToken   = require('../common');

const Router    = express.Router();

Router.get("/", verifyToken, (req, res) => {
    /*Pet.findAll({
        where: {
            userId:     req.userId
        }
    })*/
    Pet.findAll()
        .then(async  pets => {
            res.status(200).json(pets);
        })
        .catch(err => {
            res.status(500).json({'error': err});
        });
});

Router.get("/:petId", verifyToken, (req, res) => {
    const petId = req.params.petId;
    /*Pet.findOne({
        where: {
            id:         petId,
            userId:     req.userId
        }
    })*/
    Pet.findOne({
        where: {
            id:         petId,
        }
    })
        .then(async  pet => {
            res.status(200).json(pet);
        })
        .catch(err => {
            res.status(500).json({'error': err});
        });
});

module.exports = Router;