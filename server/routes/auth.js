const express   = require('express');
const User      = require('../models/User');
const jwt       = require('jsonwebtoken');

const Router    = express.Router();

Router.post("/register", async (req, res) => {
    // console.log(req.body);
    if (req.body.email != "" && req.body.email == req.body.email2 && req.body.password != "" && req.body.password == req.body.password2) {
        User.create({
            email:      req.body.email,
            password:   req.body.password
        })
            .then(async user => {
                let payload = {subject: user.id};
                let token = jwt.sign(payload, 'secretkey');
                res.status(200).json({token});
            })
            .catch(err => {
                res.status(500).json({'error': err});
            });
    } else {
        res.status(500).json({'error': "Vous n'avez pas rempli tous les champs, ou ils sont mal confirmés"});
    }
});

Router.post("/login", async (req, res) => {
    // console.log(req.body);
    if (req.body.email != "" && req.body.password != "") {
        User.findOne({
            where: {
                email:      req.body.email
            },
            attributes: ['id', 'email', 'password', 'createdAt', 'updatedAt'],
        })
            .then(async  user => {
                if (!user) {
                    res.status(500).json({'error': 'Erreur de login ou de mot de passe'});
                } else if (! await user.validPassword(req.body.password)) {
                    res.status(500).json({'error': 'Erreur de login ou de mot de passe'});
                } else {
                    let payload = {subject: user.id};
                    let token = jwt.sign(payload, 'secretkey');
                    res.status(200).json({token});
                }
            })
            .catch(err => {
                res.status(500).json({'error': err});
            });
        
    } else {
        res.status(500).json({'error': "Vous n'avez pas rempli tous les champs"});
    }
});

Router.get("/logout", (req, res) => {
    res.status(200).json('Vous êtes bien déconnecté');
});

module.exports = Router;