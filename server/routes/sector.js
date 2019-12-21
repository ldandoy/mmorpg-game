const express       = require('express');
const Sector        = require('../models/Sector');
const verifyToken   = require('../common');

const Router    = express.Router();

Router.get("/:sectorId", verifyToken, (req, res) => {
    sectorId = req.params.sectorId;
    Sector.findOne({
        where: {
            id:      sectorId
        },
        attributes: ['id', 'label', 'imageUrl', 'createdAt', 'updatedAt'],
        include: 'places'
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