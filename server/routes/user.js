const express       = require('express');
const verifyToken   = require('../common');
const PetCategory   = require('../models/PetCategory');
const Pet           = require('../models/Pet');
const User          = require('../models/User');

const Router    = express.Router();

Router.get("/", verifyToken, async (req, res) => {
    User.findAll({
        attributes: ['id', 'label', 'email', 'level', 'createdAt', 'updatedAt'],
    })
        .then(async  users => {
            if (!users) {
                res.status(500).json({'error': `No user Found in databases`});
            } else {
                res.status(200).json(users);
            }
        })
        .catch(err => {
            res.status(500).json({'error': err});
        });
});

Router.get("/me", verifyToken, async (req, res) => {
    User.findOne({
        where: {
            id:      req.userId
        },
        attributes: ['id', 'email', 'level', 'createdAt', 'updatedAt'],
        include: [{
            model: Pet,
            as: 'pets',
            include: 'pet-category'
        }]
    })
        .then(async  user => {
            if (!user) {
                res.status(500).json({'error': `No user Found with this id: ${req.userId}`});
            } else {
                res.status(200).json(user);
            }
        })
        .catch(err => {
            res.status(500).json({'error': err});
        });
});

Router.post("/add-pet", verifyToken, (req, res) => {
    if (req.body.name != "" && req.body.PetCategoryId != "" && typeof req.userId !== undefined) {
        // console.log(req.body.name, req.body.PetCategoryId, req.userId);
        
        Pet.create({
            name:       req.body.name,
            categoryId: req.body.PetCategoryId,
            userId:     req.userId
        })
            .then(async pet => {
                // console.log(pet);
                User.findOne({
                    where: {
                        id:      pet.userId
                    },
                    attributes: ['id', 'email', 'level', 'createdAt', 'updatedAt'],
                    include: 'pets'
                })
                    .then(async  user => {
                        if (!user) {
                            res.status(500).json({'error': `User not found with this Id; ${userPet.user_id}`});
                        } else {
                            res.status(200).json({user});
                        }
                    })
                    .catch(err => {
                        res.status(500).json({'error': err});
                    });
            })
            .catch(err => {
                res.status(500).json({'error': err});
            });
    } else {
        res.status(500).json({'error': "Vous devez envoyer un userId et un petId valide"});
    }
});

Router.post('/treat-pet', verifyToken, (req, res) => {
    if (req.body.petId != "" && typeof req.body.petId !== undefined && typeof req.userId !== undefined) {
        const petId = req.body.petId;
        life = Math.floor(Math.random() * 10);

        Pet.findOne({
            where: {
                id:         petId,
                userId:     req.userId
            }
        })
            .then(async  pet => {
                // console.log(pet);
                pet.pol += life;
                Pet.update(
                    {pol: pet.pol},
                    {where: {
                        id: petId
                    }}
                )
                    .then((petId) => {
                        res.status(200).json(pet);
                    })
                    .catch(err => {
                        res.status(500).json({'error': err});
                });
            })
            .catch(err => {
                res.status(500).json({'error': err});
            });
    } else {
        res.status(500).json({'error': "Vous devez envoyer un userId et un petId valide"});
    }
})

module.exports = Router;