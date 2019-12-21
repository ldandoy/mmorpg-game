const express       = require('express');
const Place         = require('../models/Place');
const verifyToken   = require('../common');

const Router    = express.Router();

Router.get("/:placeId", verifyToken, (req, res) => {
    placeId = req.params.placeId;
    Place.findOne({
        where: {
            id:      placeId
        },
        attributes: ['id', 'label', 'description', 'sectorId', 'placeCategoryId', 'createdAt', 'updatedAt'],
        include: ['place-category']
    })
        .then(async  sector => {
            if (!sector) {
                res.status(500).json({'error': `No sector Found this this id: ${sectorId}`});
            } else {
                res.status(200).json(sector);
            }
        })
        .catch(err => {
            res.status(500).json({'error': err});
        });
});

module.exports = Router;